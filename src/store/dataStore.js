import create from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

const dataStore = (set) => ({
  isClicked: false,
  user: {},
  todos: [],
  id: "",
  task: [],
  setId: (id) => {
    set((state) => ({
      id: id,
    }));
  },
  setUser: (u) => {
    set((state) => ({
      user: u,
    }));
  },
  initialLoad: (uid) => {
    axios
      .get(`http://localhost:4000/api/v1/todo/${uid}/default`)
      .then((data) => {
        // console.log(data.data);
        set((state) => ({
          todos: data.data,
        }));
        toast.success("data loaded");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  },

  //TODO CRUD START
  addTodo: async (todo, id) => {
    await axios
      .post(`http://localhost:4000/api/v1/todo/${id}`, {
        title: todo,
      })
      .then((res) => {
        if (res.data.sucess) {
          // console.log(res.data.todos);
          set((state) => ({
            todos: res.data.todos,
          }));
        } else {
          toast("Error occured");
        }
      });
  },
  deleteTodo: async (id, todoId) => {
    await axios
      .delete(`http://localhost:4000/api/v1/todo/${id}/${todoId}`)
      .then((res) => {
        if (res.data.msg === "sucess") {
          set((state) => ({
            todos: res.data.todos,
          }));
          toast.info("deleted sucessfully");
        }
      });
  },
  editTodo: async (id, todoId, title) => {
    await axios
      .put(`http://localhost:4000/api/v1/todo/${id}/${todoId}`, {
        title: title,
      })
      .then((res) => {
        if (res.data.msg === "sucess") {
          set((state) => ({
            todos: res.data.todos,
          }));
          toast.info("Edited sucessfully");
        }
      })
      .catch((e) => {
        toast.error(e.message);
      });
  },

  searchTodo: async (uid, titile) => {
    await axios
      .get(`http://localhost:4000/api/v1/todo/search/${uid}/${titile}`)
      .then((data) => {
        // console.log(data.data.todos);
        set((state) => ({
          todos: data.data.todos,
        }));
        toast.success("data loaded");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  },
  //TODO CRUD START

  //TASK CRUD START

  initialLoadTask: async (uid, todoId) => {
    await axios
      .get(`http://localhost:4000/api/v1/${uid}/${todoId}/default`)
      .then((data) => {
        // console.log(data.data);
        // console.log(data.data);
        // const task = data.data.todos.filter((e) => e._id === todoId);
        set((state) => ({
          task: data.data,
        }));
        toast.success("data loaded");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  },

  addTask: async (id, todoId, title) => {
    await axios
      .post(`http://localhost:4000/api/v1/${id}/${todoId}`, {
        title: title,
      })
      .then((res) => {
        if (res.data.msg === "sucess") {
          // console.log(res.data.task);
          set((state) => ({
            task: res.data.task,
          }));
          toast.success(res.data.msg);
        }
      })
      .catch((e) => {
        toast.error(e.message);
      });
  },

  deleteTask: async (uid, todoId, taskId) => {
    await axios
      .delete(`http://localhost:4000/api/v1/${uid}/${todoId}/${taskId}`)
      .then((res) => {
        // console.log(res.data);
        if (res.data.msg === "sucess") {
          // console.log(res.data.task);
          set((state) => ({
            task: res.data.task,
          }));
          toast.success(res.data.msg);
        }
      })
      .catch((e) => {
        // console.log("called");
        toast.error(e.message);
      });
  },

  editTask: async (uid, todoId, taskId, task, isCompleted) => {
    await axios
      .put(`http://localhost:4000/api/v1/${uid}/${todoId}/${taskId}`, {
        title: task,
        isCompleted: isCompleted,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.msg === "sucess") {
          // console.log(res.data.task);
          set((state) => ({
            task: res.data.task,
          }));
          toast.success(res.data.msg);
        }
      })
      .catch((e) => {
        // console.log("called");
        toast.error(e.message);
      });
  },

  searchTask: async (uid, todoId, text) => {
    await axios
      .get(`http://localhost:4000/api/v1/${uid}/search/${todoId}/${text}`)
      .then((res) => {
        set((state) => ({
          task: res.data.task,
        }));
      })
      .catch((e) => {
        toast.error(e.message);
      });
  },

  //TASK CRUD END
});

export const useDataStore = create(dataStore);
