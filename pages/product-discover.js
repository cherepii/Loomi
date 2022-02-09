import React from 'react';
import { AppLayout } from '../src/components/app-layout/app-layout';
import Categories from '../src/components/categories/categories';
import {CATEGORIES} from "./data"

const ProductDiscover = () => {
  return (
    <AppLayout 
      left={<Categories categories={CATEGORIES}/>} 
      right={null}
      isLarge 
    />
  )
};

export default ProductDiscover;
