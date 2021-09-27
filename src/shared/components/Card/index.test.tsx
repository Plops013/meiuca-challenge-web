import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('Card Component', () => {
    it('to render Component with props', () => {
        render(
            <Card
                title={'Title'}
                subtitle={'Subtitle'}
                text={'Text'}
            />
        );
        const titleElement = screen.getByText(/Title/);
        const subtitleElement = screen.getByText(/Subtitle/);
        const textElement = screen.getByText(/Text/);

        expect(titleElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
        expect(textElement).toBeInTheDocument();
    });

    it('to render emit click Event', () => {
        const handleClick = jest.fn();
        render(
            <Card
                buttonLabel="Button"
                buttonOnClick={() => handleClick()}
            />
        );
        const buttonElement = screen.getByText(/Button/);
        buttonElement.click()

        expect(buttonElement).toBeInTheDocument();
        expect(handleClick).toBeCalled();
    });
})
