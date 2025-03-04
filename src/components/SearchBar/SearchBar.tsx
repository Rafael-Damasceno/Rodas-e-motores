import { styled, Container, Typography, TextField, Button, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Background from '../../assets/car.png';
import { useState } from 'react';

const SearchBar = () => {

    const [valor, setValor] = useState('');
    const [motorizacao, setMotorizacao] = useState('');
    const [ano, setAno] = useState('');


    const StyledSearchBar = styled('div')({
        position: 'relative',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    });

    const Overlay = styled('div')({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    });

    const StyledTextFild = styled(TextField)({
        backgroundColor: 'rgba(200, 200, 200, 0.5)',
        borderRadius: '5px',
        position: 'relative',
        zIndex: 1,
        '& label': {
            color: '#fff',
        },
    });

    return (
        <StyledSearchBar>
            <Overlay />
            <Container style={{ position: 'relative', zIndex: 1 }}>
                <Typography style={{ color: 'white' }}>
                    Encontre seu Veículo
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <StyledTextFild label="Veículo" id='Veículo' variant="filled" fullWidth style={{ color: 'white' }} />
                    <StyledTextFild label="Valor médio" id='ValorMédio' variant="filled" select fullWidth value={valor} onChange={(e) => setValor(e.target.value)}>
                        <MenuItem value="1">Até R$ 50.000</MenuItem>
                    </StyledTextFild>
                    <StyledTextFild label="Motorização"  id='Motorização' variant="filled" select fullWidth value={motorizacao} onChange={(e) => setMotorizacao(e.target.value)}>
                        <MenuItem value="1">1.0</MenuItem>
                    </StyledTextFild>
                    <StyledTextFild label="Ano" id='Ano' variant="filled" select fullWidth value={ano} onChange={(e) => setAno(e.target.value)}>
                        <MenuItem value="1">2021</MenuItem>
                    </StyledTextFild>
                    
                    <Button startIcon={<SearchIcon />} variant='contained' style={{ display: 'flex', padding: '17px', alignItems: 'center', justifyContent: 'center' }}></Button>
                    
                </div>
            </Container>
        </StyledSearchBar>
    );
}

export default SearchBar;
