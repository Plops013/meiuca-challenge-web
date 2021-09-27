import React, { ReactNode } from 'react';
import './styles.scss';

export interface IShape {
    children: ReactNode
}

export function Shape({ children }: IShape) {
    return (
        <div className="shape">
            {children}
        </div>
    );
}
