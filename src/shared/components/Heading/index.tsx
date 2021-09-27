import React, { ReactNode } from 'react';
import './styles.scss';

export interface IHeadingProps {
    children: ReactNode;
}

export function Heading({ children }: IHeadingProps) {
    return (
        <h1 className="heading">{children}</h1>
    );
}
