import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
}

const CardTopHeadline: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  publishedAt,
}) => {
  return (
    <div className="relative w-full h-[800px] rounded-lg overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-300 line-clamp-3">
          {description}
        </p>
        <p className="text-sm text-gray-300">
          {new Date(publishedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default CardTopHeadline;
