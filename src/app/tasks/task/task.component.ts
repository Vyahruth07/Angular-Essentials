import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { type Tasks } from './task.model';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) task!:Tasks;
  @Output() complete=new EventEmitter<string>();
  private tasksService =inject(TasksService);



  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  };


}
