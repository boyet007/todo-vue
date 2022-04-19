<template>
  <div class="col-8 mt-5">
    <h2>Todo List</h2>
    <a href="#">Add Todo</a>
    <table class="table">
      <thead>
        <tr>
          <td>ID</td>
          <td>Todo</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.name }}</td>
          <td>
            <input type="checkbox" name="" id="" v-model="todo.isFinished" />
          </td>
        </tr>
      </tbody>
    </table>
    <span>Total Finished : {{ totalFinished }}</span>
  </div>
</template>

<script>
export default {
    name: 'HomeView',
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
}
</script>