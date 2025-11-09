// import React, { useContext, useEffect } from "react";
import Slider from "../components/slider/Slider";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  // const { user } = useContext(AuthContext);
  // useEffect(() => {
  //   if (!user) return;
  //   fetch("http://localhost:3000/partners", {
  //     headers: {
  //       authorization: `Bearer ${user.accessToken}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, [user]);

  return (
    <div>
      <Slider></Slider>
    </div>
  );
};

export default Home;
