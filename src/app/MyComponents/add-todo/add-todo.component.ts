import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {


  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  title?: string
  desc?: string
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    // console.log(todo)
    this.addTodo.emit(todo)
  }

}
