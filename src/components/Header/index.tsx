import { useState } from 'react';
import IconCore from '../Core/Icons';
import { Navigation } from './Navigation';
import { WrapperHeader, Button, Content } from './styles';

export function Header() {
  const [show, setShow] = useState(true);
  function HandleShowMenu() {
    setShow(!show);
  }
  return (
    <WrapperHeader>
      <Content css={{ '@lgSm': { display: show ? 'none' : 'flex' } }}>
        <Navigation/>
      </Content>
      <Button onClick={HandleShowMenu}>
        <IconCore size="2rem" name="menu" color="#fff" />
      </Button>
    </WrapperHeader>
  );
}
