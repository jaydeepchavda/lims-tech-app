import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-nav-master',
  imports: [],
  templateUrl: './nav-master.html',
  styleUrl: './nav-master.css',
})
export class NavMaster {
  moduleOptions = [
    'Dashboard',
    'Admin',
    'Airinv',
    'Login'
  ]

  // Inside your NavigationMaster class
  navigationRecords = signal([
    { navNo: '2001', title: 'WhatIsGoingOn', name: 'whatisgoingon.aspx', seq: 16, isNew: true, url: '~/ECHEM/Admin/whatisgoingon.aspx' },
    { navNo: '2002', title: 'User Master', name: 'UserList.aspx', seq: 2, isNew: false, url: '~/ECHEM/Admin/UserList.aspx' },
    { navNo: '2003', title: 'Role Master', name: 'RoleList.aspx', seq: 3, isNew: false, url: '~/ECHEM/Admin/RoleList.aspx' },
    { navNo: '2004', title: 'ProjectTrack Ticket Search', name: 'Search.aspx', seq: 4, isNew: false, url: '~/ECHEM/Admin/Search.aspx' }
  ]);
  updateNavigation(){
    alert("The navigation has been updated successfully.")
    this.selectedModule.set('');
  }
  selectedModule = signal('')

  onModuleChange(event: Event) {
    const selectedModule = (event.target as HTMLSelectElement).value;
    this.selectedModule.set(selectedModule);
  }
  isNavAvailableToShow = computed(() => {
    const val = this.selectedModule()
    return val !== '' && val !== '---SELECT---';
  })
}
