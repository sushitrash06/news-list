import { fetchTopHeadlinesCategory } from "@/pages/server";
import { NewsArticle } from "@/pages/type";
import React, { useEffect, useState } from "react";
import CardArticle from "../molecules/article-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkeletonArticle: React.FC = () => (
  <div className="p-4 animate-pulse">
    <div className="h-48 bg-gray-300 rounded-md"></div>
    <div className="mt-4 h-6 bg-gray-300 rounded-md w-3/4"></div>
    <div className="mt-2 h-4 bg-gray-300 rounded-md w-1/2"></div>
  </div>
);

const HealthInfo: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchTopHeadlinesCategory("health");
        setArticles(
          data.articles.filter((article) => article.title !== "[Removed]")
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
        <h1 className="text-4xl my-5 mx-2">Health</h1>
        <section className="grid m-4 grid-cols-2 grid-rows-2 gap-4">
          {[1, 2, 3, 4].map((_, index) => (
            <SkeletonArticle key={index} />
          ))}
        </section>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-[850px]">
      <h1 className="text-4xl my-5 mx-2">Health</h1>
      <section className="grid m-4 grid-cols-2 grid-rows-2 gap-4">
        {articles.slice(0, 4).map((article, index) => (
          <CardArticle
            key={index}
            description={article.description ?? ""}
            imageUrl={article.urlToImage ?? ""}
            publishedAt={article.publishedAt ?? ""}
            title={article.title ?? ""}
            url={article.url ?? ""}
          />
        ))}
      </section>
    </div>
  );
};

export default HealthInfo;
