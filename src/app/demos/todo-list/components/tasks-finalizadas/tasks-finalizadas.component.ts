import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
})
export class TasksFinalizadasComponent {
  todoList$: Observable<any>;

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.todoList$ = this.taskService.getTodoList$;
  }
}
