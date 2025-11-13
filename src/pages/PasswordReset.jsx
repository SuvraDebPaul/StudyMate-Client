import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import BoxContainer from "../utilities/BoxContainer";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const PasswordReset = () => {
  const location = useLocation();
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(location.state);
  useEffect(() => {
    document.title = "StudyMate | Password Reset";
  }, []);

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Add password reset logic here
    const form = e.target;
    const email = form.email.value;
    console.log("Password reset link sent to:", email);
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
        navigate("/login");
      })
      .catch((error) => {
        toast.error("Error sending password reset email:", error.message);
      });
  };

  return (
    <BoxContainer className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center my-6">
        Reset Your Password By Email
      </h2>
      <form
        onSubmit={handlePasswordReset}
        action=""
        className="mx-auto mb-6 space-y-4"
      >
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text font-bold">Email Address:</span>
          </label>
          <input
            type="email"
            defaultValue={location.state?.email}
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs"
            name="email"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Send
        </button>
      </form>
    </BoxContainer>
  );
};

export default PasswordReset;
