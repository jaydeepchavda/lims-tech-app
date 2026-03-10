import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-role-master',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './role-master.html',
  styleUrl: './role-master.css',
})
export class RoleMaster {
  roleName = signal('Admin');
  description = signal('Admin have full rights.');
  roleId = signal(1);
  // Simulated data from your image
  pages = signal([
    { name: 'WhatIsGoingOn', view: true, op: true },
    { name: 'User Master', view: true, op: true },
    { name: 'Role Master', view: true, op: true },
    { name: 'ProjectTrack Ticket Search', view: true, op: true },
    { name: 'Set Missing Days', view: true, op: true },
    { name: 'Send Greeting Card', view: true, op: true },
    { name: 'Project Status', view: true, op: true },
    { name: 'Set Series', view: true, op: true },
    { name:"Active EPA CLP Method Version", view: true, op: true }
  ]);

 constructor(private route: ActivatedRoute, private router: Router) {
    // 1. Fetch the full object from the Navigation State (The "Hidden" data)
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { roleData: any };

    if (state && state.roleData) {
      this.roleName.set(state.roleData.name);
      this.description.set(state.roleData.description);
    }
  }

  ngOnInit() {
    // 2. Fetch the ID from the URL Query Params (The "Visible" data)
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.roleId.set(+params['id']);
      }
    });
  }
}
