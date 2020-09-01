/**
    File: /App.vue
    Description: List all components.
    Autor: Anselmo Velame
    Email: design@anselmovelame.com.br
    Github: https://github.com/avdesign
 */

<template>
  <div id="app">
    <div class="container">
      <app-layouts></app-layouts>
    </div>
    <notifications-list />    
  </div>
</template>


<script>
import AppLayouts from './components/layouts/AppLayouts.vue'
import NotificationsList from './components/notifications/NotificationsList.vue'

export default {
  name: 'app',
  components: {
    AppLayouts,
    NotificationsList
  }
}
</script>
