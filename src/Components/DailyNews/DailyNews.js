import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import  "./DailyNews.css"

function DailyNews(props) {
  // console.log(props);
  // console.log(props.data);
  const formatDate = (dateString) => {
    const options = {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    };
    const date = new Date(dateString);
    return date.toLocaleString("uk", options);
  };
  return (
    <ul className="flex-container-news">
      <li className="block-news">
        <div className="block-news-info">
          {props.data.urlToImage && (
            <img
              src={props.data.urlToImage}
              alt={props.data.url}
              style={{ width: "85%", height: "70%" }}
            />
          )}
          <h2>{props.data.title}</h2>
          <h3>{props.data.source.id}</h3>
          <p>{props.data.description}</p>
        </div>
        <div className="block-news-detail">
          {formatDate(props.data.publishedAt)}
        </div>
        <div className="block-news-link">
          <a
            className="news-link"
            href={props.data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosArrowForward style={{ width: "2em", height: "3em" }} />
          </a>{" "}
        </div>
      </li>
    </ul>
  );
}

export default DailyNews;
