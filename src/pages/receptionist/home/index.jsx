import { Container } from '@UI/layout';
import Home from '@Components/receptionist/home/Home';
import Header from '@Components/receptionist/header/Header';

const ReceptionstHomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  );
};

export default ReceptionstHomePage;
