import { useState } from 'react';
import {
  styled,
  Button,
  Container,
  Modal,
  Box,
  TextField,
} from '@mui/material';
import Logo from '../../assets/Logo.png';
import Telephone from '../../assets/Telephone.svg';
import Whatsapp from '../../assets/Whatsapp.svg';
import LoginIcon from '../../assets/LoginIcon.svg';
import Fone from '../../assets/Fone.svg';
import ArrowDropDownIcon from '../../assets/ArrowDropDownIcon.svg';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StyledNav = styled('div')({
    backgroundColor: '#fff',
    height: '100px',
  });

  const Graydiv = styled('div')({
    backgroundColor: '#ddd',
    height: '40px',
    paddingTop: '10px',
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

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    textAlign: 'center',
  };

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
                onClick={handleOpen}
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

        <StyledImg src={Logo} alt="Rodas & Motores" />
      </Container>

      
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <h2>Login</h2>
          <TextField
            fullWidth
            label="E-mail"
            type="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Senha"
            type="password"
            margin="normal"
            variant="outlined"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, backgroundColor: '#4A51B0', color: '#fff' }}
          >
            Entrar
          </Button>
        </Box>
      </Modal>
    </StyledNav>
  );
};

export default Nav;
