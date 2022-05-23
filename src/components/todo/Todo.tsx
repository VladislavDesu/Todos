import React, {FC, useEffect, useState} from "react";
import cl from "./Todo.module.scss";
import List from "@components/list/List";
import {ITodo} from "@/types/types";
import Form from "@components/form/Form";
import Tabs from "@components/tabs/Tabs";

const Todo: FC = () => {
    const [todos, setTodos] = useState<Array<ITodo>>([]);
    const [todosIsNotCompleted, setTodosIsNotCompleted] = useState<Array<ITodo>>([]);
    const [todosIsCompleted, setTodosIsCompleted] = useState<Array<ITodo>>([]);
    const [current, setCurrent] = useState<number>(0);

    const TodosList: Array<Array<ITodo>> = [todos, todosIsNotCompleted, todosIsCompleted];

    const removeTodo = (todoID: number): void => {
        setTodos(todos.filter(todo => todo.id !== todoID));
    };

    const completeTodo = (todoID: number, completed: boolean): void => {
        const newTodos = todos.map(todo => {
            if (todo.id === todoID) {
                todo.completed = completed;
            }

            return todo;
        });

        setTodos(newTodos);
    };

    const clearCompleted = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setTodos([...todosIsNotCompleted]);
    };

    useEffect(() => {
        const filteredIsNotCompleted = todos.filter(todo => !todo.completed);
        const filteredIsCompleted = todos.filter(todo => todo.completed);
        setTodosIsNotCompleted(filteredIsNotCompleted);
        setTodosIsCompleted(filteredIsCompleted);
    }, [todos]);

    return (
        <div className={cl.todo}>
            <Form setTodos={setTodos}/>

            {
                todos.length !== 0 ? <>
                    <List complete={completeTodo} remove={removeTodo} todos={TodosList[current]}/>

                    <div className={cl.bottom}>
                        <span>{todosIsNotCompleted.length} items left</span>
                        <Tabs changeList={setCurrent}/>
                        {
                            todosIsCompleted.length !== 0
                                ? <button onClick={clearCompleted} className={cl.clear}>Clear completed</button>
                                : null
                        }
                    </div>
                </> : null
            }
        </div>
    );
};

export default Todo;