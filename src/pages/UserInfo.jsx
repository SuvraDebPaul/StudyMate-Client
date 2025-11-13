import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import BoxContainer from "../utilities/BoxContainer";
import Loader from "../utilities/Loader";

const UserInfo = () => {
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    document.title = "StudyMate | User Info";
  }, []);
  if (loading) return <Loader></Loader>;
  if (!user) return;
  return (
    <div>
      <BoxContainer>
        <section className="my-10 flex">
          <div className="flex-1">
            <img src={user.photoURL} alt="" className="w-full px-20" />
          </div>
          <div className="flex-1 space-y-5 mt-10">
            <p className="text-2xl font-bold">
              <span>Full Name:</span> {user.displayName}
            </p>
            <p className="text-2xl font-bold">
              <span>Email:</span> {user.email}
            </p>
          </div>
        </section>
      </BoxContainer>
    </div>
  );
};

export default UserInfo;
