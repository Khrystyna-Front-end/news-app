import React, { useState } from "react";
import DailyNews from "../DailyNews/DailyNews";
import "./FormSearch.css";
import { IoIosSearch } from "react-icons/io";

export default function FormSearch({ newsData }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  let filteredNews = [];

  if (Array.isArray(newsData)) {
    filteredNews = newsData.filter((news) => {
      return news.data.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
  return (
    <div className="inputWrapper">
      <div className="search-field">
        <IoIosSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {Array.isArray(filteredNews) ? (
          filteredNews.map((news, index) => (
            <DailyNews key={index} data={news.data.title} />
          ))
        ) : (
          <p>No news found.</p>
        )}
      </div>
    </div>
  );
}
