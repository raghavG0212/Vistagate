import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [ email, setEmail ] = useState("");
  const navigate = useNavigate();
  function handleChange(e) {
    setEmail(e.target.value);
  }
  async function handleSubmit(e){
    e.preventDefault();
    try{
      const auth = getAuth();
      await sendPasswordResetEmail(auth,email);
      navigate('/sign-in');
      toast.success("Email was sent.");
    }
    catch(error){
      toast.error("Could not send reset password.");
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sign-in"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={handleSubmit}>
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
              type="email"
              id="email"
              placeholder="Your Email address"
              value={email}
              onChange={handleChange}
              required
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="capitalize">
                don't have an account?
                <Link
                  to="/sign-up"
                  className="ml-1 text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out"
                >
                  Register
                </Link>
              </p>
              <p className="capitalize">
                <Link
                  to="/sign-in"
                  className="ml-1 text-red-500 hover:text-red-700 transition duration-200 ease-in-out"
                >
                  Sign In instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Send Reset Password
            </button>
            <div className="my-4 before:border-t after:border-t flex before:flex-1 after:flex-1 items-center before:border-gray-300 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
