import React, {Dispatch, FC, SetStateAction, useState} from "react";
import cl from "@components/list/List.module.scss";
import {ITodo} from "@/types/types";

interface ItemProps {
    todo: ITodo
}

const Item: FC<ItemProps> = ({todo}) => {
    const [isChecked, setIsChecked] = useState<boolean>(todo.completed);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(e.target.checked);
    };

    const textCompleted = isChecked ? [cl.text, cl.text_line].join(" ") : cl.text;

    return (
        <li className={cl.item}>
            <label className={cl.checkbox} aria-label="Custom Checkbox">
                <input className="visible-hidden" onChange={onChange} checked={isChecked} type="checkbox"/>
                <span aria-label="checkbox indicator"/>
            </label>
            <span className={textCompleted}>{todo.text}</span>
            <button className={cl.delete} aria-label="Delete Todo Item">Delete</button>
        </li>
    );
};

export default Item;