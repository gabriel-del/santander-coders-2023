import {Component, EventEmitter, Output} from '@angular/core'

@Component({
  selector: 'app-task-filtro',
  template: `
<label>Filtro
<select name="filtro" id="status" [(ngModel)]="filtro" (change)="handleSelect()" >
  <option value="all">Todos os Status</option>
  <option value="toDo">ToDo</option>
  <option value="trabalhando">Trabalhando</option>
  <option value="finalizado">Finalizado</option>
</select></label>
`,
  styles: [`
.testes {
  background: red;
}
`],
})
export class Filtro {
  @Output() onChangeFiltro = new EventEmitter()
  filtro: string = 'all'
  handleSelect() {
    this.onChangeFiltro.emit(this.filtro)
  }
}
