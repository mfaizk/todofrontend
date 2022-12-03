import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAddCircleLine } from "react-icons/ri";
import { useDataStore } from "../../store/dataStore";
import { useParams } from "react-router-dom";
import client from "../../config/appwrite.config";
import { Account } from "appwrite";
import TaskCard from "./component/TaskCard";

const TaskHomeScreen = () => {
  const [tasktext, settasktext] = useState("");
  const inputRef = React.createRef();
  const { todo, todoId } = useParams();

  const addTask = useDataStore((state) => state.addTask);
  const task = useDataStore((state) => state.task);
  const id = useDataStore((state) => state.id);
  const setId = useDataStore((state) => state.setId);
  const initilLoadTask = useDataStore((state) => state.initialLoadTask);
  const searchTask = useDataStore((state) => state.searchTask);
  // console.log(tasks);
  const account = new Account(client);
  const promise = account.get();

  useEffect(() => {
    promise.then((r) => {
      setId(r.$id);
      initilLoadTask(r.$id, todoId);
    });
  }, []);

  if (!task) return <div>Hello</div>;

  return (
    <div className="bg-[#410068] min-h-screen min-w-full flex justify-center items-start sm:items-center flex-col">
      <div className="w-[100%] sm:w-auto flex items-center justify-center  flex-col gap-4">
        <h1
          className="w-[100%] sm:w-[500px] flex items-center justify-center p-3 bg-[#5e0098] "
          onClick={() => {
            initilLoadTask(id, todoId);
          }}
        >
          {todo}
        </h1>
        <div className="w-[100%] sm:w-[500px] flex bg-[#5A20CB] items-center ">
          <input
            type="text"
            className="h-10 w-[75%] bg-white m-2 p-2"
            placeholder="Add or Search"
            onChange={(e) => {
              settasktext(e.target.value);
            }}
            ref={inputRef}
          />
          <RiAddCircleLine
            className="btn btn-primary px-1 rounded-2xl mx-2"
            size={40}
            color="white"
            onClick={() => {
              addTask(id, todoId, tasktext);
              inputRef.current.value = "";
              // console.log("clicked");
            }}
          />
          <AiOutlineSearch
            className="btn btn-primary p-1 rounded-2xl"
            size={40}
            color="white"
            onClick={() => {
              searchTask(id, todoId, tasktext);
              inputRef.current.value = "";
            }}
          />
        </div>
      </div>
      <div className="w-[100%] sm:w-[500px] sm:h-[500px] grow sm:grow-0 bg-white overflow-scroll p-1 flex items-start justify-start flex-col gap-3">
        {/* card start */}
        {task.length < 1 ? (
          <>
            <h1>No todo exist</h1>
          </>
        ) : (
          task.map((e) => {
            return (
              <TaskCard
                taskId={e._id}
                title={e.title}
                todoId={todoId}
                key={e._id}
                isCompleted={e.isCompleted}
              />
            );
          })
        )}
        {/* card end */}
      </div>
    </div>
  );
};

export default TaskHomeScreen;
