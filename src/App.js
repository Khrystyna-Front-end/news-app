import React, { useState, useEffect } from "react";
import axios from "axios";
import News from "./Components/News/News";
import FormSearch from "./Components/FormSearch/FormSearch";
import CurrentDateTime from "./Components/CurrentDateTime/CurrentDateTime";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  let [news, setNews] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function showNews(response) {
    console.log(response);
    console.log(response.data.articles);
    setNews({
      title: response.data.articles.title,
      author: response.data.articles.author,
      source: response.data.articles.source,
      url: response.data.articles.url,
      urlToImage: response.data.articles.urlToImage,
      publishedAt: response.data.articles.publishedAt,
      date: new Date(response.data.time * 1000),
      description: response.data.articles.description,
    });

    setLoaded(true);
  }

  function search() {
    let apiKey = "9de3a519457048fd86c3f2e3c8d2ebd0";
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=ua&apiKey=${apiKey}`;
    axios.get(apiUrl).then(showNews);
  }
  useEffect(() => {
    search();
  }, []);

  if (loaded) {
    return (
      <div className="App">
        <Header />
        <CurrentDateTime date={new Date()} />
        <FormSearch newsData={news} />
        <News dailyNews={news} />

        <Footer />
      </div>
    );
  } else {
    search();
    
    return "Loading...";
  }
}
export default App;
