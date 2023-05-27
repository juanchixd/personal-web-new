import React from "react";
import RecordingsBlock from "./RecordingsBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Recordings() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.recordings.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <RecordingsBlock
              image={project.image}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
