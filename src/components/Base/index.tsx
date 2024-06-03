import { Container } from "@mui/material";
import React, { ReactNode } from "react";
import Header from "../header";

interface BaseProps {
  children: ReactNode;
}

export const Base: React.FC<BaseProps> = ({ children }) => {
  return (
    <div className="">
     <Header />
      <Container disableGutters maxWidth="lg">
        {children}
      </Container>
    </div>
  );
};
