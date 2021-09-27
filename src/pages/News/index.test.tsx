import { render, screen } from '@testing-library/react';
import { AxiosResponse } from 'axios';
import { act } from 'react-dom/test-utils';
import News from ".";
import { newsService } from '../../shared/services/news';

let spyService: any;

beforeEach(() => {
    window.focus = () => {};
    spyService = jest.spyOn(newsService, 'getNews').mockImplementation(() => {
        return Promise.resolve(({
            data: {
                articles: [
                    {
                        content: "Parte do cone do vulcão Cumbre Vieja",
                        description: "Parte do cone do vulcão Cumbre Vieja",
                        title: "Colapsa parte do vulcão Cumbre Vieja em La Palma",
                        url: "https://metsul.com/colapsa-parte-do-vulcao-cumbre-vieja-em-la-palma/",
                    },
                    {
                        content: "2 Parte do cone do vulcão Cumbre Vieja",
                        description: "2 Parte do cone do vulcão Cumbre Vieja",
                        title: "2 Colapsa parte do vulcão Cumbre Vieja em La Palma",
                        url: "https://metsul.com/colapsa-parte-do-vulcao-cumbre-vieja-em-la-palma/2",
                    }
                ]
            }
        } as AxiosResponse));
    });
})

describe('News Component', () => {

    it('to render', async () => {
        await act(async () => { render(<News />); return; });
        const homePage = screen.getByText(/Folha da Meiuca/i)
        expect(homePage).toBeInTheDocument()
    })

    it('to render Array of cards', async () => {
        await act(async () => { render(<News />); return; });

        const cardElements = screen.getAllByText(/Ver mais/i);
        expect(cardElements.length).toBe(2)
        expect(spyService).toHaveBeenCalled();
    })

    it('handleClick to be called', async () => {
        await act(async () => { render(<News />); });
        const windowOpenSpy = jest.spyOn(window, 'open').mockReturnValue(window);
        const windowFocusSpy = jest.spyOn(window, 'focus');

        const cardElement = screen.getAllByText(/Ver mais/i);
        cardElement[0].click();

        expect(windowOpenSpy).toHaveBeenCalledTimes(1);
        expect(windowFocusSpy).toHaveBeenCalledTimes(1);
    })

    it('handleClick to be called without window', async () => {
        await act(async () => { render(<News />); });
        const windowOpenSpy = jest.spyOn(window, 'open').mockReturnValue(null);
        const windowFocusSpy = jest.spyOn(window, 'focus');

        const cardElement = screen.getAllByText(/Ver mais/i);
        cardElement[0].click();
        expect(windowOpenSpy).toHaveBeenCalledTimes(1);
        expect(windowFocusSpy).toHaveBeenCalledTimes(0);
    })
});