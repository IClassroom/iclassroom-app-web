import { Card, styled, Box, Container, CssBaseline, TextField, Button, createTheme, ThemeProvider } from '@mui/material';
import { cardStyle, boxStyle, titleStyle, cardBoxStyle, buttonStyle } from './styles';
import api from "../../services/api";

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

const handleSubmit = (event) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const user = {
    nome: data.get('nome'),
    email: data.get('email'),
    email_confirmation: data.get('email_confirmation'),
    password: data.get('password'),
    password_confirmation: data.get('password_confirmation'),
  }

  api.post('/usuario/', {
    nome: user.nome,
    email: user.email,
    password: user.password,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};


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
              <Box component="form" noValidate onSubmit={handleSubmit} sx={cardBoxStyle}>
              <CustomTextField
                  margin="normal"
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  name="nome"
                  color="primary"
                  autoFocus
                />
                <CustomTextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  color="primary"
                  autoFocus
                />
                <CustomTextField
                  margin="normal"
                  required
                  fullWidth
                  id="email_confirmation"
                  label="Confirme o email"
                  name="email_confirmation"
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
                  name="password"
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
                  name="password_confirmation"
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