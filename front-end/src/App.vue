/**
    File: /App.vue
    Description: List all components.
    Autor: Anselmo Velame
    Email: design@anselmovelame.com.br
    Github: https://github.com/avdesign
 */

<template>
  <div id="app">
    <app-layouts></app-layouts>
    
  </div>
</template>


<script>
import AppLayouts from './components/layouts/AppLayouts.vue'

export default {
  name: 'app',
  components: {
    AppLayouts
  }
}
</script>
