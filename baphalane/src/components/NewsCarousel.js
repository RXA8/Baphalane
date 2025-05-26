'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function NewsCarousel() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [swiperKey, setSwiperKey] = useState(0); // For re-render

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news_api');
        const data = await res.json();
        setArticles(data.articles);
        setSwiperKey((prev) => prev + 1);
      } catch (err) {
        console.error('Failed to fetch news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Swiper
      key={swiperKey}
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      loop
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
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
