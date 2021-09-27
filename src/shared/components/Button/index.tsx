import React, { ReactNode } from 'react'
import './styles.scss';

export interface ButtonProps {
    children: ReactNode,
    onClick?: () => any,
}

export function Button({
    children,
    onClick,
}: ButtonProps) {
    return (
        <button onClick={onClick} className="button" >
            {children}
        </button>
    )
}
