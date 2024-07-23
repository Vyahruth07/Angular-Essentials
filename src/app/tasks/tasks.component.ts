import { Component, Input, Output } from '@angular/core';

import { type NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) name?:string;
  @Input() userID!:string;
  @Output() add!:string;
  isAddTask=false;
  constructor(private tasksService: TasksService){}

  

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userID)
  };

  onAddTask(){
    this.isAddTask=true;
  };

  onCancelTask(){
    this.isAddTask=false;
  }

  
  
}
