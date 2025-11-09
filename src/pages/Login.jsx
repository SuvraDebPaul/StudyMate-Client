import { MdOutlineAlternateEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, signInUserGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    document.title = "StudyMate | Login";
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value?.trim();
    const password = form.password.value?.trim();
    // console.log(email, password);
    signInUser(email, password)
      .then(() => {
        toast.success("Login Successfull");
        form.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInUserGoogle()
      .then(() => {
        toast.success("Login Successfull");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  const handleEmailInput = (e) => {
    setUserEmail(e.target.value);
    console.log(userEmail);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
      {/* Form Card */}
      <div className="relative z-10 w-[90%] max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back 👋</h2>
        {/* Form Body */}
        <form className="flex flex-col space-y-4" onSubmit={handleSignIn}>
          {/* Email Input Field */}
          <fieldset className="w-full">
            <label className="label text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
              name="email"
              onChange={(e) => handleEmailInput(e)}
            />
          </fieldset>
          {/* Password Input Field */}
          <fieldset className="w-full">
            <label className="label text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              required
              name="password"
            />
          </fieldset>
          {/* Forger Password Filed */}
          <div className="text-right">
            <Link
              to="/reset"
              state={{ email: userEmail }}
              className="link link-hover text-sm text-gray-600"
            >
              Forgot password?
            </Link>
          </div>
          {/* Login Button Field */}
          <button
            type="submit"
            className="btn w-full border-0 text-gray-100 bg-linear-to-r from-[#501794] to-[#3E70A1]"
          >
            <MdOutlineAlternateEmail /> Login With Email
          </button>
          <p className="text-center text-gray-700">Or</p>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className=" my-2 btn w-full border-0 text-gray-100 bg-linear-to-r from-[#501794] to-[#3E70A1]"
        >
          <FcGoogle /> Login With Google
        </button>
        {/* Redirect to Signup */}
        <p className="text-center text-gray-700 mt-4">
          Don’t have an account?
          <Link
            to="/register"
            className="link link-hover bg-linear-to-r from-[#501794] to-[#3E70A1] bg-clip-text text-transparent font-medium ml-2"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
