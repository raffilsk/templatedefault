import { useState } from 'react';
import { Container } from '../Core/Container';
import IconComponent from '../Core/ReactIcons';
import { Navigation } from './Navigation';
import { WrapperHeader, Button, Content } from './styles';

export function Header() {
  const [show, setShow] = useState(true);
  function HandleShowMenu() {
    setShow(!show);
  }
  return (
    <WrapperHeader>
      <Container css={{ justifyContent: 'space-between' }}>
        <Content css={{ '@lgSm': { display: show ? 'none' : 'flex' } }}>
          <Navigation />
        </Content>
        <Button onClick={HandleShowMenu}>
          <IconComponent size="2rem" name="menu" color="#fff" />
        </Button>
      </Container>
    </WrapperHeader>
  );
}
