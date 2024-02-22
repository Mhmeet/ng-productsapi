import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from "./navbar/navbar.component";
import { ContainerComponent } from "./container/container.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NavbarComponent, ContainerComponent]
})
export class AppComponent {
  constructor( ) {
  } 

}


//state management
//behaviour subject subject
//== vs ===
//data mining 1 way 2 way
//single page
//lazy loading
//router ile başka sayfaya filtreli kategori gönder
