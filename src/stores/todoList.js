import { defineStore } from "pinia"

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: []
    }),
    actions: {
        addTodo(item) {
            debugger;
            this.todoList.push({ id: this.todoList.length + 1, item, completed: false })
        },
        deleteTodo(itemIndex) {
            this.todoList = this.todoList.filter( (object) => {
                return object.id !== itemIndex
            })
        },
        toggleCompleted(itemId) {
            this.todoList.map( (object) => {
                if(object.id === itemId) {
                    object.completed = !object.completed
                }
            })
        }
    },
    getters: {
        doneTodos() {
            return this.todoList.filter(todo => todo.completed)
        }
    }
})