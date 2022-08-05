import { createStitches, globalCss } from "@stitches/react";

export const globalStyles = globalCss({
   '*': {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
   },
   
   body: {
      backgroundColor: '$neutalLightMedium',
      color: '$neutralDarkMedium',
   },
});
export const { styled, css, theme } = createStitches({
   prefix: 'stitches-style',
   
   theme: {
   colors: {
      neutalLightPure: '#FFFFFF',
      neutalLightMedium: '#E4E3E2',
      
      neutralDarkPure: '#000000',
      neutralDarkMedium: '#1D1E1F',
   },
},

   media: {
     lgSm: '(max-width: 800px)',
     lgUp: '(min-width: 801px)',
   },
 });