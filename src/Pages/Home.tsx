import { styled } from '@mui/material';
import Nav from '../components/Nav/Nav';

const Home = () => {
  const StyledHome = styled('div')(() => ({
    width: '100%',
  }));

  return (
    <>
      <Nav />
      <StyledHome />
    </>
  );
};

export default Home;
