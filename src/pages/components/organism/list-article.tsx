"use client";
import { fetchTopHeadlinesCategory } from "@/pages/server";
import { NewsArticle } from "@/pages/type";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardListArticle from "../molecules/list-article";

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  console.log(newPath, "ini");
  return (
    <div className="max-w-[850px] mx-auto">
      <h1 className="text-4xl my-5 mx-2 capitalize">
        {newPath.replace("-", " ")}
      </h1>
      <section className="gap-4">
        {articles?.map((article, index) => (
          <div className="my-5">
            <CardListArticle
              key={index}
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
