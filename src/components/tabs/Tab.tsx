import React, {Dispatch, FC, SetStateAction} from "react";
import cl from "@components/tabs/Tabs.module.scss";
import {ITab} from "@/types/types";

interface TabProps extends ITab {
    id: number,
    changeList: Dispatch<SetStateAction<number>>
    setTabs: Dispatch<SetStateAction<Array<ITab>>>
}

const Tab: FC<TabProps> = ({name,id, changeList, active, setTabs}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        changeList(id);
        setTabs(tabs => {
            const filtered = tabs.map(tab => {
                const currentIndex: number = tabs.indexOf(tab);

                tab.active = currentIndex === id;

                return tab;

            });

            return [...filtered];
        })
    };

    const rootClass: string = active ? [cl.tab, cl.tab_active].join(" "): cl.tab

    return (
        <button onClick={handleClick} className={rootClass}>{name}</button>
    );
};

export default Tab;