/**
  File Name:  /store/modules/cart/actions.js
  Description: Module actions cart
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

import CartService from '@/services/CartService.js'

export const addProductToCart = ({ commit, dispatch }, { product, quantity }) => {
  commit('ADD_TO_CART', { product, quantity });

  dispatch('addNotification', {
      type: 'success',
      message: 'O produto foi adicionado ao carrinho.'
  }, { root: true });

  CartService.store({
      product_id: product.id,
      quantity
  });
}

export const getCartItems = ({ commit }) => {
  CartService.all().then(response => {
      commit('SET_CART', response.data);
  })
}

export const removeProductCart = ({ commit, dispatch }, product) => {
  commit('REMOVE_PRODUCT_CART', product);

  dispatch('addNotification', {
      type: 'success',
      message: 'O produto foi removido do carrinho.'
  }, { root: true });

  CartService.delete(product.id);
}

export const clearCartItems = ({ commit, dispatch }) => {
  commit('CLEAR_CART_ITEMS');

  dispatch('addNotification', {
      type: 'success',
      message: 'Todos os produtos foram removidos do carrinho.'
  }, { root: true });

  CartService.deleteAll();
}
