import { Suspense } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

import { AppRouter } from './providers/AppRouter';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="page-container">
          <Sidebar />
          <div className="content-container">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
