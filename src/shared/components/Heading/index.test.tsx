import { render, screen } from '@testing-library/react';
import { Heading } from '.';

test('to render with childern', () => {
    render(<Heading>Teste</Heading>);
    const textElement = screen.getByText(/Teste/i);
    expect(textElement).toBeInTheDocument();
});
