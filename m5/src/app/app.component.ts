import type {ElementRef} from '@angular/core'
import {Component, ViewChild} from '@angular/core'
import type {Task} from 'src/models/task.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container pb-5">
  <app-task-form-reactive (addTask)="onAddTask($event)"></app-task-form-reactive>
  <app-task-list  [tasks]="listTask" (handleTask)="handleTask($event)"></app-task-list>
  <app-log [tasks]="selectedLog" ></app-log>
  <div #myDiv>
    <div *ngIf="selectedTask">
      <app-task-detail [task]="selectedTask" (closeDetail)="fecharDetalhes()"></app-task-detail>
    </div>
  </div>
</div>
`,
})
export class AppComponent {
  @ViewChild('myDiv') detailDiv!: ElementRef
  listTask: Task[] = [
    {date: new Date(), description: 'description01', status: 'toDo', title: 'title01'},
    {date: new Date(), description: 'description01', status: 'trabalhando', title: 'title02'},
    {date: new Date(), description: 'description01', status: 'finalizado', title: 'title03'},
  ]
  selectedTask: Task | null = null
  selectedLog: Task[] = []
  ngOnInit() {}
  onAddTask(task: Task) {this.listTask.push(task)}
  handleTask(task: Task) {
    this.selectedTask = task
    this.selectedLog.push(task)
    setTimeout(() => this.detailDiv.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'}), 500)
  }
  fecharDetalhes() {this.selectedTask = null}
}
