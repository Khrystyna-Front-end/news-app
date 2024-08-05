import React from "react";


export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-text p-2 ">
        This project was codded by{" "}
        <a
          href="https://www.linkedin.com/in/khrystyna-karieva-53aa5215a/"
          rel="noreferrer"
          target="_blank"
        >
          Khrystyna Karieva
        </a>{" "}
        and is{" "}
        <a href="https://github.com/Khrystyna-Front-end/react-weather-app">
          open-sourced on GitHub
        </a>{" "}
        and <a href="/">hosted on Netlify</a>{" "}
      </p>
    </div>
  );
}
