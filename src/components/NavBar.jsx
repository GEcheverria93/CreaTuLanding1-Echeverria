import { useState } from 'react';
import { Link } from 'react-router-dom';

import BurgerButton from './BurgerButon';
import { BgDiv, NavContainer } from '../styles/navbar.style';

function NavBar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <h2>FLUXO ECOMMERCE</h2>
        <div className={`links ${clicked ? 'active' : ' '}`}>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default NavBar;
