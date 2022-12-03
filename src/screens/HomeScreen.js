import { Account } from "appwrite";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAddCircleLine } from "react-icons/ri";
import { toast } from "react-toastify";
import client from "../config/appwrite.config";
import { useDataStore } from "../store/dataStore";
import TodoCard from "./component/TodoCard";

const HomeScreen = () => {
  const addTodo = useDataStore((state) => state.addTodo);
  const [todo, settodo] = useState("");
  const account = new Account(client);
  const todos = useDataStore((state) => state.todos);
  const initialLoad = useDataStore((state) => state.initialLoad);
  const promise = account.get();
  const inputRef = React.createRef();
  const setId = useDataStore((state) => state.setId);
  const id = useDataStore((state) => state.id);
  const searchTodo = useDataStore((state) => state.searchTodo);

  const setDataInTodo = () => {
    if (!todo.trim()) return toast("Enter some text");

    const promise = account.get();
    promise
      .then((u) => {
        addTodo(todo, u.$id);
        toast("Todo added");
        inputRef.current.value = "";
      })
      .catch((e) => {
        toast(e.message);
      });
    // console.log(todo);
  };

  const initialDataLoad = () => {
    promise
      .then((u) => {
        setId(u.$id);
        initialLoad(u.$id);
      })
      .catch((e) => {
        toast(e.message);
      });
  };
  useEffect(() => {
    initialDataLoad();
  }, []);

  return (
    <div className="bg-[#410068] min-h-screen min-w-full flex justify-center items-start sm:items-center flex-col">
      <div className="w-[100%] sm:w-auto flex items-center justify-center  flex-col gap-4">
        <h1
          className="w-[100%] sm:w-[500px] flex items-center justify-center p-3 bg-[#5e0098] "
          onClick={() => {
            initialDataLoad();
            inputRef.current.value = "";
          }}
        >
          Todo
        </h1>
        <div className="w-[100%] sm:w-[500px] flex bg-[#5A20CB] items-center ">
          <input
            type="text"
            className="h-10 w-[75%] bg-white m-2 p-2"
            placeholder="Add or Search"
            onChange={(e) => {
              settodo(e.target.value);
            }}
            ref={inputRef}
          />
          <RiAddCircleLine
            className="btn btn-primary px-1 rounded-2xl mx-2"
            size={40}
            color="white"
            onClick={() => {
              setDataInTodo();
              // console.log("clicked");
            }}
          />
          <AiOutlineSearch
            className="btn btn-primary p-1 rounded-2xl"
            size={40}
            color="white"
            onClick={() => {
              searchTodo(id, todo);
            }}
          />
        </div>
      </div>
      <div className="w-[100%] sm:w-[500px] sm:h-[500px] grow sm:grow-0 bg-white overflow-scroll p-1 flex items-start justify-start flex-col gap-3">
        {/* card start */}
        {todos.length < 1 ? (
          <>
            <h1>No todo exist</h1>
          </>
        ) : (
          todos.map((e) => (
            <TodoCard
              title={e.title}
              complete={10}
              remain={0}
              key={e.createdAt}
              id={id}
              todoId={e._id}
            />
          ))
        )}
        {/* card end */}
      </div>
    </div>
  );
};

export default HomeScreen;
