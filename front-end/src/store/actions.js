/**
  File Name:  /store/actions.js
  Description: Actions
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

export const addNotification = ({ commit }, notification) => {
  commit('PUSH_NOTIFICATION', notification);
}

export const removeNotification = ({ commit }, notification) => {
  commit('REMOVE_NOTIFICATION', notification);
}
