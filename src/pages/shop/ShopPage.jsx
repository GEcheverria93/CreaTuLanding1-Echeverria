import { useNavigate } from 'react-router-dom';

import { ItemListContainer } from '../../containers/index';
import { DESKTOP_ID, LAPTOP_ID } from '../../utils/constants';
import './ShopStyle.css';

const ShopPage = () => {
  const navigate = useNavigate();

  const handleNavitage = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={() => handleNavitage(DESKTOP_ID)}>Desktop</button>
        <button onClick={() => handleNavitage(LAPTOP_ID)}>Laptop</button>
      </div>
      <ItemListContainer />
    </div>
  );
};
export default ShopPage;
