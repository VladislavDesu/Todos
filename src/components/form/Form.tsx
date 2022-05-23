import React, {Dispatch, FC, SetStateAction, useState} from "react";
import cl from "./Form.module.scss";
import {ITodo} from "@/types/types";

interface FormProps {
    setTodos: Dispatch<SetStateAction<ITodo[]>>
}

const Form: FC<FormProps> = ({setTodos}) => {
    const [todoInput, setTodoInput] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTodoInput(e.target.value);
    };

    const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (todoInput.length) {
            setTodos(todos => [...todos, {
                id: Date.now(),
                completed: false,
                text: todoInput,
            }]);

            setTodoInput("");
        }
    };

    return (
        <form onSubmit={addTodo}>
            <input className={cl.input} value={todoInput} onChange={handleChange} placeholder="Enter your Todo..."
                   type="text"/>
        </form>
    );
};

export default Form;