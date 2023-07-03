import React from 'react';
import './styles/index.scss';
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "./providers/AppRouter";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className={'page-container'}>
                <Sidebar/>
                <div className={'content-container'}>
                    <AppRouter/>
                </div>
            </div>
        </div>
    );
};

export default App;
