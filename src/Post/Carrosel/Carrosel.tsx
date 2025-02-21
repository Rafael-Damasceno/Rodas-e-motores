import { useState, useEffect } from 'react';
import { Container, styled, Typography } from '@mui/material';

const Carrosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const items = [
    { name: 'Carro 1', price: 'R$ 42.999,00' },
    { name: 'Carro 2', price: 'R$ 42.999,00' },
    { name: 'Carro 3', price: 'R$ 42.999,00' },
    { name: 'Carro 4', price: 'R$ 42.999,00' },
    { name: 'Carro 5', price: 'R$ 42.999,00' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setVisibleItems(1);
      } else if (window.innerWidth < 770) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? items.length - visibleItems
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - visibleItems;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const StyledCarroselConteiner = styled('div')({
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
  });

  const StyledCarrosel = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'Space-between',
  });

  const StyledCarroselContent = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  });

  const StyledBoxCarrosel = styled('div')({
    border: '2px solid #ccc',
    backgroundColor: '#ffff',
    width: 'calc(100% / 3 - 10px)',
    margin: '5px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  });

  const StyledBack = styled('div')({
    backgroundColor: '#5784b2',
    height: '150px',
  });

  const StyledTextCarrosel = styled('div')({
    display: 'flex',
    padding: '10px',
    fontSize: '20px',
    fontWeight: 'lighter',
    color: '#4A51B0',
  });

  const StyledArrow = styled('div')({
    cursor: 'pointer',
    fontSize: '24px',
    userSelect: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  });

  return (
    <>
      <Container>
        <StyledCarroselConteiner>
          <StyledCarrosel>
            <StyledArrow style={{ left: '0' }} onClick={goToPrevious}>
              &#9664;
            </StyledArrow>
            <StyledCarroselContent>
              {items
                .slice(currentIndex, currentIndex + visibleItems)
                .map((item, index) => (
                  <StyledBoxCarrosel key={index}>
                    <StyledBack />
                    <StyledTextCarrosel>
                      <Typography>{item.name}</Typography>
                    </StyledTextCarrosel>
                    <span>
                      <p>{item.price}</p>
                    </span>
                  </StyledBoxCarrosel>
                ))}
            </StyledCarroselContent>
            <StyledArrow style={{ right: '0' }} onClick={goToNext}>
              &#9654;
            </StyledArrow>
          </StyledCarrosel>
        </StyledCarroselConteiner>
      </Container>
    </>
  );
};

export default Carrosel;
