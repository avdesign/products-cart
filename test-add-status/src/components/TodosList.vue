/**
    File: /components/TodoList.vue
    Description: List all items.
    Autor: Anselmo Velame
    Email: design@anselmovelame.com.br
    Github: https://github.com/avdesign
 */

<template>
    <div>
        <todo v-for="(todo, index) in todos" :key="index" :todo="todo"/>
    </div>  
</template>

<script>
import { mapState } from 'vuex'
import Todo from './Todo.vue'
export default {
    components: {
        Todo
    },
    computed: {
        ...mapState({
            todos: 'todos'
        })

        /*
        or
        todos() {
            return this.$store.state.todos
        }
        */
    }
}
</script>

<style>

</style>