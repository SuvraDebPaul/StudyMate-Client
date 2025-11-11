import React from "react";
import { Link } from "react-router";
import { IoStar } from "react-icons/io5";

const PartnerCard = ({ partner }) => {
  return (
    <div className="p-4 shadow-md space-y-2 bg-stone-50 hover:-translate-y-1 duration-300 transition-all ease-in-out">
      <img
        className="w-full rounded-md hover:scale-105 duration-300 transition-all ease-in-out"
        src={partner.profileImage}
        alt={partner.fullName}
      />
      <h3 className="text-2xl font-bold uppercase text-primary">
        {partner.fullName}
      </h3>
      <div className="flex justify-between items-center font-bold text-secondary uppercase">
        <p>
          <span>Subject:</span> <span>{partner.subject}</span>
        </p>
        <p>
          <span>Skills: </span>
          {partner.experience}
        </p>
      </div>

      <p className="flex items-center gap-1 mb-5">
        {Array.from({ length: partner.rating }, (_, i) => (
          <IoStar key={i} size={20} color="orange" />
        ))}
      </p>
      <Link to={`/partner/${partner._id}`} className="btn btn-primary w-full">
        View Profile
      </Link>
    </div>
  );
};

export default PartnerCard;
