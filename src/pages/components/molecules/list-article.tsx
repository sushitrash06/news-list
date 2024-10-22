import React from "react";
import Card from "../atom/card";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  publishedAt: string;
}

const CardListArticle: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  url,
  publishedAt,
}) => {
  // Fungsi untuk menambah artikel ke archive
  const handleArchive = () => {
    const article = { title, description, imageUrl, url, publishedAt };
    const existingArchive = JSON.parse(localStorage.getItem("archive") || "[]");
    localStorage.setItem("archive", JSON.stringify([...existingArchive, article]));
    alert("Artikel berhasil diarsipkan!");
  };

  return (
    <Card>
      <div className="flex justify-between">
        <div>
          <img
            src={imageUrl}
            alt={title}
            className="max-w-[500px] min-w-[500px] h-[250px] object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h2 className="text-xl text-gray-800 font-semibold line-clamp-2">
              {title}
            </h2>
            <p className="text-gray-600 max-w-full line-clamp-2">{description}</p>
            <p className="text-gray-400 text-sm">
              {new Date(publishedAt).toLocaleDateString()}
            </p>
            <a
              href={url}
              className="mt-2 inline-block text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
            <button
              onClick={handleArchive}
              className="mt-2 ml-4 inline-block text-green-500 hover:underline"
            >
              Archive
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardListArticle;
