import React, {FC} from "react";
import "@styles/global.scss";
import cl from "./App.module.scss";
import Todo from "@components/todo/Todo";

const App: FC = () => {
    return (
        <div className={cl.App}>
            <h1 className={cl.title}>Todos</h1>

            <Todo/>
        </div>
    );
};

export default App;