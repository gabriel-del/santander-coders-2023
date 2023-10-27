import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {Task} from 'src/models/task.model'

@Component({
  selector: 'app-log',
  template: `
  <div>
  <h2>Log</h2>
  <div *ngIf="tasks.length > 0"></div>
</div>
`,
  styles: [`
  .kanban-board { display: flex;  flex-direction: row; }
  .column {
    &:nth-child(2) {
      margin: 0 8px;
    } flex: 1; padding: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f0f0f0;
    h2 { text-align: center; }}
    `],
})
export class Log implements OnInit {
  columns = [
    {name: 'To Do', id: 'toDo'},
    {name: 'In Progress', id: 'trabalhando'},
    {name: 'Done', id: 'finalizado'},
  ]
  @Input() tasks: Task[] = []
  @Output() handleTask = new EventEmitter()
  tasksFiltradas: Task[] = []
  ngOnInit() {this.tasksFiltradas = this.tasks}
  selectedTask(task: Task) {this.handleTask.emit(task)}
  handleFiltro(filtro: string) {
    if (filtro === 'all') {
      this.tasksFiltradas = this.tasks
      return
    }
    this.tasksFiltradas = this.tasks.filter(item => item.status === filtro)
  }
}
