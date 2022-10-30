import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";

function ClassCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="GP 2022 (Turma 1)"
        subheader="Rafael de Amorim"
      />
      <CardContent>
        <Stack spacing={2}>
          <div>
            <Typography variant="body2" sx={{ color: "#6b7280" }}>
              Data de entrega: em 2 dias
            </Typography>
            <Typography variant="subtitle2">23:59 Atividade 1</Typography>
          </div>
          <div>
            <Typography variant="body2" sx={{ color: "#6b7280" }}>
              Data de entrega: em 2 dias
            </Typography>
            <Typography variant="subtitle2">23:59 Atividade 2</Typography>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ClassCard;
