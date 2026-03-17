import { CommonModule } from '@angular/common';
import { Component, computed, signal, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-add-data',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-data.html',
  styleUrl: './add-data.css',
})
@Injectable({ providedIn: 'root' })
export class AddData {
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

  activeBlock = signal<string>('methods');

  selectBlock(blockName: string) {
    this.activeBlock.set(blockName);
  }
  methodsList = signal([
    { id: 1, name: 'SM4500', description: 'Standard Method' },
    { id: 2, name: 'SM4500 CI G', description: 'Chlorine Method' },
    { id: 5, name: 'SM4500 F-C', description: 'Fluoride Determination' },
  ]);

  parmaList = signal([
    { id: 1, paramName: 'Aliphatic  C12-C16', CAS: 'PHCC12C16AL' },
    { id: 2, paramName: 'Aliphatic  C16-C21', CAS: 'PHCC16C21AL' },
    { id: 3, paramName: 'Aliphatic  C9-C12', CAS: 'PHCC9C12AL' },
    { id: 4, paramName: 'C19-C36 Aliphatic Hydrocarbons', CAS: 'C19-C36 Aliphatic Hydrocarbons' },
  ]);

  matrixList = signal([
    { id: 1, matrixName: 'AC', description: 'ADD charges', matrixType: '	water' },
    { id: 2, matrixName: 'Air', description: ' ', matrixType: '	AIR' },
    { id: 3, matrixName: 'Other', description: 'Oli/Wipes', matrixType: 'Solid' },
  ])
  priorityList = signal([
    { id: 1, priority: 0, text: '10 Bus. days', priceMultiplier: 1, TAT: 10 },
    { id: 2, priority: 1, text: '5 Bus. days', priceMultiplier: 1, TAT: 5 },
    { id: 3, priority: 2, text: '3 Bus. days', priceMultiplier: 1, TAT: 3 },
    { id: 4, priority: 3, text: '2 Bus. days', priceMultiplier: 1, TAT: 2 },
    { id: 5, priority: 4, text: '1 Bus. days', priceMultiplier: 1, TAT: 1 },
  ])
  departmentlist = signal([
    { id: 1, deparment: 'Administrative', description: '	Administrative' },
    { id: 2, deparment: 'Digestion', description: '2' },
    { id: 3, deparment: 'Disposal', description: 'Disposal' },

  ])
  newTestMode = signal<string>('add'); 
  isGroupTest = signal<string>('no'); 
  matrixOptions = signal(['DI Water', 'Ground Water', 'Drinking Water', 'Waste Water']);

  // 2. The public search term
  methodSearchTerm = signal<string>('');
  // 3. The business logic (Handling the filtering here)
  filteredMethods = computed(() => {
    const term = this.methodSearchTerm().toLowerCase().trim();
    if (!term) return this.methodsList();

    return this.methodsList().filter(m =>
      m.name.toLowerCase().includes(term) ||
      m.description.toLowerCase().includes(term)
    );
  });

  // 4. Action to update search
  updateSearch(term: string) {
    this.methodSearchTerm.set(term);
  }
}
