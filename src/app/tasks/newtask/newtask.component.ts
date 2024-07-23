import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewTaskComponent {
@Output() close =new EventEmitter<void>();

@Input({required:true}) userID!:string;
entryTitle='';
entrySummary="";
entryDate='';

private tasksService =inject(TasksService);

onCancel(){
  this.close.emit();
}
onSubmit(){
  this.tasksService.addTask({
    title: this.entryTitle,
    summary: this.entrySummary,
    dueDate: this.entryDate,
  },this.userID)
  this.close.emit();
};



}
