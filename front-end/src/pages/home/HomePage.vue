/**
    File: /pages/home/HomePage.vue
    Description: Page Home.
    Autor: Anselmo Velame
    Email: design@anselmovelame.com.br
    Github: https://github.com/avdesign
 */

<template>
    <products-list />
</template>

<script>
import ProductsList from '../../components/products/ProductsList.vue'
export default {
    components: {
        ProductsList
    }
}
</script>