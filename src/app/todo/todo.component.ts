import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todolist: Todo[] = [
    {
      task: 'fold clothes',
      completed: true,
    },
    {
      task: 'clean room',
      completed: false,
    },
    {
      task: 'develop photos',
      completed: false,
    },
    {
      task: 'make mix and upload',
      completed: true,
    },
    {
      task: 'print out posters',
      completed: false,
    },
  ];
  searchTerm: string = '';

  constructor() {}

  ngOnInit(): void {}

  addTask = (form: NgForm, arrayOfTasks: Todo[]): void => {
    let newTask: Todo = {
      task: form.form.value.addTask,
      completed: form.form.value.completed === 'yes',
    };
    arrayOfTasks.push(newTask);
  };
  deleteTask = (index: number): void => {
    this.todolist.splice(index, 1);
  };
  setSearchTerm = (form: NgForm): void => {
    this.searchTerm = form.form.value.term;
    console.log(form.form.value.term);
  };

  filterTasks = (term: string): Todo[] => {
    return this.todolist.filter((item) => {
      let currentItem = item.task.toLowerCase().trim();
      return currentItem.includes(term.toLowerCase().trim());
    });
  };
}
