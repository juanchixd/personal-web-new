import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

function RecordingsBlock(props) {
  const { image, source, title } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        component={"img"}
        src={image}
        alt={"img"}
        bgcolor={"white"}
        style={{ background: info.gradient }}
        width={{ xs: "25vh", md: "30vh" }}
        height={{ xs: "25vh", md: "30vh" }}
        borderRadius={"50%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      ></Box>
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      <Box
        className={"recordings"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink
            link={source}
            title={"Link"}
            icon={"fa-brands fa-youtube"}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default RecordingsBlock;
