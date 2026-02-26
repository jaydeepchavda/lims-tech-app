import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-echem',
  standalone: true,  
  imports: [ RouterOutlet, Header, Footer],
  templateUrl: './echem.html',
  styleUrl: './echem.css',
})
export class Echem {

}
