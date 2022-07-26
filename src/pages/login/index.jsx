import { Container } from '@UI/layout';
import Login from '@Components/login/Login';
import SnackbarProvider from 'react-simple-snackbar';

const LoginPage = () => {
  return (
    <SnackbarProvider>
      <Container>
        <Login />
      </Container>
    </SnackbarProvider>
  );
};

export default LoginPage;
