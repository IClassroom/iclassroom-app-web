import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ClassCard from "../components/ClassCard";
import ActivityCard from "../components/ActivityCard";
import QuestionCard from "../components/QuestionCard";

function Home() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">Turmas</Typography>
          <Grid direction="row" container>
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Atividades pendentes</Typography>
          <Grid direction="row" container>
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Dúvidas em aberto</Typography>
          <Grid direction="row" container>
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
