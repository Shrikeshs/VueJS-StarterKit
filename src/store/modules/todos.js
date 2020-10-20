import axios from 'axios'; 


const state={
    // the state will be filled with json data ny the setTodos mutation
    todos: [
     
    ]

};
const getters={
    allTodos:(state) => state.todos
};
// acrion will send a request, get a response and trigger a mutation
const actions={
    async fetchTodos({commit}){
        // we use commit to call the mutation
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
       // We call a mutation usuing the commit, where the first parameter is the mutatuion name, second parameter is the data
        commit('setTodos',response.data);
    },
    async addTodo({commit}, title) {
      const response =await axios.post('https://jsonplaceholder.typicode.com/todos',{title, completed:false})
        commit('newTodo',response.data);
    },
    async deleteTodo({commit},id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id)
    },
};
const mutations={
    // setTodos mutation is to set the json data gotten from the above url to the state, 
    setTodos:(state, todos)=> (state.todos=todos) ,
    newTodo:(state,todo) => state.todos.unshift(todo),
    removeTodo:(state,id) => state.todos=state.todos.filter(todo=> todo.id!==id)
};

export default {
    state,
    getters,
    mutations,
    actions
};