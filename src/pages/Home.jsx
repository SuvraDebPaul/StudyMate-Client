import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Loader from "../utilities/Loader";

const Home = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!user) return;
    fetch("http://localhost:3000/partners", {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user]);

  return <div>Home Page</div>;
};

export default Home;
