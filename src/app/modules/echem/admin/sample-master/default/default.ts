import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './default.html',
  styleUrl: './default.css',
})
export class Default {

}
