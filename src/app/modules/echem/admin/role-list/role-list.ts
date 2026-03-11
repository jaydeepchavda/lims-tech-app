import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-role-list',
  imports: [RouterLink],
  templateUrl: './role-list.html',
  styleUrl: './role-list.css',
})
export class RoleList {
  private router = inject(Router);
  // constructor(private router: Router) { }
  roles = signal([
    { id:1, name: 'Admin', description: 'Admin have full rights.' },
    { id:2,name: 'HR', description: 'Human management rights.' },
    { id:3,name: 'Employee', description: 'Standard employee rights.' }
  ]);

 onEdit(role: any) {
  this.router.navigate(['/lims/echem/admin/RoleMaster'], {
    queryParams: { id: role.id }, 
    state: { roleData: role }    
  });
}
onDelete(role: any){
  alert("You are not permission to delete this role")
}
}
