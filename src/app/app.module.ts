import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";

import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/newtask/newtask.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations:[AppComponent,HeaderComponent,UserComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,SharedModule,TasksModule]
})

export class AppModule {};