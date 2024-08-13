import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { NavBar } from './components/index';
import { ItemDetailsContainer, ItemListContainer } from './containers/index';
import { ShopPage, CartPage } from './pages/index';
import './index.css';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<Navigate to="/shop" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailsContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
