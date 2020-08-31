/**
  File Name:  /components/products/ProductsList.vue
  Description: Products List 
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

<template>
    <div class="d-flex align-items-stretch flex-wrap">
        <product-card v-for="product in products" :key="product.id" :product="product" />       
    </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import ProductCard from './_partials/ProductCard.vue'
export default {
    components: {
        ProductCard
    },

    computed: {
        ...mapState({
            products: state => state.product.products
        })
    },

    mounted() {
        this.getProducts()
    },

    methods: {
        ...mapActions(['getProducts'])
    }

}
</script>

<style>

</style>