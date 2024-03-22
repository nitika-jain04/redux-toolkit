import { useEffect, Fragment } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

    // async function sendCartData() {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "pending!",
    //     title: "Sending...",
    //     message: "Sending cart data!",
    //   })
    // );
    // const response = await fetch(
    //   "https://redux-maxmillan-default-rtdb.firebaseio.com/cart.json",
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(cart),
    //   }
    // );
    // if (!response.ok) {
    //   throw new Error("Sending cart data failed!");
    // }

    // const responseData = await response.json();
    // dispatch(
    //   uiActions.showNotification({
    //     status: "success",
    //     title: "Success!",
    //     message: "Sent cart data successfully!",
    //   })
    // );
    // }
    // sendCartData().catch((err) => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "error",
    //     title: "Error!",
    //     message: "Sending cart data failed.",
    //   })
    // );
    // });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
