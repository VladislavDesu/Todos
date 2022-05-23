import React, {FC} from "react";
import cl from "./List.module.scss";
import {ITodo} from "@/types/types";
import Item from "@components/list/Item";

interface ListProps {
    todos: Array<ITodo>,
    remove: (id: number) => void
    complete: (id: number, completed: boolean) => void
}

const List: FC<ListProps> = ({todos, remove, complete}) => {
    return (
        <ul className={cl.list}>
            {
                todos.length !== 0
                    ? todos.map(todo => <Item complete={complete} remove={remove} key={todo.id} todo={todo}/>)
                    : <p className={cl.empty}>No Items</p>
            }
        </ul>
    );
};

export default List;