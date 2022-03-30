import React from 'react';

import Footer from '../footer';
import Navbar from '../navbar';
import { AppWrapper } from './styles';

export const AppLayout = ({left, right, isLarge}) => {
  return (
    <>
      <Navbar />
      <AppWrapper isLarge={isLarge}>
        {left}
        {right}
      </AppWrapper>
      <Footer />
    </>
  )
};
