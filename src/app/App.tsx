import React, {Suspense} from 'react';
import {Route, Routes, Link} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import './styles/index.scss';
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme] )}>
            <nav>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О сайте</Link>
                <button onClick={toggleTheme}>Toggle</button>
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
