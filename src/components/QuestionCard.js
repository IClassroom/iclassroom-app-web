import React, { useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import { clamp } from "../utils/clamp";
import { Link } from "react-router-dom";

function QuestionCard() {
  const textRef = useRef();

  useEffect(() => {
    clamp(textRef.current, { clamp: 3 });
  });

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
        title="Rafael de Amorim"
        subheader="GP 2022 (Turma 1)"
      />
      <CardContent>
        <Stack spacing={2}>
          <Typography ref={textRef} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut varius nunc. Nulla mattis ornare est a volutpat. Mauris viverra
            rutrum libero in tempus. Donec volutpat in quam vitae vestibulum.
            Sed eget tellus nec ex pretium feugiat. Mauris sed posuere arcu,
            tempus consectetur magna. Vestibulum condimentum dolor eu faucibus
            congue. Quisque id sapien quis elit fermentum commodo.{" "}
          </Typography>

          <Typography>
            <Link>2 comentários</Link>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default QuestionCard;
