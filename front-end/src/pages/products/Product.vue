/**
  File Name:  /pages/products/Product.vue
  Description: Product Especific 
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

<template>
    <div class="content mt-3" v-if="product">
        <div class="row">
            <div class="col-4">
                <img :src="product.image" class="w-100" />
            </div>
            <div class="col-8">
                <h1>{{ product.title }}</h1>
                <h3>R$ {{ product.price }}</h3>
                <input type="text" class="text-center col-1 mr-2 p-1">
                <button class="btn btn-primary">Add to Cart</button>
                <p class="mt-4"> {{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],

    computed: {
        product() {
            return this.$store.state.product
        }
    },

    mounted() {
        this.$store.dispatch('getProduct', this.id)
    }
}
</script>

<style>

</style>