import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/ShoppingCart";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  function addItemHandler() {
    dispatch(
      cartActions.addToCart({
        id: id,
        price: price,
        title: title,
      })
    );
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
