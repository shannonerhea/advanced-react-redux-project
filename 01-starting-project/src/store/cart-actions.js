import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-redux-cat-cart-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("could not fetch data!")
      };
      const data = await response.json();

      return data;
    };
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        message: "Sending cart data...",
        title: "sending",
      })
    );

    const sendRequest = async () => {
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
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          message: "Sent cart data successfully!",
          title: "Success!!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: "sending cart data failed!",
          title: "Error",
        })
      );
    }
  };
};
