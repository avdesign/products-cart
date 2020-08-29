/**
  File Name:  /pages/products/Product.vue
  Description: Product Especific 
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

<template>
    <div class="content mt-3">
        <div class="row">
            <div class="col-4">
                <img src="https://via.placeholder.com/150x100" class="w-100" />
            </div>
            <div class="col-8">
                <h1>Product Title</h1>
                <h3>R$ 150</h3>

                <input type="text" class="text-center col-1 mr-2 p-1">
                <button class="btn btn-primary">Add to Cart</button>
                <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum veniam tempora, eius minus a non. Esse mollitia cumque similique, ut expedita qui repellendus soluta ducimus numquam consequatur exercitationem iure!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id']

}
</script>

<style>

</style>