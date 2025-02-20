import { Container, styled } from '@mui/material';
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

  const StyledImg = styled('img')({
    display: 'flex',
    margin: '10px',
  });

  const StyledLink = styled('a')({
    textDecoration: 'none',
    color: '#4A51B0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '10px 0 ',
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
          <StyledImg src={Logo} alt="" />
          {links.map(({ href, icon, text, size }, index) => (
            <StyledLink key={index} href={href} target="_blank">
              <img src={icon} alt={text} width={size} height={size} />
              {text}
            </StyledLink>
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
