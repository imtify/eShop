const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //Calculate Item Price
  state.itemsPrice = addDecimals(
    Number(
      state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  );

  //Calculate shipping price
  state.shippingPrice = addDecimals(Number(state.itemsPrice > 100 ? 0 : 10));

  //calculate tax price (15%)
  state.taxPrice = addDecimals(Number(state.itemsPrice * 0.15).toFixed(2));

  //Calculate Total Price
  state.totalPrice =
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
