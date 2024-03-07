import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { type FC } from 'react'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = (): void => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch(err => { console.error(err) })
    }

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className ?? ''])}>
            <Button theme={ThemeButton.CLEAR} onClick={toggle}>{t('Язык')}</Button>
        </div>
    )
}
