import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              sourcem={project.sourcem}
              source={project.source}
              title={project.title}
            />
            {/* ESTO QUEDA MUYYYYYYYYY PENDIENTE POR MIENTRAS DEJO ARMADO LA ESTRUCTURA*/}
            {/* <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} /> */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
