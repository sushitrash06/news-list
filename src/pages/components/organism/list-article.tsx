"use client";
import { fetchTopHeadlinesCategory } from "@/pages/server";
import { NewsArticle } from "@/pages/type";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardListArticle from "../molecules/list-article";

const SkeletonArticle: React.FC = () => (
  <div className="my-5 animate-pulse">
    <div className="h-48 bg-gray-300 rounded-md"></div>
    <div className="mt-4 h-6 bg-gray-300 rounded-md w-3/4"></div>
    <div className="mt-2 h-4 bg-gray-300 rounded-md w-1/2"></div>
  </div>
);

const ListArticle: React.FC = () => {
  const router = useRouter();
  const newPath = router.pathname.replace("/", "");

  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!newPath) return; // Tunggu hingga kategori tersedia
    const loadArticles = async () => {
      try {
        const data = await fetchTopHeadlinesCategory(newPath); // Menggunakan kategori dari URL
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
  }, [newPath]);

  if (loading) {
    return (
      <div className="max-w-[850px] mx-auto">
        <h1 className="text-4xl my-5 mx-2 capitalize">
          {newPath.replace("-", " ")}
        </h1>
        <section className="gap-4">
          {[1, 2, 3, 4].map((_, index) => (
            <SkeletonArticle key={index} />
          ))}
        </section>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-[850px] mx-auto">
      <h1 className="text-4xl my-5 mx-2 capitalize">
        {newPath.replace("-", " ")}
      </h1>
      <section className="gap-4">
        {articles?.map((article, index) => (
          <div className="my-5" key={index}>
            <CardListArticle
              description={article.description ?? ""}
              imageUrl={article.urlToImage ?? ""}
              publishedAt={article.publishedAt ?? ""}
              title={article.title ?? ""}
              url={article.url ?? ""}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ListArticle;
