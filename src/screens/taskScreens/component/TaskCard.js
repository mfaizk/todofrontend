import React from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { TiTickOutline, TiTick } from "react-icons/ti";
import { useDataStore } from "../../../store/dataStore";

const TaskCard = ({ taskId, todoId, title, isCompleted }) => {
  const uid = useDataStore((state) => state.id);
  const deleteTask = useDataStore((state) => state.deleteTask);
  const editTask = useDataStore((state) => state.editTask);
  const id = useDataStore((state) => state.id);
  const editHandler = () => {
    const task = prompt("Edit existing task", title);
    editTask(id, todoId, taskId, task, isCompleted);
  };
  // console.log(todoId);
  return (
    <>
      <div className="bg-[#641ae5] w-full flex justify-between items-center p-3  rounded-xl">
        {/* Text-Portion of card start */}
        <div className="flex items-start justify-between flex-col gap-2">
          <h1>{title}</h1>
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
              //   console.log("clicked");
              deleteTask(uid, todoId, taskId);
              // console.log(taskId, todoId, uid);
            }}
          />
          {isCompleted ? (
            <TiTick
              size={25}
              color="#B9345A"
              onClick={() => {
                //   console.log("clicked");
                // deleteTask(uid, todoId, taskId);
              }}
            />
          ) : (
            <TiTickOutline
              size={25}
              color="#B9345A"
              onClick={() => {
                //   console.log("clicked");
                // deleteTask(uid, todoId, taskId);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TaskCard;
