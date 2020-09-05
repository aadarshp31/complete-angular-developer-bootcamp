import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { Todo } from "../model/Todo";
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: "111",
        title: "Learn C++",
        isCompleted: true,
        date: new Date()
      },
      {
        id: "112",
        title: "Learn React",
        isCompleted: true,
        date: new Date()
      },
      {
        id: "113",
        title: "Learn Angular",
        isCompleted: false,
        date: new Date()
      },
    ];
  }

  // Read
  getTodos(){
    return of(this.todos);
  }

  // Create
  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  // Update
  changeStatus(todo: Todo){
    this.todos.map(currentTodo => {
      if(currentTodo.id === todo.id){
        return currentTodo.isCompleted = !currentTodo.isCompleted;
      }
    })
  }

  // Delete
  deleteTodo(todo: Todo){
    const indexOfTodo = this.todos.findIndex(currentTodo => currentTodo.id === todo.id);
    this.todos.splice(indexOfTodo, 1);
  }

}
