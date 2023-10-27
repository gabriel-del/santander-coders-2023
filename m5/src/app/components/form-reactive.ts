import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms'
import {dateLessThanValidator} from 'src/app/validators/dateLessThan.validator'
import {Task} from 'src/models/task.model'

@Component({
  selector: 'app-task-form-reactive',
  template: `
  <div class="mt-3">
  <h2>Adicionar Nova Tarefa</h2>

  <form
    class="border p-3 mb-3"
    [formGroup]="formTask"
    (ngSubmit)="submitTask()"
  >
    <div class="form-group">
      <label for="title">Titulo</label>
      <input
        class="form-control"
        id="title"
        type="text"
        name="title"
        formControlName="title"
      />

      <div
        class="text-danger"
        *ngIf="formTask.get('title')?.hasError('required')"
      >
        Titulo é obrigatório
      </div>
    </div>
    <div class="form-group">
      <label for="description">Descrição</label>
      <input
        class="form-control"
        id="description"
        type="text"
        name="description"
        formControlName="description"
      />
      <div
        class="text-danger"
        *ngIf="formTask.get('description')?.hasError('required')"
      >
        Descrição é obrigatório
      </div>
    </div>
    <div class="form-group">
      <label for="date">Data de Vencimento</label>
      <input
        class="form-control"
        id="date"
        type="text"
        appDateMask
        name="date"
        formControlName="date"
      />

      <div
        class="text-danger"
        *ngIf="formTask.get('date')?.hasError('required')"
      >
        Data é obrigatório
      </div>
      <div
        class="text-danger"
        *ngIf="formTask.get('date')?.hasError('dateLessThan')"
      >
        Erro dateLessThan
      </div>
    </div>

    <div class="form-group">
      <label for="status">Status</label>
      <select
        class="form-control"
        name="status"
        id="status"
        formControlName="status"
      >
        <option value="toDo">ToDo</option>
        <option value="trabalhando">Trabalhando</option>
        <option value="finalizado">Finalizado</option>
      </select>

      <div
        class="text-danger"
        *ngIf="formTask.get('status')?.hasError('required')"
      >
        Status é obrigatório
      </div>
    </div>

    <button type="button" class="btn btn-secondary" (click)="addTag()">
      Adicionar
    </button>


    <div class="form-group" formArrayName="tags">
      <div *ngFor="let tag of tags.controls; let i = index">
        <label for="tags">Nome da Tag:</label>

        <input id="tags" type="text" [formControlName]="i" />
      </div>
    </div>

    <button type="submit" class="btn btn-primary mt-4 w-100">Criar</button>
  </form>
</div>
`,
  styles: [`.form-group {
    margin-top: 8px;
}`],
})
export class FormReactive implements OnInit {
  @Input() task: Task | null = {
    date: '27/05/1995',
    description: 'dasdasdasd',
    title: 'adasdasdas',
    status: 'toDo',
    tags: ['Angular', 'React'],
  }
  public formTask: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: ['', Validators.required],
    date: ['', [Validators.required, dateLessThanValidator()]],
    status: ['', Validators.required],
    tags: this.formBuilder.array([]),
  })
  @Output() addTask = new EventEmitter()
  get tags() {
    return this.formTask.get('tags') as FormArray
  }
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    /*     this.formTask.setValue({ ...this.task }); */

    this.formTask.patchValue({...this.task})

    this.task?.tags?.forEach(item => {
      this.addTag(item)
    })

    console.log(this.formTask.value)
  }
  submitTask() {
    this.addTask.emit(this.formTask.value)
    this.formTask.reset()
  }
  addTag(value = '') {
    this.tags.push(this.formBuilder.control(value, Validators.required))
  }
}
