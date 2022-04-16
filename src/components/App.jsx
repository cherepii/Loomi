import { Route, Routes } from 'react-router-dom';

import {ProductDiscover} from '../../pages';

const App = () => {
  return (
      
      <Routes>
        <Route path='/' element={<ProductDiscover />} />
        <Route path='*' element={<p>404 Page not found</p>} />
      </Routes>
  )
}

export default App;