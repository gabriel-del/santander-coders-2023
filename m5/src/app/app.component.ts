import { Component, ElementRef, ViewChild } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('myDiv') detailDiv!: ElementRef;

  listTask: Task[] = [
    { date: new Date(),  description: 'description01', status: 'toDo', title: 'title01'},
    { date: new Date(),  description: 'description01', status: 'trabalhando', title: 'title02'},
    { date: new Date(),  description: 'description01', status: 'finalizado', title: 'title03'},
  ];


  get toDoStatus() {
    return this.listTask.filter(item => item.status === 'toDo')
  }
  // listTask: Array<IListTask> = [];
  selectedTask: Task | null = null;

  ngOnInit() {
    console.log(this.selectedTask);
  }

  onAddTask(task: Task) {
    this.listTask.push(task);
  }

  handleTask(task: Task) {
    this.selectedTask = task;
    setTimeout(() => {
      this.detailDiv.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 500);
  }

  fecharDetalhes() {
    this.selectedTask = null;
  }
}
