import React from "react";
import "./App.module.scss";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

<Analytics mode={"production"} />;

// let docTitle = document.title;

// window.addEventListener("focus", () => {
//   document.title = docTitle;
// });

// window.addEventListener("blur", () => {
//   document.title = "Juan Gonzalez - Come back!";
// });

function App() {
  return (
    <div>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
