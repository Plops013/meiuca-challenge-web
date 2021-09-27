import { render, screen } from '@testing-library/react';
import { Subtitle } from '.';

test('to render with childern', () => {
    render(<Subtitle>Teste</Subtitle>);
    const textElement = screen.getByText(/Teste/i);
    expect(textElement).toBeInTheDocument();
});
