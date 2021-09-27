import './styles.scss';
import React, { useEffect, useState } from 'react';
import { Card, Heading, Paragraph } from '../../shared/components';
import { newsService } from '../../shared/services/news';

function News() {
    const [news, setNews] = useState<Array<any>>([]);
    useEffect(() => { loadNews(); }, [])

    const loadNews = async () => {
        try {
            const newsHandler = (await newsService.getNews()).data.articles;
            setNews(newsHandler);
        } catch (_) { }
    }

    const handleClick = (url: string) => {
        var win = window.open(url, '_blank');
        if (win) win.focus();
    }

    return (
        <div className="news__container">
            <div className="news__title">
                <Heading>📰 Folha da Meiuca 📰</Heading>
            </div>
            <div className="news__heading">
                <Heading>Recentemente no Brasil</Heading>
                <Paragraph>{new Date().toLocaleDateString()}</Paragraph>
            </div>
            {news.map((newsItem, i) => (
                <div key={i.toString()} className="card__container">
                    <Card
                        title={newsItem.title}
                        subtitle={newsItem.description}
                        text={newsItem.content.split('[')[0]}
                        buttonLabel="Ver Mais"
                        buttonOnClick={() => handleClick(newsItem.url)}
                    />
                </div>
            ))
            }
        </div>
    );
}

export default News;
