import { Container, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/Arrow.svg';
import Point from '../../assets/Point.svg';
import Telephone from '../../assets/Telephone.svg';
import Whatsapp from '../../assets/Whatsapp.svg';
import Logo from '../../assets/Logo.png';

const Footer = () => {
  const StyledFooter = styled('div')({
    backgroundColor: '#DDD',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #ccc',
    marginTop: '20px',
  });

  const StyledItem = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '10px 0',
  });

  const StyledLink = styled('a')({
    textDecoration: 'none',
    color: '#4A51B0',
  });

  const links = [
    { href: '', icon: Arrow, text: 'Rodas & Motores', size: 28 },
    { href: '', icon: Arrow, text: 'Fale Conosco', size: 28 },
    {
      href: '',
      icon: Point,
      text: 'Av. ssssss ssssssss, 400, sssss 05 - sssss',
      size: 20,
    },
    {
      href: '',
      icon: Point,
      text: 'Av. ssssss ssssssss, 400, sssss 05 - sssss Bahia - Cruz das almas',
      size: 20,
    },
    { href: '', icon: Telephone, text: '(99) 9999-9999', size: 20 },
    { href: '', icon: Whatsapp, text: '(99) 9999-9999', size: 20 },
  ];

  return (
    <>
      <StyledFooter>
        <Container>
          <div style={{ width: '150px' }}>
            <Link to={'/'}>
              <img src={Logo} alt="Logo" style={{ display: 'flex' }} />
            </Link>
          </div>

          {links.map(({ icon, text, size }, index) => (
            <StyledItem key={index}>
              <img src={icon} alt={text} width={size} height={size} />
              <StyledLink href="" target="_blank">
                {text}
              </StyledLink>
            </StyledItem>
          ))}
        </Container>
      </StyledFooter>
      <div
        style={{
          backgroundColor: '#4A51B0',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p style={{ color: '#fff' }}>
          © 2021 Rodas & Motores - Todos os direitos reservados | Política de
          Privacidade
        </p>
      </div>
    </>
  );
};

export default Footer;
