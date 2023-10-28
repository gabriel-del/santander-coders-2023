import {Component, Input} from '@angular/core'
import {Task} from 'src/models/task.model'

@Component({
  selector: 'app-log',
  template: `
  <div *ngIf="tasks.length > 0">
  <h2>Log</h2>
  <table>
    <thead>
      <tr><th>To Do</th><th>In Progress</th><th>Done</th><th>Data</th></tr>
    </thead>
    <tbody>
    <tr *ngFor="let task of tasks">
      <td>{{ task.title }}</td>
      <td>{{ task.description }}</td>
      <td>{{ task.status }}</td>
      <td>{{ task.date }}</td>
    </tr>
    </tbody>
  </table>
</div>
`,
  styles: [`
table {
  width: 100%;
  border: 1px solid;
}
th, td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
tr:hover {background-color: #fafafa;}
tr:nth-child(even) {background-color: #f2f2f2;}
th {
  background-color: #0d6efd;
  color: white;
}


`]
})
export class Log {
  columns = [
    {name: 'To Do', id: 'toDo'},
    {name: 'In Progress', id: 'trabalhando'},
    {name: 'Done', id: 'finalizado'},
  ]
  @Input() tasks: Task[] = []
}
