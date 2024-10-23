import React, { useEffect, useState } from "react";
import CardListArticle from "../molecules/list-article";

interface Article {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  publishedAt: string;
}

const SkeletonListArticle: React.FC = () => (
  <div className="p-4 animate-pulse">
    <div className="h-56 bg-gray-300 rounded-md"></div>
    <div className="mt-4 h-6 bg-gray-300 rounded-md w-3/4"></div>
    <div className="mt-2 h-4 bg-gray-300 rounded-md w-1/2"></div>
  </div>
);

const ArchivePage: React.FC = () => {
  const [archivedArticles, setArchivedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedArchive = localStorage.getItem("archive");
    if (storedArchive) {
      setArchivedArticles(JSON.parse(storedArchive));
    }
    setLoading(false); // Set loading to false after fetching data
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Archived Articles</h1>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <SkeletonListArticle key={index} />
          ))}
        </div>
      ) : archivedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {archivedArticles.map((article, index) => (
            <CardListArticle
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              url={article.url}
              publishedAt={article.publishedAt}
            />
          ))}
        </div>
      ) : (
        <p>No archived articles found.</p>
      )}
    </div>
  );
};

export default ArchivePage;
