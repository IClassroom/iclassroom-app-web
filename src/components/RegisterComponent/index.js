import { Card, Box, Container, CssBaseline, TextField, Button, createTheme, ThemeProvider } from '@mui/material';
import { cardStyle, boxStyle, titleStyle, cardBoxStyle, textFieldStyle, buttonStyle } from './styles';

const Registertheme = createTheme({
  palette: {
    primary: {
      main: "#495796",
    },
  },
});

export function RegisterComponent({...props}) {
  return (
    <ThemeProvider theme={Registertheme}>
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
                  color="primary"
                  autoFocus
                />
                <TextField sx={textFieldStyle}
                  margin="normal"
                  required
                  fullWidth
                  id="email_confirmation"
                  label="Confirme o email"
                  color="primary"
                  autoFocus
                />
                <TextField sx={textFieldStyle}
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  type="password"
                  label="Senha"
                  color="primary"
                  autoFocus
                />
                <TextField sx={textFieldStyle}
                  margin="normal"
                  required
                  fullWidth
                  id="password_confirmation"
                  type="password"
                  label="Confirme a senha"
                  color="primary"
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
    </ThemeProvider>
  )
}