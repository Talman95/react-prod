import React from 'react';
import {Link} from "react-router-dom";
import './styles/index.scss';
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "./providers/AppRouter";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme] )}>
            <nav>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О сайте</Link>
                <button onClick={toggleTheme}>Toggle</button>
            </nav>
            <AppRouter />
        </div>
    );
};

export default App;
