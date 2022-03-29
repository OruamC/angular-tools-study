import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
})
export class TasksIniciadasComponent {
  todoList$: Observable<any>;

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.todoList$ = this.taskService.getTodoList$;
  }
}
