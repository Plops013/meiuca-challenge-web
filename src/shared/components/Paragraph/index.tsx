import React, { ReactNode } from 'react'
import './styles.scss';

export interface IParagraph {
    children: ReactNode
}


export function Paragraph({ children }: IParagraph) {
    return (
        <p className="paragraph">{children}</p>
    )
}
