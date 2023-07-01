import React from "react";
import Style from "./error.module.scss";
// import Link from "next/link";

export default function MyCustom404() {
  return (
    <body>
      <section className={Style.notFound}>
        <div className={Style.img}>
          <img
            src="https://assets.codepen.io/5647096/backToTheHomepage.png"
            alt="Back to the Homepage"
          />
          <img
            src="https://assets.codepen.io/5647096/Delorean.png"
            alt="El Delorean, El Doc y Marti McFly"
          />
        </div>
        <div className={Style.text}>
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <h3>BACK TO HOME?</h3>
          <a href="/">YES</a>
          <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
          <h5>‎</h5>
          <p>
            Si estas buscando una pagina que estaba antes comunicate conmigo por
            telegram o instagram.
          </p>
          <h5>‎</h5>
          <a href="https://t.me/Juanbgon">Telegram</a>
          <h5>‎</h5>
          <a href="https://instagram.com/juanchi1020">Instagram</a>
        </div>
      </section>
    </body>
  );
}
