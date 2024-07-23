import { NgModule } from "@angular/core";
import { UserComponent } from "../user/user.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./newtask/newtask.component";
import { CardComponent } from "../shared/card/card.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[NewTaskComponent,TaskComponent,TasksComponent],
    exports:[TasksComponent],
    imports:[CommonModule,SharedModule,FormsModule],
})

export class TasksModule {};