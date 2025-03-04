import { Container, Grid2, Typography, TextField, Button, Box } from '@mui/material';
import SearchBar from '../components/SearchBar/SearchBar';
import ArrowRight from '../assets/ArrowRight.svg';
import { AccountCircle, VpnKey, ExitToApp, BorderColor } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../components/AuthContext/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [loginData, setLoginData] = useState({
    usuario: '',
    senha: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

      const response = await axios.post('http://localhost:8080/login', {
        usuario: loginData.usuario,
        senha: loginData.senha
      });

      if (response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
        login(); 
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

  const loginSections = [
    {
      title: 'JÁ SOU CADASTRADO',
      icon: <ExitToApp />,
      buttonText: 'Acessar',
      fields: [
        { 
          label: 'Usuário', 
          name: 'usuario',
          type: 'text',
          icon: <AccountCircle sx={{ color: 'action.active', mr: 1 }} /> 
        },
        { 
          label: 'Senha', 
          name: 'senha',
          type: 'password',
          icon: <VpnKey sx={{ color: 'action.active', mr: 1 }} /> 
        }
      ],
      onSubmit: handleLoginSubmit,
      error: error
    },
    {
      title: 'NÃO TENHO CADASTRO',
      icon: <BorderColor />, 
      buttonText: 'Cadastre-se',
      description: [
        'Faça seu cadastro no Usado Fácil e aproveite o jeito fácil de comprar e vender seu usado com segurança.',
        <Typography key="security" variant='subtitle1'>
          <strong>Segurança:</strong> Site 100% seguro.
        </Typography>
      ],
      onClick: () => navigate('/Cadastro') 
    }
  ];

  return (
    <>
      <SearchBar />
      <Container>
        <Typography variant="h5" gutterBottom>
          Faça Login ou Cadastre-se
        </Typography>
        <Typography variant='subtitle1'>
          Faça login ou crie uma conta gratuitamente e tenha acesso irrestrito
          a todos os serviços que o Rodas e Motores oferece aos seus usuários.
        </Typography>

        <Grid2 container spacing={2} sx={{ mt: 4 }}>
          {loginSections.map((section, index) => (
            <Grid2 key={index} size={6} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box 
                component={section.onSubmit ? "form" : "div"} 
                onSubmit={section.onSubmit}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  p: 3,
                  boxShadow: 1,
                  borderRadius: 2
                }}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <img src={ArrowRight} alt="Seta" style={{ width: '24px' }} />
                  <Typography variant="h6" color="#5784B2">
                    {section.title}
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  backgroundColor: '#EACC00', 
                  height: '2px', 
                  my: 2 
                }} />

                <Box sx={{ flexGrow: 1 }}>
                  {section.fields?.map((field, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
                      {field.icon}
                      <TextField
                        fullWidth
                        variant="standard"
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        value={loginData[field.name as keyof typeof loginData]}
                        onChange={handleLoginChange}
                        disabled={loading}
                        sx={{ ml: 1 }}
                      />
                    </Box>
                  ))}

                  {section.description?.map((content, i) => (
                    typeof content === 'string' ? (
                      <Typography key={i} variant="subtitle1" paragraph>
                        {content}
                      </Typography>
                    ) : content
                  ))}
                </Box>

                {section.error && (
                  <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                    {section.error}
                  </Typography>
                )}

                <Button
                  type={section.onSubmit ? "submit" : "button"}
                  variant="contained"
                  color="primary"
                  startIcon={section.icon}
                  onClick={section.onClick}
                  disabled={loading}
                  sx={{ 
                    mt: 3,
                    width: '100%',
                    py: 1.5,
                    fontSize: '1.1rem'
                  }}
                >
                  {loading ? 'Carregando...' : section.buttonText}
                </Button>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </>
  );
};

export default LoginPage;