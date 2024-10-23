import { fetchTopHeadlines } from "@/pages/server";
import { NewsArticle } from "@/pages/type";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardTopHeadline from "../molecules/top-headlines";

const SkeletonTopHeadline: React.FC = () => (
  <div className="p-4 animate-pulse">
    <div className="h-56 bg-gray-300 rounded-md"></div>
    <div className="mt-4 h-6 bg-gray-300 rounded-md w-3/4"></div>
    <div className="mt-2 h-4 bg-gray-300 rounded-md w-1/2"></div>
  </div>
);

const NewsComponent: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchTopHeadlines();
        setArticles(
          data?.articles?.filter((article) => article.title !== "[Removed]") || []
        );
      } catch (err) {
        setError("Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return (
      <div className="max-w-[850px]">
        <Slider>
          {[1, 2, 3].map((_, index) => (
            <SkeletonTopHeadline key={index} />
          ))}
        </Slider>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <div className="max-w-[850px]">
      <Slider {...settings}>
        {articles.map((article, index) => (
          <CardTopHeadline
            key={index}
            description={article.description ?? ""}
            imageUrl={article.urlToImage ?? ""}
            publishedAt={article.publishedAt ?? ""}
            title={article.title ?? ""}
          />
        ))}
      </Slider>
    </div>
  );
};

export default NewsComponent;
