import { Card, styled, Box, Container, CssBaseline, TextField, Button, createTheme, ThemeProvider } from '@mui/material';
import { cardStyle, boxStyle, titleStyle, cardBoxStyle, textFieldStyle, buttonStyle } from './styles';

const Registertheme = createTheme({
  palette: {
    primary: {
      main: "#495796",
    },
  },
});

const CustomTextField = styled(TextField)(() => ({
  width: '60%',
  'fieldset': {
    borderRadius: '16px',
    border: '1px solid #00000078',
  },
}));

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
                <CustomTextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  color="primary"
                  autoFocus
                />
                <CustomTextField
                  margin="normal"
                  required
                  fullWidth
                  id="email_confirmation"
                  label="Confirme o email"
                  color="primary"
                  autoFocus
                />
                <CustomTextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  type="password"
                  label="Senha"
                  color="primary"
                  autoFocus
                />
                <CustomTextField
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
                Registrar-se
                </Button>
              </Box>
            </Card>
          </Box>
      </Container>
    </ThemeProvider>
  )
}