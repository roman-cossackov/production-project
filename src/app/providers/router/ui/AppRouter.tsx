import { Suspense, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter: FC = () => {
    const { t } = useTranslation()
    return (
        <Suspense fallback={<div>{t('...Загрузка')}</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        element={
                            <Suspense fallback={<div>{t('...Загрузка')}</div>}>
                                <div className="page-wrapper">{element}</div>
                            </Suspense>
                        }
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
