import React, { useEffect, useState } from "react";
import api from "../api/axios";
import PartnerCard from "../components/partnersCard/PartnerCard";
import BoxContainer from "../utilities/BoxContainer";

const FindPartner = () => {
  const [allPartners, setAllPartners] = useState([]);
  const [originalPartners, setOriginalPartners] = useState([]);
  const [searchPartner, setSearchPartner] = useState("");
  useEffect(() => {
    document.title = "StudyMate | All Partners";
  }, []);

  useEffect(() => {
    const getAllPartners = async () => {
      try {
        const res = await api.get("partners");
        const sortedPartners = res.data;
        setAllPartners(sortedPartners);
        setOriginalPartners(sortedPartners);
      } catch (error) {
        console.error(error);
      }
    };
    getAllPartners();
  }, []);

  const handleSortByExperience = (e) => {
    const selected = e.target.value;
    if (selected === "experience") {
      const experienceRank = { beginner: 1, intermediate: 2, advanced: 3 };
      const sorted = [...allPartners].sort((a, b) => {
        const expA = a.experience.trim().toLowerCase();
        const expB = b.experience.trim().toLowerCase();
        return experienceRank[expB] - experienceRank[expA];
      });
      setAllPartners(sorted);
    }
  };
  console.log(allPartners);
  const handleSearchPartner = (e) => {
    e.preventDefault();
    const searchValue = e.target.value.trim().toLowerCase();
    setSearchPartner(searchValue);
    if (!searchValue) {
      setAllPartners(originalPartners);
      return;
    }
    const filteredPartners = originalPartners.filter((partner) =>
      partner.subject.toLowerCase().includes(searchValue)
    );
    setAllPartners(filteredPartners);
  };

  return (
    <div>
      <BoxContainer className="my-10">
        <h2 className="text-4xl font-black uppercase mb-10 text-center">
          Find Your Perfect{" "}
          <span className="text-secondary">Study Partner</span>
        </h2>
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1 mr-4">
            <form>
              <label className="input w-full md:w-1/3">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="text"
                  required
                  placeholder="Search partners..."
                  name="search"
                  className="w-full"
                  onChange={(e) => handleSearchPartner(e)}
                />
              </label>
            </form>
          </div>
          <div>
            <form>
              <select
                onChange={handleSortByExperience}
                className="select appearance-none"
                defaultValue="Sort"
              >
                <option disabled={true}>Sort</option>
                <option value="experience">Sort By Experience</option>
              </select>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
          {allPartners.map((partner) => (
            <PartnerCard key={partner._id} partner={partner} />
          ))}
        </div>
      </BoxContainer>
    </div>
  );
};

export default FindPartner;
