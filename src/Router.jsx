import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { NavBar } from './components/index';
import { ItemListContainer } from './containers/index';
import { ShopPage, CartPage } from './pages/index';
import './index.css';
import ItemPage from './pages/item/itemPage';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<Navigate to="/shop" />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
