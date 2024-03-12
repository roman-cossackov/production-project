import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';
import { type FC } from 'react';

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({ className }: LoaderProps) => {
    return (
        <div className={classNames(cls['lds-ellipsis'], {}, [className ?? ''])}>
            <div></div><div></div><div></div><div></div>
        </div>
    );
};
