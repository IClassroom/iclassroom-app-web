import { Card, Box, Container, CssBaseline, TextField, Button } from '@mui/material';
import { cardStyle, boxStyle, titleStyle, cardBoxStyle, textFieldStyle, buttonStyle } from './styles';

export function RegisterComponent({...props}) {
  return (
    <Container maxWidth="xs">
        <CssBaseline />
        <Box sx={boxStyle}>
          <div style={titleStyle}>
            <h1>IClassroom</h1>
          </div>
          <Card sx={cardStyle}>
            <Box component="form" noValidate sx={cardBoxStyle}>
              <TextField sx={textFieldStyle}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                autoFocus
              />
              <TextField sx={textFieldStyle}
                margin="normal"
                required
                fullWidth
                id="email_confirmation"
                label="Confirme o email"
                autoFocus
              />
              <TextField sx={textFieldStyle}
                margin="normal"
                required
                fullWidth
                id="password"
                type="password"
                label="Senha"
                autoFocus
              />
              <TextField sx={textFieldStyle}
                margin="normal"
                required
                fullWidth
                id="password_confirmation"
                type="password"
                label="Confirme a senha"
                autoFocus
              />
              <Button sx={buttonStyle}
                type="submit"
                fullWidth
                variant="contained"
              >
               Sign In
              </Button>
            </Box>
          </Card>
        </Box>
    </Container>
  )
}