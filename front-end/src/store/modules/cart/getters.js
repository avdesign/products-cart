/**
  File Name:  /store/modules/cart/getters.js
  Description: Module getters cart
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
*/

/*************************************************
    Total - items quantity
*************************************************/
export const cartItemsCount = (state) => {
  return state.cart.length;
}

/*************************************************
  Total - Price
*************************************************/
export const cartTotalPrice = (state) => {
  let total = 0;

  state.cart.forEach(item => {
      total += item.product.price * item.quantity;
  })

  return total;
}

 