/**
    File: /route.js
    Description: Application routes.
    Autor: Anselmo Velame
    Email: design@anselmovelame.com.br
    Github: https://github.com/avdesign
 */

export default [
    {
        path: '/',
        component: () => import('./pages/home/HomePage.vue'),
        name: 'home'
    },
    {
        path: '/product/:id',
        component: () => import('./pages/products/Product.vue'),
        name: 'product',
        props: true
    },

]