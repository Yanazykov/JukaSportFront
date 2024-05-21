import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesApplication } from './Routes';

import { LoaderLogo, ThemeButton } from '@/components';
import { useTheme } from 'next-themes';
const LoginPage = lazy(() => import('@/pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('@/pages/404/NotFoundPage'));

export const AppRouter = () => {
    const { theme } = useTheme();
    useEffect(() => {
        const metaThemeColor = document.querySelector(
            'meta[name="theme-color"]'
        );
        if (metaThemeColor) {
            metaThemeColor.setAttribute(
                'content',
                theme === 'light' ? '#ffffff' : '#000000'
            );
        }
    }, [theme]);
    return (
        <>
            <Suspense fallback={<LoaderLogo />}>
                <Routes>
                    <Route
                        path={RoutesApplication.BaseUrl}
                        element={<LoginPage />}
                    />
                    <Route
                        path={RoutesApplication.UrlNotFound}
                        element={<NotFoundPage />}
                    />
                </Routes>
            </Suspense>

            <ThemeButton />
        </>
    );
};
