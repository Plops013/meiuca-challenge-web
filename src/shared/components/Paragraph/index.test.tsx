import { render, screen } from '@testing-library/react';
import { Paragraph } from '.';

test('to render with childern', () => {
    render(<Paragraph>Teste</Paragraph>);
    const buttonElement = screen.getByText(/Teste/i);
    expect(buttonElement).toBeInTheDocument();
});
