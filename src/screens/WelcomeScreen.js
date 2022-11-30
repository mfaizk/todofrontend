import { Link } from "react-router-dom";
const WelcomeScreen = () => {
  return (
    <div className="min-h-screen bg-[#410068] flex items-center justify-center">
      <div className="container sm:max-w-xl bg-[#5e0098] flex justify-center items-center flex-col gap-10 sm:p-16 p-1 sm:min-h-[700px] min-h-screen">
        <img
          className="sm:w-80 w-56 sm:hidden flex"
          src={require("../assets/asset-xl/logo-xl.png")}
          alt="brand-logo"
        />
        <img
          className="sm:w-80 w-56 hidden sm:flex"
          src={require("../assets/logo.png")}
          alt="brand-logo"
        />
        <Link
          className="bg-[#f3f4f6] text-[#5e0098] sm:w-1/2 sm:min-w-[500px] w-[90%] p-3 flex items-center justify-center"
          to="/signin"
        >
          Login
        </Link>
        <Link
          className="bg-[#5e0098] text-[#ffffff] border-white border-2 sm:w-1/2 sm:min-w-[500px] w-[90%] p-3 flex items-center justify-center"
          to="/signup"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;
