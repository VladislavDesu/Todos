import React, {Dispatch, FC, SetStateAction} from "react";
import cl from "./List.module.scss";
import {ITodo} from "@/types/types";
import Item from "@components/list/Item";

interface ListProps {
    todos: Array<ITodo>,
}

const List: FC<ListProps> = ({todos}) => {
    return (
        <ul className={cl.list}>
            {
                todos.map(todo => <Item key={todo.id} todo={todo}/>)
            }
        </ul>
    );
};

export default List;