import { useEffect, useState } from "react";
import Slider from "../components/slider/Slider";
import api from "../api/axios";
import BoxContainer from "../utilities/BoxContainer";
import PartnerCard from "../components/partnersCard/PartnerCard";
import HowItWorks from "../components/extraSection/HowItWorks";
import Testimonials from "../components/extraSection/Testimonials";

const Home = () => {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    document.title = "StudyMate | Home";
  }, []);
  useEffect(() => {
    const getAllPartners = async () => {
      try {
        const res = await api.get("partners");
        const sortedPartners = res.data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 6);
        setPartners(sortedPartners);
        // console.log(sortedPartners);
      } catch (error) {
        console.error(error);
      }
    };
    getAllPartners();
  }, []);

  return (
    <>
      <Slider></Slider>
      <BoxContainer>
        <h2 className="mt-16 text-4xl font-bold uppercase text-center">
          Top Study <span className="text-secondary">Partner</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {partners.map((partner) => (
            <PartnerCard key={partner._id} partner={partner} />
          ))}
        </div>
        <HowItWorks></HowItWorks>
        <Testimonials></Testimonials>
      </BoxContainer>
    </>
  );
};

export default Home;

// {
//           headers: {
//             authorization: `Bearer ${user.accessToken}`,
//           },
// }
