import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, type FC, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string
}

// Компонент для тестирования ErrorBoundary

export const BugButton: FC<BugButtonProps> = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const { t } = useTranslation();

    const handleThrow = (): void => { setError(true); };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={handleThrow} className={classNames('', {}, [className ?? ''])}>
            {t('Выкинуть ошибку')}
        </Button>
    );
};
