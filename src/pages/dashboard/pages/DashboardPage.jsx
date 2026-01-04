import React, { useContext, useEffect, useState } from "react";
import api from "../../../api/axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthContext";
import { RequestsChart } from "../_components/RequestsChart";
import { StudyModeChart } from "../_components/StudyModeChart";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const [allMyPartners, setAllMyPartners] = useState([]);
  const [allMyRequests, setAllMyRequests] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    const timer = setTimeout(() => {
      const getRequestByEmail = async () => {
        try {
          const res = await api.get(`requests?email=${user.email}`);
          setAllMyRequests(res.data);
        } catch (error) {
          toast.error("Failed to fetch connections");
        }
      };
      getRequestByEmail();
    }, 100);
    return () => clearTimeout(timer);
  }, [user?.email]);

  useEffect(() => {
    if (!user?.email) return;
    const timer = setTimeout(() => {
      const getPartnersByEmail = async () => {
        try {
          const res = await api.get("partners");
          setAllMyPartners(res.data);
        } catch (error) {
          toast.error("Failed to fetch connections");
        }
      };
      getPartnersByEmail();
    }, 100);
    return () => clearTimeout(timer);
  }, [user?.email]);

  console.log(allMyPartners);

  const totalRatings = allMyPartners.reduce((acc, partner) => {
    const rating = Number(partner.rating); // convert to number
    return acc + (isNaN(rating) ? 0 : rating);
  }, 0);
  const avgRating =
    allMyPartners.length > 0
      ? (totalRatings / allMyPartners.length).toFixed(1)
      : 0;

  console.log("Average Rating:", avgRating);
  if (!user?.email) return;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
        {/* Connections Card */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body flex flex-col items-center text-center">
            <div className="avatar placeholder mb-3">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-3-3h-2m-4 5H7a3 3 0 01-3-3v-2h5m4 0h4m-4 0V9m0 0H7m4 0h4"
                  />
                </svg>
              </div>
            </div>
            <h2 className="card-title">Total Partners</h2>
            <p className="text-2xl font-bold">{allMyPartners.length}</p>
            <p className="text-sm text-gray-500">Total study partners</p>
          </div>
        </div>

        {/* Requests Card */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body flex flex-col items-center text-center">
            <div className="avatar placeholder mb-3">
              <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>
            <h2 className="card-title">Requests Sent</h2>
            <p className="text-2xl font-bold">{allMyRequests.length}</p>
            <p className="text-sm text-gray-500">Pending approvals</p>
          </div>
        </div>

        {/* Ratings Card */}
        <div className="card bg-base-100 shadow-md border border-base-300">
          <div className="card-body flex flex-col items-center text-center">
            <div className="avatar placeholder mb-3">
              <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.955a1 1 0 00-.364-1.118L2.074 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.955z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="card-title">Average Rating</h2>
            <p className="text-2xl font-bold">{avgRating}</p>
            <p className="text-sm text-gray-500">Based on feedback</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 m-10">
        <RequestsChart requests={allMyRequests} />
        <StudyModeChart partners={allMyPartners} />
      </div>
    </>
  );
};

export default DashboardPage;
