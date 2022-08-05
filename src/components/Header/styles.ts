import { styled } from '@Styles/theme/stitches.config';

export const WrapperHeader = styled('header', {
  display: 'flex',
  width: '100%',
  height: '3rem',
  backgroundColor: '$neutralDarkMedium',
});

export const Content = styled('div', {
  zIndex: '100',
  display: 'flex',
  flex: '1',
  width: '100%',
  marginTop: '3rem',
  height: 'calc(100vh - 3rem)',
  backgroundColor: 'rgba(0,0,0, 0.9)',
  '@lgUp': {
    display: 'flex',
    margin: 'auto',
    height: '3rem',
    backgroundColor: 'transparent',
  },
});

export const Button = styled('button', {
  backgroundColor: 'transparent',
  border: '0px',
  cursor: 'pointer',
  position: 'absolute',
  right: '0.5rem',
  top: '0.5rem',
  '@lgUp': { display: 'none' },
});
