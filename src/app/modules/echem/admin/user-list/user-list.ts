import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink,RouterModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userInfo = signal([
    { id: 1, userName:'Jaydeep', Designation:'Software Engineer',email: 'jaydeep@gmail.com' ,firm:"Echem" },
    { id: 2, userName:'krunal', Designation:'Software Engineer',email: 'krunal@gmail.com' ,firm:"Echem" },
    { id: 3, userName:'kalu', Designation:'Software Engineer',email: 'kalu@gmail.com' ,firm:"Echem" },
    { id: 4, userName:'mayur', Designation:'chemist',email: 'mayur@gmail.com' ,firm:"Echem" },
  ])

  onEdit(role: any){
    alert("You are not permission to edit this role")
  }
  onDelete(role: any){
    alert("You are not permission to delete this role")
  }
} 
