import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Question from "./Question";

function Questions({ value, index, ...other }) {
  return (
    <Container
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel${index}`}
      aria-labelledby={`tabpanel${index}`}
      {...other}
      maxWidth="lg"
      sx={{ marginTop: 4 }}
    >
      {value === index && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid direction="row" justifyContent="center" container>
              <Button variant="contained">
                Escrever uma dúvida para a turma
              </Button>
            </Grid>
            <Grid direction="column" alignItems="center" container>
              <Question />
              <Question />
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default Questions;
