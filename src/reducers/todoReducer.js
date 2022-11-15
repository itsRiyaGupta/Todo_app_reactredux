// import { useState } from "react"
// import React from "react";

const initialData = {
  list: [],
};

// const[list, setList] = useState([]);
// for list the empty array we were using in hooks below is same but in redux

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default todoReducer;
