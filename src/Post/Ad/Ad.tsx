import { Container, Typography, styled } from '@mui/material';

const Ad = () => {
  const StyledAd = styled('div')({
    BackgroundColor: '#5784B2',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    margin: '30px 0',
    backgroundColor: '#5784B2',
  });

  return (
    <>
      <Container>
        <StyledAd>
          <Typography variant="h1">Anúncio</Typography>
        </StyledAd>
      </Container>
    </>
  );
};

export default Ad;
