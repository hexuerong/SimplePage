export default {
    namespaced: true,
    state: {
        todo: {a:'test'}
    },
    getter: {
        doneTodo (state) {
            return state.todo;
        }
    },
    mutations: {
        updateTodo (state,newTodo){
            state.todo = newTodo;
        }
    }
}