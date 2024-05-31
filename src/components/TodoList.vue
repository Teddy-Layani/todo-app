<script setup>
import { ref } from "vue";
import { useTodoListStore } from "../stores/todoList.js";
import { storeToRefs } from "pinia";

const todo = ref("");
// use Pinia store:
const store = useTodoListStore();

const { todoList } = storeToRefs(store);

const { toggleCompleted, deleteTodo } = store;
const statusSymbolDone = ref("✓");
const statusSymbolUnDone = ref("✗");
const deleteSymbol = ref("❌");

</script>

<template>
    <div v-for="todo in todoList" :key="todo.id" class="item">
        <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
        <span @click.stop="toggleCompleted(todo.id)" 
        :class="{ done : !todo.completed, unDone:todo.completed }" >
            {{ todo.completed ? statusSymbolUnDone : statusSymbolDone }}</span>

        <span v-if="todo.completed" @click.stop="deleteTodo(todo.id)" class="deleteButton">
            {{ deleteSymbol }}</span>

    </div>
</template>

<style scoped>

.deleteButton {
    cursor: pointer;
    color: red;
    font-size: 1.5em;
    margin-right: 10px;

}

.completed {
    text-decoration: line-through;

}

.item {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200%;
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    font-size: 1.5em;
    color: #423f3f;
}

.done {
    margin-left: 10px;
    cursor: pointer;
    font-size: 1.5em;
    color: green;
}
.unDone {
    margin-left: 10px;
    cursor: pointer;
    font-size: 1.5em;
    color: red;
}   
</style>