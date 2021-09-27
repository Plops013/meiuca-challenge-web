import { newsService } from './news';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getNews', () => {
  it('fetches successfully data from an API', async () => {
    expect.assertions(2);
    const data = {
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
    };

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));
    const newsReturn = await newsService.getNews();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(newsReturn).toBe(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(newsService.getNews()).rejects.toEqual(new Error(errorMessage));
    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});