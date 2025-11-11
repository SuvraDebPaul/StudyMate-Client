import React, { useContext, useEffect, useState } from "react";
import api from "../api/axios";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import BoxContainer from "../utilities/BoxContainer";

const MyConnection = () => {
  const { user } = useContext(AuthContext);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const getRequestByEmail = async () => {
      try {
        const res = await api.get(`requests?email=${user.email}`);
        setConnections(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch connections");
      }
    };
    getRequestByEmail();
  }, [user.email]);
  //console.log(connections);

  // Handle update
  const handleUpdate = (id) => {
    console.log("Update ID:", id);
    // logic for updating
  };

  // Handle delete
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await api.delete(`/requests/${id}`); // assuming your backend supports delete
      setConnections(connections.filter((c) => c._id !== id));
      const userId = connections[0].userid;
      const result = await api.get(`partners/${userId}`);
      const prevConnection = Number(result.data.connectionCount);
      console.log(prevConnection);
      if (prevConnection >= 0) {
        const updateCount = prevConnection - 1;
        const patch = await api.patch(`partners/${userId}`, {
          connectionCount: updateCount,
        });
        //console.log(patch.data);
      }
      toast.success("Connection deleted");
    } catch (err) {
      //console.error(error);
      toast.error("Failed to delete connection", err);
    }
  };

  return (
    <BoxContainer>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">My Connections</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Profile Picture</th>
                <th>Subject</th>
                <th>Study Mode</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {connections.map((conn) => (
                <tr key={conn._id}>
                  <td>{conn.name}</td>
                  <td>
                    <img
                      src={conn.profileImage}
                      alt={conn.fullName}
                      className="w-15 h-15 rounded-md bg-stone-200 p-1 object-fill"
                    />
                  </td>
                  <td>{conn.subjec}</td>
                  <td>{conn.studyMode}</td>
                  <td className="space-x-2">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleUpdate(conn._id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => handleDelete(conn._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {connections.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center">
                    No connections found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </BoxContainer>
  );
};

export default MyConnection;
