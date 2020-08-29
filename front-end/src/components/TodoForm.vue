/**
    File: /components/TodoForm.vue
    Description: Form to send the fields.
    Autor: Anselmo Velame
    Email: design@anselmovelame.com.br
    Github: https://github.com/avdesign
 */
<template>
  <div>
      <input type="text" v-model="newTodoItem" /> 
      <button @click="addNewTodoItem()">Add</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ""
        }
    },
    methods: {
        /**
         * Add item in state
         */
        addNewTodoItem() {
            this.$store.dispatch('addNewTodo', this.newTodoItem)
            this.newTodoItem = ""

        }
    }

}
</script>

<style>

</style>