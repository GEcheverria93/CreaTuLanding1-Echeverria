import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import NavBar from './components/NavBar';

const Router = () => {
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/shop" element={App} />
    </Routes>
  </BrowserRouter>;
};
export default Router;
