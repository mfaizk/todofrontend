import create from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

const dataStore = (set) => ({
  isClicked: false,
  user: {},
  todos: [],
  id: "",
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
});

export const useDataStore = create(dataStore);
