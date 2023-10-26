import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html'})
export class TaskDetailComponent {
  @Input() task = new Task();
  @Output() closeDetail = new EventEmitter();

  close() {
    this.closeDetail.emit();
  }
}
