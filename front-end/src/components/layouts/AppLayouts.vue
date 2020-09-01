/**
    File: /layouts/AppLayouts.vue
    Description: main layout components.
    Autor: Anselmo Velame
    Email: design@anselmovelame.com.br
    Github: https://github.com/avdesign
 */

<template>
  <div>
      <app-header />
      <router-view />
      <app-footer />
  </div>
</template>

<script>
import AppHeader from './headers/AppHeader.vue'
import AppFooter from './footers/AppFooter.vue'

export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<style>

</style>