import React,{useState} from "react";
import {useSelector,useDispatch} from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

const Todo = () => {

  const[inputData, setInputData] = useState('');
  const list = useSelector((state)=>state.todoReducer.list);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div>

          <figure className="text-center my-6">
            <figcaption className="font-extrabold text-2xl">
              Add Your List Here ✌{" "}
            </figcaption>
          </figure>

          <div className="text-center my-2">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              className="bg-slate-200 mx-1 text-center border-black border-solid border-2"
              value={inputData}
              onChange= {(event) => setInputData(event.target.value)}
            />
            <button className="bg-gray-500 w-7 border-black border-solid border-2" onClick={()=> dispatch(addTodo(inputData),setInputData(''))}>+</button>
          </div>

          <div className="my-5">
            {
              list.map((elem)=>{
                return(
                  <div key={elem.id} className=" flex flex-row justify-center mx-2">
                    <h3 className="w-60 bg-slate-200  border-black border-solid border-2 text-center my-2">{elem.data}</h3>
                    <span><button  title="Delete item" onClick={()=>dispatch(deleteTodo(elem.id))}>🗑️</button></span>
                  </div>
                )
                })
            }
          </div>

         
          
          <div className="flex flex-row justify-center my-5">
            <button data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())} className=" bg-blue-400 mx-2 border-black border-solid border-2 h-20 w-40">Check List</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Todo;
