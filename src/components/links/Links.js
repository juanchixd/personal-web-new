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
              sourcem={project.sourcem}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
