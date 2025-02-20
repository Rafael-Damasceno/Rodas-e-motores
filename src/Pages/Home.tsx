import { styled } from '@mui/material';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const StyledHome = styled('div')(() => ({
    width: '100%',
  }));

  return (
    <>
      <Nav />
      <StyledHome />
      <Footer />
    </>
  );
};

export default Home;
