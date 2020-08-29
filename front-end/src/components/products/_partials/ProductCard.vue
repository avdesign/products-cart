/**
  File Name:  /components/products/_partials/ProductCard.vue
  Description: Product Card
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

<template>
    <div class="col-3 mt-3">
        <div class="card h-100 text-left">
            <img class="w-100" src="https://via.placeholder.com/150x100" alt />
            <div class="card-body">
                <h4 class="card-title">
                    <router-link :to="{name: 'product', params: {id: 23}}">Product Title</router-link>
                </h4>
                <strong>R$ 23,00</strong>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="px-4 pb-3">
                <button class="btn btn-secondary">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>