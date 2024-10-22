import { fetchTopHeadlines, fetchTopHeadlinesCategory } from "@/pages/server";
import { NewsArticle } from "@/pages/type";
import React, { useEffect, useState } from "react";
import CardArticle from "../molecules/article-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardTopHeadline from "../molecules/top-headlines";

const EntertainmentNews: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchTopHeadlinesCategory("entertainment");
        setArticles(
          data?.articles?.filter((article) => article.title !== "[Removed]")
        );
      } catch (err) {
        setError("Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
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
    <div className="max-w-[650px]">
      <h1 className="text-4xl my-5">Entertainment</h1>
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

export default EntertainmentNews;
