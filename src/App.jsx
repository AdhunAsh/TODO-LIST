import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    return (
        <div className="container">
            <h1>TODO-LIST</h1>
            <div className="input-box">
                <input
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    type="text"
                    placeholder="What would you like to do?"
                />
                <button
                    className="add-btn"
                    onClick={(e) => {
                        setTodos([
                            ...todos,
                            { id: Date.now(), text: todo, status: false },
                        ]);
                        setTodo("");
                    }}
                >
                    Add
                </button>
            </div>
            <div className="task">
                <h2>Todo List</h2>
                <div className="todo-container">
                    {todos.map((obj) => {
                        return (
                            <div className="todo-row">
                                <div className="todo-left">
                                    <input
                                        onChange={(e) => {
                                            console.log(e.target.checked);
                                            console.log(obj);
                                            setTodos(
                                                todos.map((obj2) => {
                                                    if (obj2.id === obj.id) {
                                                        return {
                                                            ...obj2,
                                                            status: e.target
                                                                .checked,
                                                        };
                                                    }
                                                    return obj2;
                                                })
                                            );
                                        }}
                                        type="checkbox"
                                        name=""
                                        id=""
                                    />
                                    <p className="todo-text">{obj.text}</p>
                                </div>
                                <div className="todo-status">
                                    <p
                                        className={`status ${
                                            obj.status ? "completed" : "pending"
                                        }`}
                                    >
                                        {obj.status
                                            ? "Completed ✅"
                                            : "Pending ⏳"}
                                    </p>
                                </div>
                                <div className="todo-delete">
                                    <button
                                        className="delete"
                                        onClick={(e) => {
                                            setTodos(
                                                todos.filter(
                                                    (obj2) => obj2.id !== obj.id
                                                )
                                            );
                                        }}
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
