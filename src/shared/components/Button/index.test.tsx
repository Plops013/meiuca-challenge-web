import { render, screen } from '@testing-library/react';
import { Button } from '.';

test('to render childern', () => {
    render(<Button>Teste</Button>);
    const buttonElement = screen.getByText(/Teste/i);
    expect(buttonElement).toBeInTheDocument();
});

test('to call onClick', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={() => onClickMock('teste')}>Teste</Button>);
    const buttonElement = document.querySelector('button');
    buttonElement?.click();
    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledWith('teste');
});