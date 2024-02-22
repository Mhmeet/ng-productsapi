import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-get-in-category',
  standalone: true,
  imports: [],
  templateUrl: './get-in-category.component.html',
  styleUrl: './get-in-category.component.scss'
})
export class GetInCategoryComponent {
  constructor(public navbarComp: NavbarComponent){

  }
   
}
