import Stitches from '@stitches/react';
import Link from 'next/link';
import { Nav } from './styles';

interface NavigationProps {
  css?: Stitches.CSS;
}

export function Navigation({ css }: NavigationProps) {
  return (
    <Nav css={css}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </Nav>
  );
}
