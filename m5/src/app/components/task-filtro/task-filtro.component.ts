import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filtro',
  template: `
  <label for="filtro">Filtro</label>
<select
  name="filtro"
  id="status"
  [(ngModel)]="filtro"
  (change)="handleSelect()"
>
  <option value="all">Todos os Status</option>
  <option value="toDo">ToDo</option>
  <option value="trabalhando">Trabalhando</option>
  <option value="finalizado">Finalizado</option>
</select>
`,
  styles: [`.testes { 
    background: red;
}`],
})
export class TaskFiltroComponent {
  @Output() onChangeFiltro = new EventEmitter();

  filtro: string = 'all';



  handleSelect() {
    this.onChangeFiltro.emit(this.filtro)
  }

}
