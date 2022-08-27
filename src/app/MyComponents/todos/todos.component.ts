import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todolist: any;
  todos: Todo[];
  constructor() {
    this.todolist = localStorage.getItem("todos");
    if (this.todolist == null) {
      this.todos = []

    } else {
      this.todos = JSON.parse(this.todolist)
    }





  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo)
    console.log(todo, index)
    if (index > -1) { // only splice array when item is found
      this.todos?.splice(index, 1); // 2nd parameter means remove one item only
    }
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  addNewtodo(todo: Todo) {

    this.todos.push(todo)
    console.log("Dddd", todo, this.todos)
    localStorage.setItem("todos", JSON.stringify(this.todos))



  }
}
