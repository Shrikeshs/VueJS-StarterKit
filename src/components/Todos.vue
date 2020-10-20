<template>
  <div>
    <h3>Todosssss</h3>

    <div class="todos">
      <div class="todo" v-for="todo in allTodos" v-bind:key="todo.id">
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
// Gets the getters from the vuex store
//mapGetters returns an array of all the getters we need this case all Todos
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todo",
  methods: {
    ...mapActions(["fetchTodos","deleteTodo"]),
    // mapActions should be called  before components are loaded, we use lifecycle methods.
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>







<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
   position:absolute;
   bottom: 10px;
   right: 5px;
   cursor: pointer;
}
</style>