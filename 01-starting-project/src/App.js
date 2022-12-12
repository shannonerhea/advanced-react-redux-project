import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect, useState } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisable);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          message: "Sending cart data...",
          title: "sending",
        })
      );
      const response = await fetch(
        "https://react-redux-cat-cart-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          message: "Sent cart data successfully!",
          title: "Success!!",
        })
      );

      sendCartData().catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            message: "sending cart data failed!",
            title: "Error",
          })
        );
      });
    };
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
