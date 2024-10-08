import { Burger } from '../styles/burger.style';

function BurgerButton(props) {
  return (
    <Burger>
      <div
        onClick={props.handleClick}
        className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burger>
  );
}

export default BurgerButton;
