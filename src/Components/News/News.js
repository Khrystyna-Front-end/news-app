import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyNews from "../DailyNews/DailyNews";

function News(props) {
  console.log(props.data);

  let [loaded, setLoaded] = useState(false);
  let [news, setNews] = useState(null);

  function answer(response) {
    setLoaded(true);
    setNews(response.data.articles);
  }

  useEffect(() => {
    setLoaded(false);
  }, []);

  if (loaded) {
    return (
      <div className="News">
        {news.map(function (dailyNews, index) {
          if (index < 7) {
            return (
              <div className="dailyNews" key={index}>
                <DailyNews data={dailyNews} />
              </div>
            );
          }
          // return null;
        })}
      </div>
    );
  } else {
    let apiKey = "9de3a519457048fd86c3f2e3c8d2ebd0";
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=ua&apiKey=${apiKey}`;
    axios.get(apiUrl).then(answer);
    return null;
  }
}

export default News;
