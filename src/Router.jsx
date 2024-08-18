import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NavBar } from './components/index';
import { ItemListContainer } from './containers/index';
import { ShopPage, CartPage, ItemPage, NotFoundPage } from './pages/index';
import './index.css';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
