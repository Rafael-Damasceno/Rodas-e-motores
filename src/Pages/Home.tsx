import {
  styled,
  Container,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Background from '../assets/bike.png';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Ad from '../Post/Ad/Ad';
import Cards from '../Post/Cards/Cards';
import Carrosel from '../Post/Carrosel/Carrosel';
import ArrowRight from '../assets/ArrowRight.svg';

const Home = () => {
  const StyledSearchContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    '&::before': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
      content: '""',
    },
  });

  const VehicleFormContainer = styled('div')({
    padding: '20px 0',
    width: '30%',
  });

  const CustomTextField = styled(TextField)({
    backgroundColor: 'white',
    borderRadius: '5px',

    '& label': {
      color: 'black',
    },
  });

  const CustomButton = styled(Button)({
    backgroundColor: '#4A51B0',
    color: 'white',
    border: '2px solid white',
    '&:hover': {
      backgroundColor: '#3b429e',
    },
  });

  return (
    <>
      <Nav />
      <StyledSearchContainer>
        <Container
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <VehicleFormContainer>
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontWeight: 'bold',
                color: '#fff',
              }}
            >
              <Typography variant="h6">Encontre seu veículo</Typography>

              <CustomTextField label="Tipo" variant="filled" fullWidth />
              <CustomTextField label="Veículo" variant="filled" fullWidth />
              <CustomTextField label="Valor Médio" variant="filled" fullWidth />
              <CustomTextField label="Motorização" variant="filled" fullWidth />
              <CustomTextField label="Ano" variant="filled" fullWidth />
              <CustomTextField label="Cidade" variant="filled" fullWidth />

              <CustomButton variant="contained" type="submit">
                ENCONTRAR
              </CustomButton>
            </form>
          </VehicleFormContainer>

          <div>
            <div style={{ color: 'white' }}>
              <Typography
                variant="h1"
                fontSize="70px"
                marginBottom="5px"
                fontWeight="bold"
              >
                RODAS & MOTORES
              </Typography>
              <Typography fontSize="30px">
                Transformando trajetos em jornadas. Bicicletas e <br /> carros
                para cada caminho.
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
                gap: '40px',
              }}
            >
              <CustomButton variant="contained" style={{ gap: '10px' }}>
                <PedalBikeIcon />
                VENDER VEÍCULO
              </CustomButton>
              <CustomButton variant="contained" style={{ gap: '10px' }}>
                <DirectionsCarIcon />
                AUTOMÓVEIS
              </CustomButton>
            </div>
          </div>
        </Container>
      </StyledSearchContainer>

      <Ad />
      <Cards />
      <Ad />
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
          <img src={ArrowRight} alt="" />
          <a href="" style={{textDecoration: 'none', color: '#5784B2', fontSize:'30px', fontWeight: 'lighter'}}>Veículos em destaque</a>
        </div>
      </Container>
      <Carrosel />
      <Ad />

      <Footer />
    </>
  );
};

export default Home;
