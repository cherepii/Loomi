import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ProductDiscover from '../../pages/product-discover';
import "./app.scss"

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<ProductDiscover />} />
        <Route path='*' element={<p>404 Page not found</p>} />
      </Routes>
    </div>
  )
}

export default App;