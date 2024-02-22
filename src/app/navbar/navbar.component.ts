import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule,HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {
  categories: string[] | any = [];
  @Input() inputValue = ""; 
  @Output() categoryNameChanged = new EventEmitter<string>();
  
 constructor(private _http:HttpClient){
  
 }
ngOnInit(){
  
}
getCategory(category:string ){
  this._http.get("https://fakestoreapi.com/products/categories").subscribe(response => {
    this.categories = response;
 })
}
postMethod(category:string){
  this.categoryNameChanged.emit(category);
  // this._http.get("https://fakestoreapi.com/products/category/"+category).subscribe(response => {
  // console.log(category);
  // });
}
}