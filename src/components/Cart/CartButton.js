import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ShoppingCart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.totalQuantity);

  function cartModalHandler() {
    dispatch(uiActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={cartModalHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default CartButton;
