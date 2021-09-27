import { render, screen } from '@testing-library/react';
import MainRoute from './main';
describe('Main Router', () => {
    it('to render', () => {
        render(<MainRoute />);
        const homePage = screen.getByText(/Folha da Meiuca/i)
        expect(homePage).toBeInTheDocument()
    })

    it('to render 404 message', () => {
        window.history.pushState({}, 'Test page', '/bad-route')
        render(<MainRoute />);
        const page404 = screen.getByText(/404 Pagina não encontrada/i)
        expect(page404).toBeInTheDocument()
    })
});