import Stitches from "@stitches/react/"
import React from "react";
import { Wrapper } from "./styles";

interface ContainerProps{
   css?: Stitches.CSS;
   children: React.ReactNode;
}

export function Container({children, css}:ContainerProps){
   return (
      <Wrapper css={css}>
         {children}
      </Wrapper>
   )
}