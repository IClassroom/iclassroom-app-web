import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { red } from "@mui/material/colors";

function Post() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card sx={{ maxWidth: 545, margin: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Typography variant="body2" color="text.secondary">
            01 de janeiro
          </Typography>
        }
        title="Rafael de Amorim"
        subheader="Professor"
      />
      <CardContent>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut
          varius nunc. Nulla mattis ornare est a volutpat. Mauris viverra rutrum
          libero in tempus. Donec volutpat in quam vitae vestibulum. Sed eget
          tellus nec ex pretium feugiat. Mauris sed posuere arcu, tempus
          consectetur magna. Vestibulum condimentum dolor eu faucibus congue.
          Quisque id sapien quis elit fermentum commodo.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="text"
          sx={{ textTransform: "none" }}
          onClick={() => setExpanded(!expanded)}
        >
          3 comentários
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>comentário 1</Typography>
          <Typography paragraph>comentário 2</Typography>
          <Typography paragraph>comentário 3</Typography>
        </CardContent>
      </Collapse>
      <Box>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Escrever comentário"
        />
      </Box>
    </Card>
  );
}

export default Post;
