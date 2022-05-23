import React, {Dispatch, FC, SetStateAction, useState} from "react";
import cl from "./Tabs.module.scss";
import Tab from "@components/tabs/Tab";
import {ITab} from "@/types/types";

interface TabsProps {
    changeList: Dispatch<SetStateAction<number>>
}

const Tabs: FC<TabsProps> = ({changeList}) => {
    const [tabs, setTabs] = useState<Array<ITab>>([
        {name: "All", active: true},
        {name: "Active", active: false},
        {name: "Completed", active: false}
    ]);

    return (
        <div className={cl.tabs}>
            {
                tabs.map((tab, index) => {
                    return <Tab key={index} id={index} changeList={changeList} active={tab.active} setTabs={setTabs} name={tab.name}/>
                })
            }
        </div>
    );
};

export default Tabs;