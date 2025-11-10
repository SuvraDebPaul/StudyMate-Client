import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import api from "../api/axios";
import Loader from "../utilities/Loader";
import { toast } from "react-toastify";

const CreatePartnerProfile = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <Loader></Loader>;
  // console.log(user);
  const handleFromSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const profileImage = form.photoURL.value;
    const availableTimeFrom = form.timeFrom.value;
    const availableTimeTo = form.timeTo.value;
    const studyMode = form.studyMode.value;
    const connectionCount = form.connectionCount.value;
    const experience = form.experience.value;
    const rating = form.rating.value;
    const location = form.location.value;

    const partnerProfile = {
      fullName,
      email,
      subject,
      profileImage,
      availableTimeFrom,
      availableTimeTo,
      studyMode,
      connectionCount,
      experience,
      rating,
      location,
      createdAt: new Date(),
    };

    try {
      const res = await api.post("partners", partnerProfile);
      console.log("Success:", res.data);
      alert("Partner added successfully!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-10 mb-5">
        Create a <span className="text-purple-500">Profile</span>
      </h2>
      <div className="w-4xl mx-auto ">
        <form onSubmit={handleFromSubmit}>
          <div className="flex justify-between max-w-4xl mx-auto border p-4 shadow-md gap-4 mb-4">
            <div className="flex-1 space-y-4">
              <fieldset className="fieldset">
                <label className="label text-lg text-stone-700 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Full Name"
                  name="name"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-lg text-stone-700 font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Subject "
                  name="subject"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-lg text-stone-700 font-semibold">
                  Availability Time
                </label>
                <div className="flex items-center justify-between gap-4">
                  <label className="input">
                    <span className="label">From</span>
                    <input type="time" name="timeFrom" />
                  </label>
                  <label className="input">
                    <span className="label">To</span>
                    <input type="time" name="timeTo" />
                  </label>
                </div>
              </fieldset>
              <fieldset className="fieldset flex items-center">
                <label className="label text-lg text-stone-700 font-semibold mr-4">
                  Study Mode:
                </label>
                <div className="flex gap-4 items-center w-full">
                  <input
                    type="radio"
                    name="studyMode"
                    className="radio"
                    value="online"
                    defaultChecked
                  />
                  <p className="text-lg">Online</p>
                  <input
                    type="radio"
                    name="studyMode"
                    className="radio"
                    value="offline"
                  />
                  <p className="text-lg">Offline</p>
                </div>
              </fieldset>
              <fieldset className="fieldset flex items-center gap-4">
                <label className="label text-lg text-stone-700 font-semibold block">
                  Connections Count :
                </label>
                <input
                  className="input"
                  type="number"
                  name="connectionCount"
                  value="0"
                  readOnly
                />
              </fieldset>
            </div>
            <div className="flex-1 space-y-4">
              <fieldset className="fieldset">
                <label className="label text-lg text-stone-700 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="email"
                  defaultValue={user.email}
                  name="email"
                  readOnly
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-lg text-stone-700 font-semibold">
                  Profile Image
                </label>
                <label className="input w-full">
                  <span className="label">https://</span>
                  <input type="text" placeholder="URL" name="photoURL" />
                </label>
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-lg text-stone-700 font-semibold block">
                  Experience
                </label>
                <label className="select w-full">
                  <span className="label">Experience Level</span>
                  <select name="experience">
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </label>
              </fieldset>
              <fieldset className="fieldset flex items-center gap-4">
                <label className="label text-lg text-stone-700 font-semibold block">
                  Rating:
                </label>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating"
                    value="1"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="1 star"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="2"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="2 star"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="3"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="3 star"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="4"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="4 star"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="5"
                    className="mask mask-star-2 bg-orange-400"
                    aria-label="5 star"
                  />
                </div>
              </fieldset>
              <fieldset className="fieldset flex items-center gap-4">
                <label className="label text-lg text-stone-700 font-semibold inline-block">
                  Location:
                </label>
                <label className="input w-full">
                  <span className="label">📍</span>
                  <input
                    type="text"
                    placeholder="Dhaka, Chittagong, Khulna"
                    name="location"
                  />
                </label>
              </fieldset>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePartnerProfile;
