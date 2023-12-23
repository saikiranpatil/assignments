/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.allTodos = [];
  }

  add(newTodo) {
    this.allTodos.push(newTodo);
  }

  remove(indexOfTodo) {
    this.allTodos = this.allTodos.filter((todo, index) => index !== indexOfTodo);
  }

  update(index, updatedTodo) {
    if (index >= this.allTodos.length) return;
    this.allTodos[index] = updatedTodo;
  }

  getAll() {
    return this.allTodos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= this.allTodos.length) return null;
    return this.allTodos[indexOfTodo];
  }

  clear() {
    this.allTodos = [];
  }
}

const todo = new Todo();

todo.add("Todo 1");
todo.add("Todo 2");
todo.add("Todo 3");

console.log(todo.getAll());                     


module.exports = Todo;
