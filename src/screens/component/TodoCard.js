import React from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

const TodoCard = ({ complete, remain }) => {
  return (
    <>
      <div className="bg-[#641ae5] w-full flex justify-between items-center p-3  rounded-xl">
        {/* Text-Portion of card start */}
        <div className="flex items-start justify-between flex-col gap-2">
          <h1>Yolo</h1>
          <div className="flex gap-3">
            <h6>
              remain <span className="text-[#FF6263]"> {remain}</span>
            </h6>
            <h6>
              complete <span className="text-[#00D84A]">{complete}</span>
            </h6>
          </div>
        </div>
        {/* Text-Portion of card end */}
        <div className="flex items-center justify-center gap-10 px-3 rounded-lg">
          <AiOutlineEdit size={25} color="#758283" />
          <AiFillDelete size={25} color="#E21717" />
        </div>
      </div>
    </>
  );
};

export default TodoCard;
