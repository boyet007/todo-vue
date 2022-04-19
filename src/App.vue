<template>
  <div class="container">
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      todos: [
        { id: 1, name: 'Ngepel', isFinished: false },
        { id: 2, name: 'Nyapu', isFinished: false },
        { id: 3, name: 'Bersihkan WC', isFinished: true },
        { id: 4, name: 'Nyanyi', isFinished: false },
        { id: 5, name: 'Tidur', isFinished: false },
        { id: 6, name: 'Makan', isFinished: false },
        { id: 7, name: 'Ngemil', isFinished: false },
      ]
    }
  },
  computed: {
    totalFinished() {
      return this.todos.filter(todo => todo.isFinished).length
    }
  }
}
</script>
