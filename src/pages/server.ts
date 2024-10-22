import { NewsResponse } from "./type";

const API_KEY = "6fffd6642fd24595aaeb685517569135";
const BASE_URL = "https://newsapi.org/v2";

export const fetchTopHeadlines = async (
  country: string = "us"
): Promise<NewsResponse> => {
  const url = `${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching news: ${response.statusText}`);
    }

    const data: NewsResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch top headlines:", error);
    throw error;
  }
};

export const fetchTopHeadlinesCategory = async (
    category: string
): Promise<NewsResponse> => {
    const url = `${BASE_URL}/top-headlines?category=${category}&language=en&apiKey=${API_KEY}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Error fetching news: ${response.statusText}`);
      }
  
      const data: NewsResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch top headlines:", error);
      throw error;
    }
  };

  export const fetchTopHeadlinesBBC = async (): Promise<NewsResponse> => {
    const url = `${BASE_URL}/top-headlines?sources=bbc-news&pageSize=4&apiKey=${API_KEY}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Error fetching news: ${response.statusText}`);
      }
  
      const data: NewsResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch top headlines:", error);
      throw error;
    }
  };

  export const fetchEverything = async (
    keyword: string
  ): Promise<NewsResponse> => {
    const url = `${BASE_URL}/everything?q=${keyword}&pageSize=4&apiKey=${API_KEY}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Error fetching news: ${response.statusText}`);
      }
  
      const data: NewsResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch top headlines:", error);
      throw error;
    }
  };

