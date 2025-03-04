import { useState } from 'react';
import {
  styled,
  Button,
  Container,
  Modal,
  Box,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';
import Logo from '../../assets/Logo.png';
import Telephone from '../../assets/Telephone.svg';
import Whatsapp from '../../assets/Whatsapp.svg';
import LoginIcon from '../../assets/LoginIcon.svg';
import Fone from '../../assets/Fone.svg';
import ArrowDropDownIcon from '../../assets/ArrowDropDownIcon.svg';

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

const StyledSpan = styled('span')({ 
  display: 'flex', 
  gap: '5px' 
});

const StyledLink = styled(Link)({ 
  textDecoration: 'none', 
  color: '#4A51B0' 
});

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

const Nav = () => {
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    usuario: '',
    senha: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleOpen = () => setOpen(true);
  
  const handleClose = () => {
    setOpen(false);
    setError('');
    setLoginData({ usuario: '', senha: '' });
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!loginData.usuario || !loginData.senha) {
        throw new Error('Preencha todos os campos!');
      }

      const response = await axios.post('http://localhost:8080/login', loginData);

      if (response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
        login(); 
        handleClose();
        navigate('/');
      }
    } catch (err) {
      let errorMessage = 'Erro ao fazer login. Tente novamente.';
      
      if (axios.isAxiosError(err)) {
        errorMessage = err.response?.data?.errors?.default || err.message;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout(); 
    navigate('/');
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
                <StyledLink to={''}>(99)9999-9999</StyledLink>
              </StyledSpan>
            ))}
            <StyledSpan>
              <img src={LoginIcon} alt="Login" />
              {isLoggedIn ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Typography 
                    component="span" 
                    style={{ 
                      color: '#B61919', 
                      cursor: 'default',
                      marginLeft: '5px'
                    }}
                  >
                    Logado
                  </Typography>
                  <Button
                    variant="text"
                    onClick={handleLogout}
                    style={{
                      color: '#B61919',
                      textTransform: 'none',
                      padding: 0,
                      minWidth: 'auto'
                    }}
                  >
                    Sair
                  </Button>
                </div>
              ) : (
                <>
                  <StyledLink
                    onClick={handleOpen}
                    style={{ color: '#B61919', cursor: 'pointer' }}
                    to={''}
                  >
                    Login
                  </StyledLink>
                  <img src={ArrowDropDownIcon} alt="" />
                  ou{' '}
                  <StyledLink to={'/Cadastro'} style={{ color: '#B61919' }}>
                    Cadastro
                  </StyledLink>
                </>
              )}
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
              <StyledLink key={index} to={''}>
                {text}
              </StyledLink>
            ))}
            <Button
              variant="contained"
              style={{ gap: '10px' }}
              onClick={() => navigate('/LoginPage')}
            >
              <img src={Fone} alt="Fone" /> ANUNCIE
            </Button>
          </StyledSpan>
        </Capsula>

        <Link to="/">
          <img
            src={Logo}
            alt="Rodas & Motores"
            style={{
              position: 'relative',
              top: '-60px',
              zIndex: 2,
              cursor: 'pointer',
            }}
          />
        </Link>
      </Container>

      <Modal 
        open={open} 
        onClose={handleClose}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0,0,0,0.1)',
              backdropFilter: 'blur(2px)'
            }
          }
        }}
      >
        <Box 
          component="form"
          onSubmit={handleLoginSubmit}
          sx={modalStyle}
        >
          <Typography variant="h5" component="h2" mb={2}>
            Login
          </Typography>
          <TextField
            fullWidth
            label="Usuário"
            name="usuario"
            type="text"
            margin="normal"
            variant="outlined"
            value={loginData.usuario}
            onChange={handleLoginChange}
            disabled={loading}
            autoComplete="username"
          />
          
          <TextField
            fullWidth
            label="Senha"
            name="senha"
            type="password"
            margin="normal"
            variant="outlined"
            value={loginData.senha}
            onChange={handleLoginChange}
            disabled={loading}
            autoComplete="current-password"
            inputProps={{
              sx: {
                '&:focus': {
                  caretColor: '#4A51B0'
                }
              }
            }}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ 
              mt: 3,
              backgroundColor: '#4A51B0',
              color: '#fff',
              '&:hover': { backgroundColor: '#3a4080' },
              py: 1.5,
              fontSize: '1.1rem',
              transition: 'background-color 0.2s ease'
            }}
          >
            {loading ? 'Carregando...' : 'Entrar'}
          </Button>
        </Box>
      </Modal>
    </StyledNav>
  );
};

export default Nav;