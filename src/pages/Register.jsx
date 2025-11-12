import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    document.title = "StudyMate | Register";
  }, []);

  const passwordChecks = [
    {
      regex: /(?=.*[a-z])/,
      msg: "Password must contain at least one lowercase letter (a–z).",
    },
    {
      regex: /(?=.*[A-Z])/,
      msg: "Password must contain at least one uppercase letter (A–Z).",
    },
    {
      regex: /(?=.*\d)/,
      msg: "Password must contain at least one number (0–9).",
    },
    {
      regex: /(?=.*[!@#$%^&*()_\-+=[\]{};:'",.<>/?\\|~`])/,
      msg: "Password must contain at least one special character (e.g. !@#$%^&*).",
    },
    { regex: /^.{6,}$/, msg: "Password must be at least 6 characters long." },
    { regex: /^\S+$/, msg: "Password must not contain spaces." },
  ];
  const handlePasswordChange = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);
    for (const check of passwordChecks) {
      if (!check.regex.test(newPass)) {
        setPasswordError(check.msg);
        return;
      }
    }
    setPasswordError("");
  };

  const allValid = passwordChecks.every((c) => c.regex.test(password));

  const handleUserRegistration = async (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value?.trim();
    const photoURL = form.photo_url.value?.trim();
    const email = form.email.value?.trim();
    const password = form.password.value?.trim();
    try {
      await createUser(email, password);
      await updateUserProfile({ displayName, photoURL });
      form.reset();
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      // style={{ backgroundImage: ` url(${bgLogin})` }}
    >
      {/* Form Card */}
      <div className="relative z-10 w-[90%] max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-cente mb-6">
          Welcome To Our Website
        </h2>
        {/* Form Body */}
        <form
          onSubmit={handleUserRegistration}
          className="flex flex-col space-y-4"
        >
          {/* Name Input Field */}
          <fieldset className="w-full">
            <label className="label font-medium">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              required
              name="name"
            />
          </fieldset>
          {/* Email Input Field */}
          <fieldset className="w-full">
            <label className="label font-medium">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
              name="email"
            />
          </fieldset>
          {/* Password Input Field */}
          <fieldset className="w-full">
            <label className="label font-medium">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              required
              name="password"
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="text-red-400 text-sm mt-1">{passwordError}</p>
            )}
          </fieldset>
          {/* Photo URL Input Field */}
          <fieldset className="w-full">
            <label className="label font-medium">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your photo URL"
              name="photo_url"
            />
          </fieldset>
          {/* Login Button Field */}
          <button
            type="submit"
            className={`btn w-full border-0 ${
              allValid
                ? "text-gray-100 bg-linear-to-r from-[#501794] to-[#3E70A1] hover:text-gray-300"
                : "bg-gray-700 cursor-not-allowed text-gray-50"
            }  `}
            disabled={!allValid}
          >
            Register
          </button>
          {/* Redirect to Signup */}
          <p className="text-center mt-4">
            Already have an account?
            <Link
              to="/login"
              className="link link-hover bg-linear-to-r from-[#af8ed6] to-[#6fb1f3] bg-clip-text text-transparent font-medium ml-2"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
