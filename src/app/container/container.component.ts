import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, SimpleChange } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DtailProductComponent } from '../dtail-product/dtail-product.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,HttpClientModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  products: Iprodcut[] | any = [];
  filterData: Iprodcut[] | any = [];
constructor(private _http:HttpClient, public dialog: MatDialog){}
ngOnInit(){
  this.getProduct();
}
ngOnChanges(changes: SimpleChange){
  console.log(this.categoryName);
  if(this.categoryName){
    this.filterData = this.products.filter((product: Iprodcut) => product.category === this.categoryName)
  }
}
getProduct(){
  this._http.get("https://fakestoreapi.com/products").subscribe(response => {
    this.products = response
  })
}
satinal(product: Iprodcut) {
  this.dialog.open(DtailProductComponent, {
    data: product,
    autoFocus: false,
    disableClose: false,
    panelClass: "testClass"
  });
}
}
export interface Iprodcut {
  id: number;
  title: string;
  price: number;
  descrpition: string;
  category: string;
  image: string;
}
//Tasarım bize ait güzelleştir
//detay veya sil butonu
//card içine sil butonu koy popup aç ve ekle
//updatede de bak 
//router ile başka sayfaya filtreli kategori gönder