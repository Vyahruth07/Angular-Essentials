import { Component, computed, EventEmitter, Input,input,Output,output } from '@angular/core';
import { type User } from './user.model';

// type User={
//   name:string;
//   id:string;
//   avatar:string;
// };




@Component({
  selector: 'app-user',
  
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Output() select=new EventEmitter<string>();
  // select=output<string>();
  @Input({required:true}) user!:User
  @Input({required:true}) selected!:boolean

  // avatar =input.required<string>();
  // name=input.required<string>();

  // imagePath= computed(() =>{
  //   return "assets/users/"+this.avatar();
  // });

get imagePath() {
  return "assets/users/"+this.user.avatar;
}

  onClickEvent(){
    this.select.emit(this.user.id);
  };

}
