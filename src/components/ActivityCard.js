import React, { useRef, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import { clamp } from "../utils/clamp";

function ActivityCard() {
  const textRef = useRef();

  useEffect(() => {
    clamp(textRef.current, { clamp: 3 });
  });

  return (
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="GP 2022 (Turma 1)"
      />
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ marginTop: -3.5, marginBottom: 2 }}
        >
          <Typography
            ref={textRef}
            variant="body2"
            sx={{ color: "#111827", fontWeight: 600 }}
          >
            Atividade 1
          </Typography>
          <Typography ref={textRef} variant="body2" sx={{ color: "#6b7280" }}>
            2 dias
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography ref={textRef} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut varius nunc. Nulla mattis ornare est a volutpat. Mauris viverra
            rutrum libero in tempus. Donec volutpat in quam vitae vestibulum.
            Sed eget tellus nec ex pretium feugiat. Mauris sed posuere arcu,
            tempus consectetur magna. Vestibulum condimentum dolor eu faucibus
            congue. Quisque id sapien quis elit fermentum commodo.{" "}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ActivityCard;
