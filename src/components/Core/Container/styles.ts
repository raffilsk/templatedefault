import { styled } from '@Styles/theme/stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  width: '100%',
  margin: 'auto',
  '@lgUp':{
    maxWidth: '1080px',
  }
});
