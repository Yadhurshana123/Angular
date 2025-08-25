import { Component, EventEmitter, Input, Output } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';
// const randomUsers = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) name!:string;
  @Input({required:true}) avatar!:string;
  @Input({required:true}) id!:string;

  @Output() select = new EventEmitter();

  // selectedUser = DUMMY_USERS[randomUsers]


  
  getNewUser(id: string){
    return this.select.emit(id);



    // const randomUsers = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomUsers];
   }
}
