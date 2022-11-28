import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAddCircleLine } from "react-icons/ri";
import TodoCard from "./component/TodoCard";

const HomeScreen = () => {
  return (
    <div className="bg-[#410068] min-h-screen min-w-full flex justify-center items-start sm:items-center flex-col">
      <div className="w-[100%] sm:w-auto flex items-center justify-center  flex-col gap-4">
        <h1 className="w-[100%] sm:w-[500px] flex items-center justify-center p-3 bg-[#5e0098] ">
          Todo
        </h1>
        <div className="w-[100%] sm:w-[500px] flex bg-[#5A20CB] items-center ">
          <input
            type="text"
            className="h-10 w-[75%] bg-white m-2 p-2"
            placeholder="Add or Search"
          />
          <RiAddCircleLine
            className="btn btn-primary px-1 rounded-2xl mx-2"
            size={40}
            color="white"
          />
          <AiOutlineSearch
            className="btn btn-primary p-1 rounded-2xl"
            size={40}
            color="white"
          />
        </div>
      </div>
      <div className="w-[100%] sm:w-[500px] sm:h-[500px] grow sm:grow-0 bg-white overflow-scroll p-1 flex items-start justify-start flex-col gap-3">
        {/* card start */}
        <TodoCard complete={10} remain={5} />
        {/* card end */}
      </div>
    </div>
  );
};

export default HomeScreen;
