import { styled } from '@Styles/theme/stitches.config';

export const Nav = styled('nav', {
   zIndex: '999',
   display: 'flex',
   width: '100%',

   flexDirection: 'column',
   gap: '1rem',
   marginTop: '4rem',
   alignItems: 'center',
   fontSize: '2rem',
   a: {
      textDecoration: 'none',
      color: '$neutalLightPure'
   },
   '@lgUp': {
      margin: '1.5rem',
      flexDirection: 'row',
      fontSize: '1rem',
      height: 'auto',
   },
})