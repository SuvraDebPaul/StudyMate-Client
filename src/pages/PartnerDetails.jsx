import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api/axios";
import BoxContainer from "../utilities/BoxContainer";
import { IoStar } from "react-icons/io5";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const PartnerDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [partner, setPartner] = useState({});
  //console.log(id);

  useEffect(() => {
    document.title = "StudyMate | Partner Details";
  }, []);
  useEffect(() => {
    const getPartnerById = async () => {
      try {
        const res = await api.get(`partners/${id}`);
        setPartner(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPartnerById();
  }, [id]);

  function convertTime(t) {
    return new Date(`1970-01-01T${t}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  const handleRequest = async () => {
    const userEmail = user.email;
    const userId = id;
    const updateCount = Number(partner.connectionCount) + 1;
    try {
      const result = await api.patch(`partners/${userId}`, {
        connectionCount: updateCount,
      });
     // console.log(result.data);
      setPartner((prev) => ({
        ...prev,
        connectionCount: updateCount,
      }));
      const newPartnerRequest = {
        userid: userId,
        email: userEmail,
        name: partner.fullName,
        profileImage: partner.profileImage,
        subjec: partner.subject,
        studyMode: partner.studyMode,
      };
      const postRequest = await api.post("/requests", newPartnerRequest);
     // console.log(postRequest.data);
      toast.success("Partner Profile added successfully!");
    } catch (error) {
      //console.log(error);
    }
  };

  //console.log(partner);
  return (
    <>
      <BoxContainer>
        <section className="my-10 flex">
          <div className="flex-1">
            <img
              src={partner.profileImage}
              alt=""
              className="w-full px-4 lg:px-20"
            />
          </div>
          <div className="flex-1 space-y-2 md:space-y-5 md:mt-10">
            <p className="text-xl md:text-2xl font-bold">
              <span>Full Name:</span> {partner.fullName}
            </p>
            <p className="text-xl md:text-2xl font-bold">
              <span>Subject:</span> {partner.subject}
            </p>
            <p className="text-xl md:text-2xl font-bold">
              <span>Study Mode:</span> {partner.studyMode}
            </p>
            <p className="text-xl md:text-2xl font-bold">
              <span>Availablity:</span> {convertTime(partner.availableTimeFrom)}{" "}
              - {convertTime(partner.availableTimeTo)}
            </p>
            <p className="text-xl md:text-2xl font-bold">
              <span>Experience Level:</span> {partner.experience}
            </p>
            <p className="text-xl md:text-2xl font-bold">
              <span>Location:</span> {partner.location}
            </p>
            <p className="text-xl md:text-2xl font-bold flex items-center gap-3">
              <span>Rating:</span>{" "}
              <span className="flex items-center gap-2">
                {Array.from({ length: partner.rating }, (_, i) => (
                  <IoStar key={i} size={20} color="orange" />
                ))}
              </span>
            </p>
            <p className="text-xl md:text-2xl font-bold">
              <span>Connection Count:</span> {partner.connectionCount}
            </p>
            <button
              onClick={handleRequest}
              className="btn btn-primary text-white"
            >
              Send Partner Request
            </button>
          </div>
        </section>
      </BoxContainer>
    </>
  );
};

export default PartnerDetails;
