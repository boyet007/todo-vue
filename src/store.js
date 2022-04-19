import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        //api data
        todos: [{
            id: 1,
            name: 'Ngepel',
            isFinished: false
        },
        {
            id: 2,
            name: 'Nyapu',
            isFinished: false
        },
        {
            id: 3,
            name: 'Bersihkan WC',
            isFinished: true
        },
        {
            id: 4,
            name: 'Nyanyi',
            isFinished: false
        },
        {
            id: 5,
            name: 'Tidur',
            isFinished: false
        },
        {
            id: 6,
            name: 'Makan',
            isFinished: false
        },
        {
            id: 7,
            name: 'Ngemil',
            isFinished: false
        },
        ],
        newTodo: null,
    },
    mutations: {
        GET_TODO(state, todo) {
            state.newTodo = todo
        },
        ADD_TODO(state) {
            state.todos.push({
                body: state.newTodo,
                completed: false
            })
        },
        EDIT_TODO(state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
            state.todos = todos
            state.newTodo = todo.body
        },
        REMOVE_TODO(state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
        },
        COMPLETE_TODO(state, todo) {
            todo.completed = !todo.completed
        },
        CLEAR_TODO(state) {
            state.newTodo = ''
        }
    },
    actions: {
        getTodo({ commit }, todo) {
            commit('GET_TODO', todo)
        },
        addTodo({ commit }) {
            commit('ADD_TODO')
        },
        editTodo({ commit }, todo) {
            commit('EDIT_TODO', todo)
        },
        removeTodo({ commit }, todo) {
            commit('REMOVE_TODO', todo)
        },
        completeTodo({ commit }, todo) {
            commit('COMPLETE_TODO', todo)
        },
        clearTodo({ commit }) {
            commit('CLEAR_TODO')
        }
    }
});