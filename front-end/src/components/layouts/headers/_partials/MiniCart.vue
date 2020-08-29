/**
  File Name:  /components/headers/_partials/MiniVarte.vue
  Description: Mini Cart 
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

<template>
    <div class="cart-navbar dropdown-menu p-2" aria-labelledby="triggerId">
        <div>
            <div class="px-2 d-flex justify-content-between">
                <div>
                    <strong>Product Title</strong>
                    <br />1 x <strong>R$ 40,00</strong>
                </div>
                <div>
                    <a href="#" class="badge badge-secondary">Excluir</a>
                </div>
            </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
            <span>Total: <strong>$ 23,00</strong></span>
            <a href="#">Limpar</a>
        </div>    
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cart-navbar {
    min-width: 320px;
    right: 0;
    left: auto;
}

</style>>