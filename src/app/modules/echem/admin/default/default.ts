import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-default',
  imports: [ RouterLink,CommonModule],
  templateUrl: './default.html',
  styleUrl: './default.css',
})
export class Default {
  currentPageTitle: string = 'main page';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router.url);
  }
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
    this.updateTitle();
  }
  updateTitle() {
    let route = this.activatedRoute.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    this.currentPageTitle = route.snapshot.data['title'] || 'Main Page';
  }

}
