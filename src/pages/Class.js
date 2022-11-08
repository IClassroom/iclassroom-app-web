import React from "react";
import Container from "@mui/material/Container";
import Activities from "../components/Activities";
import Questions from "../components/Questions";
import Posts from "../components/Posts";

function Class({ classTabState }) {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Posts value={classTabState} index={0} sx={{ position: "absolute" }} />
      <Activities
        value={classTabState}
        index={1}
        sx={{ position: "absolute" }}
      />
      <Questions
        value={classTabState}
        index={2}
        sx={{ position: "absolute" }}
      />
    </Container>
  );
}

export default Class;
