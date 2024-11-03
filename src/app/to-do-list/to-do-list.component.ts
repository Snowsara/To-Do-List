import { Component } from '@angular/core';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Tarefa {
  title: string;
  description: string;
  status: 'pendente' | 'completed';
  dateTimeCreation: Date;
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoItemComponent, NgFor, FormsModule, NgIf],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
    title: string = '';
    description: string = '';
    nextId: number= 1;
    tarefas: Tarefa[] = JSON.parse(localStorage.getItem('tarefas') || '[]');
    newTarefa: string = '';

   addTarefa(){
    if (this.title && this.description) {
      const newTarefa: Tarefa = {
        title: this.title,
        description: this.description,
        status: 'pendente',
        dateTimeCreation: new Date()
      };
      this.tarefas.push(newTarefa);
      this.resetForm();
      this.saveTarefas();
    }
  }
    removeTarefa(index: number) {
      this.tarefas.splice(index, 1);
      this.saveTarefas();
    }
  
    markCompleted(index: number) {
      this.tarefas[index].status = this.tarefas[index].status === 'pendente' ? 'completed' : 'pendente';
      this.saveTarefas();
    }
  
    resetForm() {
      this.title = '';
      this.description = '';
    }
  
    saveTarefas() {
      localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    }

}
