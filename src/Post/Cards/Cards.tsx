import { Container, styled } from '@mui/material';

const Cards = () => {
  const numCards = 22;

  const StyledGridContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
    gap: '15px',
    justifyContent: 'center',
  });

  const StyledBox = styled('div')({
    backgroundColor: '#ccc',
    width: '100%',
    height: '80px',
  });

  return (
    <Container>
      <StyledGridContainer>
        {Array.from({ length: numCards }).map((_, index) => (
          <StyledBox key={index} />
        ))}
      </StyledGridContainer>
    </Container>
  );
};

export default Cards;
