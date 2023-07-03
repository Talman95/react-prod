import React from 'react';
import './styles/index.scss';
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "./providers/AppRouter";
import {NavBar} from "widgets/NavBar";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <AppRouter/>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

export default App;
