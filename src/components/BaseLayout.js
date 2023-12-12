import React, { useEffect, useState } from "react";
import Style from "./BaseLayout.module.scss";
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
// import Portfolio from "./portfolio/Portfolio";
import Links from "./links/Links";
import Error from "./error/error";
import Recordings from "./recordings/Recordings";
import Q from "./q/q";
import Clec from "./clec/clec";
import { Route, Routes, Navigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    console.log(oppositeOfCurrentDarkMode);
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    let detectedDarkMode = localStorage.getItem("darkMode") === "true";

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/about"} element={<About />} />
            {/* <Route exact path={"/portfolio"} element={<Portfolio />} /> */}
            <Route exact path={"/clec"} element={<Clec />} />
            <Route exact path={"/recordings"} element={<Recordings />} />
            <Route exact path={"/links"} element={<Links />} />
            <Route exact path={"/quimica"} element={<Q />} />
            <Route exact path={"/404"} element={<Error />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <p>
              Created with 🧉 by{" "}
              <a href={"https://juangonzalez.com.ar"}>Juan Gonzalez</a>
            </p>
            <p>© {new Date().getFullYear()}</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
