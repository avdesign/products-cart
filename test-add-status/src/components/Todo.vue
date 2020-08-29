/**
    File: /components/Todo.vue
    Description: List items.
    Autor: Anselmo Velame
    Email: design@anselmovelame.com.br
    Github: https://github.com/avdesign
 */
<template>
    <div style="width:250px; margin:5px auto;">
      <div style="display:flex; justify-content:space-between">
        <span :class="{completed: todo.completed}" @click="toggleTodoStatus(todo)">{{todo.title}}</span>
        <button @click="removeTodo(todo)">Delete</button> 
      </div>
      
      
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ["todo"],

    methods: {

      ...mapActions({
        removeTodo: 'deleteTodo',
        toggleTodoStatus: 'toggleTodoStatus'
      })

    },
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>