import React from 'react';
import Footer from "../footer"
import { AppWrapper } from './styles';

export const AppLayout = ({left, right, isLarge}) => {
  return (
    <AppWrapper isLarge={isLarge}>
      {left}
      {right}
      <Footer />
    </AppWrapper>
  )
};
