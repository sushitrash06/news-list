import React, { useEffect, useState } from "react";
import CardListArticle from "../molecules/list-article";

interface Article {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  publishedAt: string;
}

const ArchivePage: React.FC = () => {
  const [archivedArticles, setArchivedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const storedArchive = localStorage.getItem("archive");
    if (storedArchive) {
      setArchivedArticles(JSON.parse(storedArchive));
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Archived Articles</h1>
      {archivedArticles.length > 0 ? (
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
