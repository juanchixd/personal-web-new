import React from "react";
import LinksBlock from "./LinksBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Links() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.links.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <LinksBlock
              image={project.image}
              source={project.source}
              title={project.title}
              sourcem={project.sourcem}
              sourcep={project.sourcep}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
