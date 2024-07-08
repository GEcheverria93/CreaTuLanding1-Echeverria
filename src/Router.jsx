import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import CartPage from './pages/cart/CartPage';
import ShopPage from './pages/shop/ShopPage';
import './index.css';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<Navigate to="/shop" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
