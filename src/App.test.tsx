import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('to be rendered', async () => {
        render(<App />);
        const appElement = await screen.findByTestId("App");
        expect(appElement).toBeInTheDocument();
    })
})