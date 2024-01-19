import { Container } from "@mui/material";
import React, { ReactNode } from "react";

interface BaseProps {
    children: ReactNode
}

export const Base: React.FC<BaseProps> = ({children}) => {
  return (
    <Container disableGutters maxWidth="lg" >
      {children}
    </Container>
  );
};
