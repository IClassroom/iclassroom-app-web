import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Activity() {
  return (
    <Card sx={{ width: 545, margin: 2 }}>
      <CardHeader title="Atividade" />
      <CardContent>
        <Typography variant="body2">Descrição</Typography>
        <Typography variant="body2">Anexos</Typography>
      </CardContent>
    </Card>
  );
}

export default Activity;
