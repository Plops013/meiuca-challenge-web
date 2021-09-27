import { INews } from './../interfaces/INews';
import axios, { AxiosResponse } from "axios"

interface INewsResponse {
    articles: INews[];
}

export const newsService = {
    getNews: async (): Promise<AxiosResponse<INewsResponse>> => {
        return axios.get('https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=6df0c17504324367a1cec0e1ca608090');
    }
}
