import React, { useContext, useEffect, useRef, useState } from "react";
import api from "../api/axios";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import BoxContainer from "../utilities/BoxContainer";

const MyConnection = () => {
  const { user } = useContext(AuthContext);
  const [connections, setConnections] = useState([]);
  const [selectedConnection, setSelectedConnection] = useState(null);
  const modalRef = useRef(null);
  useEffect(() => {
    document.title = "StudyMate | My Connections";
  }, []);

  useEffect(() => {
    const getRequestByEmail = async () => {
      try {
        const res = await api.get(`requests?email=${user.email}`);
        setConnections(res.data);
      } catch (error) {
        //console.log(error);
        toast.error("Failed to fetch connections");
      }
    };
    getRequestByEmail();
  }, [user.email]);
  //console.log(connections);

  // Handle update
  const handleUpdate = async (id) => {
    //console.log("Update ID:", id);
    try {
      const result = await api.get(`/requests/${id}`);
      //console.log(result);
      setSelectedConnection(result.data);

      if (modalRef.current) {
        modalRef.current.showModal();
      }
    } catch (error) {
      //console.log(error);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    //console.log(id);
    try {
      await api.delete(`/requests/${id}`);
      setConnections(connections.filter((c) => c._id !== id));
      const userId = connections[0].userid;
      const result = await api.get(`partners/${userId}`);
      const prevConnection = Number(result.data.connectionCount);
      //console.log(prevConnection);
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

  const updateConnection = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedName = form[0].value;
    const updatedStudyMode = form[1].value;
    const updatedSubject = form[2].value;
    //console.log(updatedName, updatedStudyMode, updatedSubject);
    try {
      const res = await api.patch(`/requests/${selectedConnection._id}`, {
        name: updatedName,
        studyMode: updatedStudyMode,
        subjec: updatedSubject,
      });
      //console.log(res.data);
      const { data: updated } = await api.get(
        `/requests/${selectedConnection._id}`
      );
      setConnections((prevConnections) =>
        prevConnections.map((conn) =>
          conn._id === selectedConnection._id ? updated : conn
        )
      );
      toast.success("Connection updated successfully");
      modalRef.current?.close();
      form.reset();
    } catch (error) {
      //console.log(error);
      toast.error("Failed to update connection");
    }
  };

  return (
    <BoxContainer>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
          My Connections
        </h2>

        {/* Desktop & Tablet View */}
        <div className="hidden md:block overflow-x-auto">
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
                      alt={conn.name}
                      className="w-14 h-14 rounded-md bg-stone-200 p-1 object-cover"
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

        {/* Mobile View */}
        <div className="block md:hidden space-y-4">
          {connections.length > 0 ? (
            connections.map((conn) => (
              <div
                key={conn._id}
                className="border border-gray-200 rounded-lg p-4 shadow-sm bg-base-100"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={conn.profileImage}
                    alt={conn.name}
                    className="w-16 h-16 rounded-md bg-stone-200 p-1 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{conn.name}</h3>
                    <p className="text-sm text-gray-500">{conn.subjec}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  <p>
                    <span className="font-medium">Study Mode:</span>{" "}
                    {conn.studyMode}
                  </p>
                </div>
                <div className="flex justify-between">
                  <button
                    className="btn btn-sm btn-primary w-[48%]"
                    onClick={() => handleUpdate(conn._id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-error w-[48%]"
                    onClick={() => handleDelete(conn._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No connections found</p>
          )}
        </div>
      </div>

      {/* Modal Code */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={updateConnection}>
            <h3 className="font-bold text-lg">Update Connection</h3>
            <div className="py-4">
              <label className="label">
                <span className="label-text font-bold">Full Name:</span>
              </label>
              <input
                type="text"
                defaultValue={selectedConnection?.name}
                className="input input-bordered w-full"
              />
            </div>
            <div className="py-4">
              <label className="label">
                <span className="label-text font-bold">Study Mode:</span>
              </label>
              <select
                defaultValue={selectedConnection?.studyMode}
                className="select select-bordered w-full"
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            <div className="py-4">
              <label className="label">
                <span className="label-text font-bold">Subject:</span>
              </label>
              <input
                type="text"
                defaultValue={selectedConnection?.subjec}
                className="input input-bordered w-full"
              />
            </div>
            <div className="py-4">
              <button
                type="submit"
                className="btn btn-primary text-white w-full"
              >
                Update Connection
              </button>
            </div>
          </form>

          {/* Modal Close Button */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </BoxContainer>
  );
};

export default MyConnection;
