import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiGoogle, SiFacebook } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import { useDataStore } from "../store/dataStore";
import { Account, ID } from "appwrite";
import client from "../config/appwrite.config";
const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const formRef = React.useRef();
  // const nav = useNavigate();
  const isClicked = useDataStore((state) => state.isClicked);
  const account = new Account(client);
  const navigate = useNavigate();

  const loginHandler = () => {
    if (email.trim() && password.trim() && cnfPassword.trim()) {
      if (password.trim() === cnfPassword.trim()) {
        account
          .create(ID.unique(), email.trim(), password.trim(), null)
          .then((res) => {
            toastHandler("UAC created redirecting to user");
            formRef.current.reset();
            navigate("/signin");
          })
          .catch((e) => {
            toastHandler(e.message);
          });
      } else {
        toastHandler("Password not matching");
      }
    } else {
      toastHandler("Fill information");
    }
  };

  const toastHandler = (msg) => {
    if (window.innerWidth > 640) {
      toast(msg, {
        position: "top-right",
        style: { backgroundColor: "#5e0098", color: "#fff" },
      });
    } else {
      toast(msg, {
        position: "bottom-right",
        style: { backgroundColor: "#5e0098", color: "#fff" },
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#410068] flex justify-center items-center font-montserrat ">
      <div className="bg-[#5e0098] lg:min-h-[556px] min-h-screen lg:min-w-[1016px] min-w-full flex items-center justify-center lg:flex-row sm:flex-row flex-col">
        <div className="flex sm:hidden text-white self-start p-4">Sign up</div>
        <div className="lg:min-w-[508px] lg:min-h-[556px] sm:min-w-[254px] min-w-full flex justify-center items-center grow">
          <img
            src={require("../assets/asset-xl/logo-xl.png")}
            alt="brand-logo"
            className="sm:flex hidden"
          />
          <div className="sm:hidden flex flex-col justify-end self-end flex-1  p-5 text-white">
            <h1 className="font-poppins-bold text-2xl">Welcome</h1>
            <h1 className="text-sm">Sign up to continue</h1>
          </div>
        </div>
        <div className="bg-white lg:min-h-[556px]   lg:min-w-[508px] sm:min-w-[254px] min-w-full grow">
          <form
            className="flex justify-start items-start flex-col lg:min-h-[556px]  p-8 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              loginHandler();
            }}
            ref={formRef}
          >
            <h1 className="text-2xl font-semibold">Sign up to continue</h1>

            <input
              type="text"
              id="email"
              className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2 bg-white"
              placeholder="Email"
              onChange={(v) => {
                setEmail(v.currentTarget.value);
              }}
            />
            <input
              type="password"
              id="password"
              className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2 bg-white"
              placeholder="Password"
              onChange={(v) => {
                setPassword(v.currentTarget.value);
              }}
            />
            <input
              type="password"
              id="cnfpassword"
              className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2 bg-white"
              placeholder="Confirm password"
              onChange={(v) => {
                setCnfPassword(v.currentTarget.value);
              }}
            />

            <button
              className={`${
                true ? "bg-[#5e0098]" : "bg-[#9a3dd4]"
              } text-[#ffffff] h-12 border-white border-2 sm:w-1/2 lg:min-w-[500px] min-w-full w-[90%] p-3 flex items-center justify-center self-center`}
              about="Signup"
              disabled={!true}
            >
              {isClicked ? (
                <>
                  <img
                    src={require("../assets/clicked.gif")}
                    alt=""
                    className="h-24"
                  />
                </>
              ) : (
                <>Sign up</>
              )}
            </button>

            {isClicked ? (
              <></>
            ) : (
              <>
                <div className="flex items-center justify-center min-w-full gap-2">
                  <div className="h-[1px] bg-[#E5E7EB] w-[40%]"></div>
                  <span className="text-[#9CA3AF]">or</span>
                  <div className="h-[1px] bg-[#E5E7EB] w-[40%]"></div>
                </div>
                <div className="flex self-center gap-3">
                  <SiFacebook size={24} />
                  <SiGoogle size={24} />
                </div>
                <h1 className="flex self-center mt-auto text-[#6B7280]">
                  Already have an account?
                  <Link
                    className="text-[#4C1D95] ml-1"
                    to={"/signin"}
                    replace={true}
                  >
                    {" "}
                    Sign in
                  </Link>
                </h1>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
