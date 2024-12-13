import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  // for input
  const [input, setInput] = useState("");
  //for add dynamic data in box
  const [container, setContainer] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Submit task and add it to the container
  const submitTask = () => {
    if (input.trim()) {
      // Add the new input to the container
      setContainer([...container, input]);
      setInput("");
      // Clear the input field
    }
  };

  //remove text when click x-mark on button
  const removeText = () => {
    let text=document.querySelector('.text-box')
    console.log(text)
  };

  return (
    <>
      <div className="todo-container">
        <nav className="navbar">
          <input
            type="text"
            onChange={handleChange}
            value={input}
            placeholder="Enter your text"
          />
          <button className="submit-btn" onClick={submitTask}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </nav>
        {/* dynamically add container */}

        <div className="text-content">
          {container.map((text, index) => (
            <div className="text-container" key={index}>
              <div className="text-box">{text}</div>
              <button className="mark">
                <i className="fa-solid fa-x" onClick={removeText}></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
