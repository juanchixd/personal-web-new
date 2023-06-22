import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box, Button } from "@mui/material";
import { info } from "../../info/Info";

export default function About() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat Quimica
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Quimica <span className={Style.green}>(main)</span> ${" "}
          </span>
          <span className={Style.green}>cat Clases_grabadas.txt</span>
          <p className={Style.white}>
            <span className={Style.green}>Clases_grabadas.txt</span>
            <p>
              <Button
                variant="outlined"
                size="medium"
                href="https://youtu.be/u6j4qSChBs8"
              >
                Polimeros 22/06/2023
              </Button>
            </p>
            <p>
              <Button
                variant="outlined"
                size="medium"
                href="https://youtu.be/DXkz4BdNon8"
              >
                Practica quimica 22/06/2023
              </Button>
            </p>
            <p>
              <Button
                variant="outlined"
                size="medium"
                href="https://www.youtube.com/playlist?list=PLFSba7TrCbZVkHk52K2J0_nXRwLNQYGTF"
              >
                Clases grabadas 2021
              </Button>
            </p>
            <p>
              <Button
                variant="outlined"
                size="medium"
                href="https://drive.google.com/drive/folders/11ZGMfwcLeyqFgh4ZOxlkwWMBIeiOY1EF"
              >
                Otras clases grabadas
              </Button>
            </p>
          </p>
          <span style={{ color: info.baseColor }}>
            Quimica <span className={Style.green}>(main)</span> ${" "}
          </span>
          <span className={Style.green}>cat Drive_quimica.txt</span>
          <p className={Style.white}>
            <span className={Style.green}>Drive_quimica.txt</span>
            <p>
              <Button
                variant="outlined"
                size="medium"
                href="https://drive.google.com/drive/folders/15w5pfsG1QTrKp2rGxyYi1ljQ4BUBiA7H"
              >
                Drive quimica
              </Button>
            </p>
          </p>
        </p>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
    </Box>
  );
}
