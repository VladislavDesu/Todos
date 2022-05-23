import React, {FC, useState} from "react";
import cl from "@components/list/List.module.scss";
import {ITodo} from "@/types/types";

interface ItemProps {
    todo: ITodo,
    remove: (id: number) => void;
    complete: (id: number, completed: boolean) => void;
}

const Item: FC<ItemProps> = ({todo, remove, complete}) => {
    const [isChecked, setIsChecked] = useState<boolean>(todo.completed);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, id: number): void => {
        setIsChecked(e.target.checked);
        complete(id, e.target.checked);
    };

    const removeTodo = (id: number): void => {
        remove(id);
    };

    const textClass: string = isChecked ? [cl.text, cl.text_line].join(" ") : cl.text;

    return (
        <li className={cl.item}>
            <label className={cl.checkbox} aria-label="Custom Checkbox">
                <input className="visible-hidden" onChange={(e) => onChange(e, todo.id)} checked={isChecked}
                       type="checkbox"/>
                <span aria-label="checkbox indicator"/>
            </label>
            <span className={textClass}>{todo.text}</span>
            <button className={cl.delete} onClick={() => removeTodo(todo.id)} aria-label="Delete Todo Item">Delete
            </button>
        </li>
    );
};

export default Item;