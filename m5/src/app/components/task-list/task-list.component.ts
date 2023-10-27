import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-list',
  template: `<div>
  <h2>Tarefas</h2>

  <app-task-filtro (onChangeFiltro)="handleFiltro($event)"></app-task-filtro>

  <div class="kanban-board mt-3">
    <div class="column" *ngFor="let column of columns">
      <h2>{{ column.name }}</h2>
      <ng-container *ngFor="let item of tasksFiltradas">
        <ng-container *ngIf="item.status === column.id">
          <div class="card px-4 pt-2 mb-2">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>

            <div>
              <button class="btn btn-light w-100" (click)="selectedTask(item)">
                Editar
              </button>
              <button
                class="btn btn-info w-100 mt-2 mb-3"
                (click)="selectedTask(item)"
              >
                Ver detalhes
              </button>
            </div>
          </div>
        </ng-container>
      </ng-container>
    </div>
  </div>
</div>
`,
  styles: [`
  .kanban-board { display: flex;  flex-direction: row; }
  .column { 
    &:nth-child(2) { 
      margin: 0 8px; } flex: 1; padding: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f0f0f0;

    h2 {
      text-align: center;
}}`],
})
export class TaskListComponent implements OnInit {

  columns = [
    { name: 'To Do', id: 'toDo' },
    { name: 'In Progress', id: 'trabalhando' },
    { name: 'Done', id: 'finalizado' },
  ];

  @Input() tasks: Task[] = [];
  @Output() handleTask = new EventEmitter();

  tasksFiltradas: Task[] = [];

  ngOnInit() {
    this.tasksFiltradas = this.tasks;
  }
  

  selectedTask(task: Task) {
    this.handleTask.emit(task);
  }

  handleFiltro(filtro: string) {
    if (filtro === 'all') {
      this.tasksFiltradas = this.tasks;
      return;
    }

    this.tasksFiltradas = this.tasks.filter((item) => {
      if (item.status === filtro) {
        return item;
      }
      return;
    });
  }
}
