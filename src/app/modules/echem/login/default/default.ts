import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router,RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './default.html',
  styleUrl: './default.css',
})
export class Default { 
  currentPageTitle : string = 'main page';

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    console.log(this.router.url);
  }
  
  ngOnInit(){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
    this.updateTitle();
  }

  updateTitle(){
    // 3. Dig down to the deepest active route to find your 'data'
    let route = this.activatedRoute.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    // 4. Automatically get the title from your route definition
    // This looks for: data: { title: '...' }
    this.currentPageTitle = route.snapshot.data['title'] || 'Main Page';
  }
}