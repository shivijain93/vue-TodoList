const app = new Vue({
    el: '#app' ,
    data: {
        title: "TodoList",
        TodoList: '',
        todos: [] 
    },
    methods: {
        addtodo() {
            this.todos.push({
                title: this.TodoList,
                done: false
            });
            this.TodoList='';
        },
        deleteTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
          }
           
    
    }
});