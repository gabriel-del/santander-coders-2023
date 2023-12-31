import {Component, EventEmitter, Output} from '@angular/core'
import {NgForm} from '@angular/forms'
import {Task} from 'src/models/task.model'

@Component({
  selector: 'app-task-form',
  template: `
  <div class="container mt-3">
  <h2>Adicionar Nova Tarefa</h2>
  <form class="border p-3 mb-3" (ngSubmit)="submitTask(form)" #form="ngForm">
    <div class="form-group">
      <label >Título <input id="title" type="text" [(ngModel)]="newTask.title" name="title" required minlength="3" #henrique="ngModel" class="form-control"/></label>
    </div>
    <div class="form-group">
      <label>Descrição <input id="description" type="text" [(ngModel)]="newTask.description" name="description" required class="form-control"/></label>
      <div *ngIf="form.controls['description'].invalid" class="text-danger"> Campo inválido. </div>
    </div>
    <div class="form-group">
      <label>Data de Vencimento <input id="date" type="date" [(ngModel)]="newTask.date" name="date" required pattern="^\d{4}-\d{2}-\d{2}$" class="form-control" /> </label>
       <div *ngIf="form.controls['date'].invalid" class="text-danger"> Data inválida. </div>
    </div>
    <div class="form-group">
      <label for="status">Status</label>
      <select name="status" id="status" [(ngModel)]="newTask.status" required class="form-control" >
        <option value="toDo">ToDo</option>
        <option value="trabalhando">Trabalhando</option>
        <option value="finalizado">Finalizado</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary w-100 mt-4">Criar</button>
  </form>
</div>
`,
  styles: [`
  .form-group {
    margin-top: 8px;
}
`],
})
export class Form {
  @Output() addTask = new EventEmitter()
  public newTask = new Task()
  submitTask(form: NgForm) {
    if (!form.valid) return
    this.addTask.emit(this.newTask)
    this.newTask = new Task()
  }
}
