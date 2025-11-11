import React, { useEffect, useState } from "react";
import api from "../api/axios";
import PartnerCard from "../components/partnersCard/PartnerCard";
import BoxContainer from "../utilities/BoxContainer";

const FindPartner = () => {
  const [allPartners, setAllPartners] = useState([]);
  useEffect(() => {
    const getAllPartners = async () => {
      try {
        const res = await api.get("partners");
        const sortedPartners = res.data;
        setAllPartners(sortedPartners);
      } catch (error) {
        console.error(error);
      }
    };
    getAllPartners();
  }, []);

  return (
    <div>
      <BoxContainer className="my-10">
        <h2 className="text-4xl font-black uppercase mb-10 text-center">
          Find Your Perfect{" "}
          <span className="text-secondary">Study Partner</span>
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {allPartners.map((partner) => (
            <PartnerCard key={partner._id} partner={partner} />
          ))}
        </div>
      </BoxContainer>
    </div>
  );
};

export default FindPartner;
