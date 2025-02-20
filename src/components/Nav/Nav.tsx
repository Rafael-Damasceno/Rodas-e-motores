import { styled, Button, Container } from '@mui/material';
import Avatar from '../../assets/Logo.png';
import Telephone from '../../assets/Telephone.svg';
import Whatsapp from '../../assets/Whatsapp.svg';
import LoginIcon from '../../assets/LoginIcon.svg';
import Fone from '../../assets/Fone.svg';
import ArrowDropDownIcon from '../../assets/ArrowDropDownIcon.svg';

const Nav = () => {
  const StyledNav = styled('div')({
    backgroundColor: '#fff',
  });

  const Graydiv = styled('div')({
    backgroundColor: '#ccc',
    height: '40px',
  });

  const Capsula = styled('div')({
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    gap: '15px',
  });

  const StyledImg = styled('img')({
    position: 'relative',
    top: '-60px',
    zIndex: 2,
  });

  const StyledSpan = styled('span')({ display: 'flex', gap: '5px' });

  const StyledLink = styled('a')({ textDecoration: 'none', color: '#4A51B0' });

  return (
    <StyledNav>
      <Graydiv>
        <Container>
          <Capsula>
            <p style={{ color: '#B61919' }}>
              O Rodas & Motores não solicita códigos pelo celular.
            </p>
            {[Telephone, Telephone, Whatsapp].map((icon, index) => (
              <StyledSpan key={index}>
                <img src={icon} alt="Contato" />
                <StyledLink href="#">(99)9999-9999</StyledLink>
              </StyledSpan>
            ))}
            <StyledSpan>
              <img src={LoginIcon} alt="Login" />
              <StyledLink
                href="#"
                style={{ color: '#B61919', cursor: 'pointer' }}
              >
                Login
              </StyledLink>
              <img src={ArrowDropDownIcon} alt="" />
              ou{' '}
              <StyledLink href="#" style={{ color: '#B61919' }}>
                Cadastro
              </StyledLink>
            </StyledSpan>
          </Capsula>
        </Container>
      </Graydiv>

      <Container>
        <Capsula style={{ marginTop: '5px' }}>
          <StyledSpan
            style={{
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {['VENDER VEÍCULOS', 'AUTOMOVEIS'].map((text, index) => (
              <StyledLink key={index} href="#">
                {text}
              </StyledLink>
            ))}
            <Button variant="contained" style={{ gap: '10px' }}>
              <img src={Fone} alt="Fone" /> ANUNCIE
            </Button>
          </StyledSpan>
        </Capsula>

        <StyledImg src={Avatar} alt="Rodas & Motores" />
      </Container>
    </StyledNav>
  );
};

export default Nav;
