import './styles/index.scss';
import { Suspense, type FC, useEffect } from 'react';

import { classNames } from '../shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
            <Suspense fallback={''}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
