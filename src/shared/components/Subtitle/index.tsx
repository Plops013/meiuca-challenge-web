import React, { ReactNode } from 'react';
import './styles.scss';

export interface ISubtitleProps {
    children: ReactNode;
}

export function Subtitle({ children }: ISubtitleProps) {
    return (
        <h3 className="subtitle">{children}</h3>
    );
}
