import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box, Button } from "@mui/material";
import { info } from "../../info/Info";

export default function Clec() {
  const firstName = info.firstName.toLowerCase();

  function clec() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat CLEC
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            CLEC <span className={Style.green}>(main)</span> ${" "}
          </span>
          <span className={Style.green}>cat Clases_grabadas.txt</span>
          <p className={Style.white}>
            <span className={Style.green}>Clases_grabadas.txt</span>
            <p>
              <Button
                variant="outlined"
                size="medium"
                href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPtXXVBlxEj-QE7rClb-gYgd"
              >
                1er año 1er cuatri
              </Button>
            </p>
            <p>
              <Button
                variant="outlined"
                size="medium"
                href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPuHFV93h2OINwKTzVlm92bc"
              >
                1er año 2do cuatri
              </Button>
            </p>
            <p>
              <Button
                variant="outlined"
                size="medium"
                href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPtcBVeHkNgf8-fZV15XtPs5"
              >
                2do año 1er cuatri
              </Button>
            </p>
            <p>
              <Button
                variant="outlined"
                size="medium"
                href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPuNU8KG8M83baPAyOKANAbC"
              >
                2do año 2do cuatri
              </Button>
            </p>
          </p>
          <span style={{ color: info.baseColor }}>
            CLEC <span className={Style.green}>(main)</span> ${" "}
          </span>
          <span className={Style.green}>cat Drive_CLEC.txt</span>
          <p className={Style.white}>
            <span className={Style.green}>Drive_CLEC.txt</span>
            <p>
              <Button
                variant="outlined"
                size="medium"
                href="https://drive.google.com/drive/folders/1X-XPUJMqKL2g-_eSwOXcX-5C_uZTIoNA?usp=sharing"
              >
                Libros
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
      <Terminal text={clec()} />
    </Box>
  );
}
