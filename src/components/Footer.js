import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../redux/filters/actions";

const taskCounter = (task_remaining) => {
  switch (task_remaining) {
    case 0: {
      return "No Task";
    }
    case 1: {
      return "1 Task";
    }
    default:
      return `${task_remaining} Tasks`;
  }
};

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const todosLeft = todos.filter((todo) => !todo.completed);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const { status, colors } = filters;
  console.log(filters);

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p> {taskCounter(todosLeft.length)} Left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${
            status === "All" && "font-bold text-green-800"
          }`}
          onClick={() => handleStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            status === "incomplete" && "font-bold text-green-800"
          }`}
          onClick={() => handleStatusChange("incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            status === "complete" && "font-bold text-green-800"
          }`}
          onClick={() => handleStatusChange("complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
        <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
        <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
      </ul>
    </div>
  );
};

export default Footer;
