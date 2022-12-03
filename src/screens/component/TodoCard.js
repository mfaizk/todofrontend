// import React, { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDataStore } from "../../store/dataStore";

const TodoCard = ({ title, complete, remain, id, todoId }) => {
  const deleteTodo = useDataStore((state) => state.deleteTodo);
  const userId = useDataStore((state) => state.id);
  const editTodo = useDataStore((state) => state.editTodo);
  const nav = useNavigate();
  // const todos = useDataStore((state) => state.todos);
  // const [todoComplete, setTodoComplete] = useState(0);
  // const [todoRemain, setTodoRemain] = useState(0);
  const editHandler = () => {
    const data = prompt("Enter title", title);
    if (data === "" && data === title) {
      return toast.info("No changement");
    }

    editTodo(userId, todoId, data);
  };

  return (
    <>
      <div className="bg-[#641ae5] w-full flex justify-between items-center p-3  rounded-xl">
        {/* Text-Portion of card start */}
        <div
          className="flex items-start justify-between flex-col gap-2"
          onClick={() => {
            nav(`/home/${title}/${todoId}`);
          }}
        >
          <h1>{title}</h1>
          {/* <div className="flex gap-3">
            <h6>
              remain <span className="text-[#FF6263]"> {todoRemain}</span>
            </h6>
            <h6>
              complete <span className="text-[#00D84A]">{todoComplete}</span>
            </h6>
          </div> */}
        </div>
        {/* Text-Portion of card end */}
        <div className="flex items-center justify-center gap-10 px-3 rounded-lg">
          <AiOutlineEdit
            size={25}
            color="#758283"
            onClick={() => {
              // console.log("clicked");
              editHandler();
            }}
          />
          <AiFillDelete
            size={25}
            color="#B9345A"
            onClick={() => {
              // console.log("clicked");
              deleteTodo(id, todoId);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TodoCard;
