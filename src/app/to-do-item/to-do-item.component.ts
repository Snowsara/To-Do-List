import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-to-do-item',
  standalone: true,
  imports: [NgClass, FormsModule, CommonModule],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css'
})
export class ToDoItemComponent {
  @Input() tarefa!: Tarefa; 
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();
  @Output() markCompleted: EventEmitter<void> = new EventEmitter<void>();

  removeTarefa() {
    this.remove.emit();
  }

  alternarConcluida() {
    this.markCompleted.emit();
  }

}