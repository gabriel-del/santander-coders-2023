import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Task } from 'src/models/task.model'

@Component({
  selector: 'app-task-detail',
  template: `<div class="mt-5 border p-3">
  <div class="d-flex flex-shrink-0 align-items-center justify-content-between">
    <h2>Detalhes da Tarefa</h2>
    <button
    (click)="close()"
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>

  <p><strong>Título:</strong> {{ task.title }}</p>
  <p><strong>Descrição:</strong> {{ task.description }}</p>
  <p>
    <strong>Data de Vencimento:</strong> {{ task.date | date : "dd/MM/yyyy" }}
  </p>
  <p><strong>Status:</strong> {{ task.status }}</p>
</div>
`,
})
export class Detail {
  @Input() task = new Task()
  @Output() closeDetail = new EventEmitter()

  close() {
    this.closeDetail.emit()
  }
}
