/**
  File Name:  /components/headers/_partials/MiniVarte.vue
  Description: Mini Cart 
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

<template>
    <div class="cart-navbar dropdown-menu p-2" aria-labelledby="triggerId">
        <div v-for="item in cart" :key="item.product.id">
            <div class="px-2 d-flex justify-content-between">
                <div>
                    <strong>{{ item.product.title }}</strong>
                    <br />{{ item.quantity }} x <strong>R$ {{ item.product.price}}</strong>
                </div>
                <div>
                    <a href="#" class="badge badge-secondary" @click.prevent="removeProductCart(item.product)">Excluir</a>
                </div>
            </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
            <span>Total: <strong>$ {{ cartTotalPrice }}</strong></span>
            <a href="#" @click.prevent="clearCartItems()">Limpar</a>
        </div>    
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            cart: state => state.cart.cart
        }),

        ...mapGetters(['cartTotalPrice'])
    },

    mounted() {
        this.getCartItems();
    },

    methods: {
        ...mapActions(['removeProductCart', 'clearCartItems', 'getCartItems'])        
    }
}
</script>

<style scoped>
.cart-navbar {
    min-width: 320px;
    right: 0;
    left: auto;
}

</style>>