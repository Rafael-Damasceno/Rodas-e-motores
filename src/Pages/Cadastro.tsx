import {
    TextField,
    Typography,
    Container,
    Grid2,
    Button,
    MenuItem,
  } from '@mui/material';
  import SearchBar from '../components/SearchBar/SearchBar';
  import { useState } from 'react';
  import axios from 'axios';
  
  const Cadastro = () => {
    const [formData, setFormData] = useState({
      nome: '',
      cpf: '',
      telefone: '',
      email: '',
      confirmarEmail: '',
      endereco: '',
      bairro: '',
      pais: '',
      estado: '',
      cidade: '',
      nomeUsuario: '',
      senha: '',
      confirmarSenha: '',
    });
  
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e: { target: { name: any; value: any } }) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        if (formData.email !== formData.confirmarEmail) {
          throw new Error('Os e-mails não coincidem!');
        }
  
        if (formData.senha !== formData.confirmarSenha) {
          throw new Error('As senhas não coincidem!');
        }
  
        if (formData.senha.length < 6) {
          throw new Error('A senha deve ter pelo menos 6 caracteres!');
        }
  
        const initialUserData = {
          nome: formData.nome,
          cpf: formData.cpf,
          telefone: formData.telefone,
          email: formData.email,
          cidade: formData.cidade,
          estado: formData.estado,
          pais: formData.pais,
        };
  
        
        const initialResponse = await axios.post(
          'http://localhost:8080/usuario',
          initialUserData,
        );
  
        console.log(initialResponse);
  
        
        if (initialResponse.data?.errors) {
          throw new Error(initialResponse.data.errors.default);
        }
  
        const userId = initialResponse.data;
        
        console.log(userId);
  
        await axios.post('http://localhost:8080/sign', {
          usuarioId: userId,
          usuario: formData.nomeUsuario,
          senha: formData.senha,
        });
  
        alert('Cadastro realizado com sucesso!');
        setFormData({
          nome: '',
          cpf: '',
          telefone: '',
          email: '',
          confirmarEmail: '',
          endereco: '',
          bairro: '',
          pais: '',
          estado: '',
          cidade: '',
          nomeUsuario: '',
          senha: '',
          confirmarSenha: '',
        });
      } catch (error) {
        let errorMessage =
          'Erro ao realizar cadastro. Tente novamente mais tarde.';
  
        if (axios.isAxiosError(error)) {
          errorMessage = error.response?.data?.errors?.default || error.message;
        } else if (error instanceof Error) {
          errorMessage = error.message;
        }
  
        alert(errorMessage);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <>
        <SearchBar />
  
        <Container component="form" onSubmit={handleSubmit}>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Typography variant="h4" color="#4A51B0">
              Faça seu Cadastro
            </Typography>
            <Typography variant="subtitle1">
              Crie uma conta gratuitamente e tenha acesso irrestrito a todos os
              serviços que a Rodas e Motores oferece.
            </Typography>
          </div>
  
          <Grid2 container spacing={2}>
            <Grid2 size={4}>
              <TextField
                label="Nome"
                id="nome"
                name="nome"
                variant="filled"
                fullWidth
                value={formData.nome}
                onChange={handleChange}
                autoComplete="name"
              />
            </Grid2>
            <Grid2 size={4}>
              <TextField
                label="CPF ou CNPJ"
                id="cpf"
                name="cpf"
                variant="filled"
                fullWidth
                value={formData.cpf}
                onChange={handleChange}
                autoComplete="tax-id"
              />
            </Grid2>
            <Grid2 size={4}>
              <TextField
                label="Telefone"
                id="telefone"
                name="telefone"
                variant="filled"
                fullWidth
                value={formData.telefone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label="E-mail"
                id="email"
                name="email"
                variant="filled"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label="Confirmar E-mail"
                id="confirmarEmail"
                name="confirmarEmail"
                variant="filled"
                fullWidth
                value={formData.confirmarEmail}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label="Endereço"
                id="endereco"
                name="endereco"
                variant="filled"
                fullWidth
                value={formData.endereco}
                onChange={handleChange}
                autoComplete="street-address"
              />
            </Grid2>
            <Grid2 size={6}>
              <TextField
                label="Bairro"
                id="bairro"
                name="bairro"
                variant="filled"
                fullWidth
                value={formData.bairro}
                onChange={handleChange}
                autoComplete="address-level2"
              />
            </Grid2>
            <Grid2 size={4}>
              <TextField
                label="País"
                id="pais"
                name="pais"
                variant="filled"
                fullWidth
                select
                value={formData.pais}
                onChange={handleChange}
                autoComplete="country"
              >
                <MenuItem value="">Selecione um País</MenuItem>
                <MenuItem value="Brasil">Brasil</MenuItem>
              </TextField>
            </Grid2>
            <Grid2 size={4}>
              <TextField
                label="Estado"
                id="estado"
                name="estado"
                variant="filled"
                fullWidth
                select
                value={formData.estado}
                onChange={handleChange}
                autoComplete="address-level1"
              >
                <MenuItem value="">Selecione um Estado</MenuItem>
                <MenuItem value="SP">São Paulo</MenuItem>
              </TextField>
            </Grid2>
            <Grid2 size={4}>
              <TextField
                label="Cidade"
                id="cidade"
                name="cidade"
                variant="filled"
                fullWidth
                select
                value={formData.cidade}
                onChange={handleChange}
                autoComplete="address-level2"
              >
                <MenuItem value="">Selecione uma Cidade</MenuItem>
                <MenuItem value="São Paulo">São Paulo</MenuItem>
              </TextField>
            </Grid2>
          </Grid2>
  
          <Typography variant="h6" sx={{ mt: 4 }} color="#4A51B0">
            Dados de Acesso
          </Typography>
  
          <Grid2 container spacing={2}>
            <Grid2 size={4}>
              <TextField
                label="Nome de Usuário"
                id="nomeUsuario"
                name="nomeUsuario"
                variant="filled"
                fullWidth
                value={formData.nomeUsuario}
                onChange={handleChange}
                autoComplete="username"
              />
            </Grid2>
            <Grid2 size={4}>
              <TextField
                label="Digite uma Senha"
                id="senha"
                name="senha"
                type="password"
                variant="filled"
                fullWidth
                value={formData.senha}
                onChange={handleChange}
                autoComplete="new-password"
              />
            </Grid2>
            <Grid2 size={4}>
              <TextField
                id="confirmarSenha"
                label="Confirmar Senha"
                name="confirmarSenha"
                type="password"
                variant="filled"
                fullWidth
                value={formData.confirmarSenha}
                onChange={handleChange}
                autoComplete="new-password"
              />
            </Grid2>
          </Grid2>
  
          <div style={{ textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Cadastrar'}
            </Button>
          </div>
        </Container>
      </>
    );
  };
  
  export default Cadastro;
  