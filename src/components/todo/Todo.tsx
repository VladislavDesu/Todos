import React, {FC, useEffect, useState} from "react";
import cl from "./Todo.module.scss";
import List from "@components/list/List";
import {ITodo} from "@/types/types";

const Todo: FC = () => {
    const [todoInput, setTodoInput] = useState<string>("");
    const [todos, setTodos] = useState<Array<ITodo>>([]);
    const [todosCompleted, setTodosCompleted] = useState<Array<ITodo>>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTodoInput(e.target.value);
    };

    const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (todoInput.length) {
            setTodos(todos => [...todos, {
                id: todos.length,
                completed: false,
                text: todoInput,
            }]);

            setTodoInput("");
        }
    };

    return (
        <div className={cl.todo}>
            <form onSubmit={addTodo}>
                <input className={cl.input} value={todoInput} onChange={handleChange} placeholder="Enter your Todo..."
                       type="text"/>
            </form>

            {
                todos.length !== 0 ? <>
                    <List todos={todos}/>

                    <div className={cl.bottom}>
                        <span>{todosCompleted.length} items left</span>
                    </div>
                </> : null
            }
        </div>
    );
};

export default Todo;