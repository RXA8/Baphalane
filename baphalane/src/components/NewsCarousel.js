// components/NewsCarousel.js
'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function NewsCarousel() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('api/news_api'); // call your API route
        const data = await res.json();
        setArticles(data.articles);
        console.log('Fetched articles:', data.articles);
      } catch (err) {
        console.error('Failed to fetch news:', err);
      }
    };

    fetchNews();
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
    >
      {articles.map((article, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative rounded-xl overflow-hidden shadow-lg h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${article.imageUrl})` }}
          >
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            >
              <div className="absolute bottom-0 w-full bg-gray-900 bg-opacity-70 text-white p-4">
                <h4 className="text-lg font-bold line-clamp-2">{article.title}</h4>
              </div>
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
