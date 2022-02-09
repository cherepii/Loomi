import React from 'react';
import Menu from './menu';
import "./app.scss"
import ProductDiscover from '../../pages/product-discover';


const App = () => (
  <div className='container'>
    <Menu />
    <ProductDiscover />
  </div>
)

export default App;