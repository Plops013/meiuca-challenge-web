import React from 'react'
import { Button, Heading, Paragraph, Shape, Subtitle } from '..'
import './styles.scss';

export interface ICard {
    title?: string,
    subtitle?: string,
    text?: string,
    buttonLabel?: string,
    buttonOnClick?: () => any
}

export function Card({
    title,
    subtitle,
    text,
    buttonLabel,
    buttonOnClick
}: ICard) {
    return (
        <Shape>
            <div className="card__container">
                {title && (
                    <div className="card__margin--heading">
                        <Heading>{title}</Heading>
                    </div>
                )}
                {subtitle && (
                    <div className="card__margin--subtitle">
                        <Subtitle>{subtitle}</Subtitle>
                    </div>
                )}
                {text && (
                    <div className="card__margin--paragraph">
                        <Paragraph>{text}</Paragraph>
                    </div>
                )}
                {buttonOnClick && buttonLabel && (
                    <Button onClick={buttonOnClick}>{buttonLabel}</Button>
                )}
            </div>
        </Shape>
    )
}
