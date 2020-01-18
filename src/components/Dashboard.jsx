import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import items from "./items";
import AddItem from "./AddItem";

const initialState = items;

const Dashboard = () => {
  const [todos, setToDos] = useState(items);

  useEffect(() => {
    async function fetchData() {
      const test = todos;
      setToDos(test);
    }
    fetchData();
  });

  const toggleItem = item => {
    item.isOpen = !item.isOpen;
    setToDos([...todos]);
  };

  return (
    <div>
      <ul>
        <AddItem submitHandler={setToDos} />
        {todos &&
          todos.map(item => (
            <li
              onClick={() => toggleItem(item)}
              className={item.isOpen ? "open" : "closed"}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dashboard;
