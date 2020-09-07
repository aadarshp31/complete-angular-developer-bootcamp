import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';
import { TodoService } from '../../services/todo.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle: String = "";

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  handleAddTodo() {
    const newTodo: Todo = {
      id: uuidv4(),
      title: this.todoTitle,
      isCompleted: false,
      date: new Date()
    }
    console.log(this.todoTitle);
    
    if(this.todoTitle !== ""){
      this.todoService.addTodo(newTodo);
      this.todoTitle = "";
    } else {
      alert("Todo cannot be empty!");
    }
  }

}
