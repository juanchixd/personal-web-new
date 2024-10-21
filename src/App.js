import React from "react";
import "./App.module.scss";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
// import { Analytics } from "@vercel/analytics/react";

// <Analytics mode={"production"} />;
import { inject } from "@vercel/analytics";

inject();

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
      <SpeedInsights />
    </div>
  );
}

export default App;
