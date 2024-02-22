import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, ErrorHandler } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  form!: FormGroup;
  constructor(private _htpp: HttpClient, private _router: Router) {

  }
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required)
    })
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
    this.create(this.form.value).subscribe((res:any) => {
      console.log("Post created successfully!");
      this._router.navigateByUrl('');
    })
  }
  create(product: Iproduct): Observable<any> {
    return this._htpp.post("https://fakestoreapi.com/products" + JSON.stringify(product), this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}




export interface Iproduct {
  id: number;
  title: string;
  price: number;
  descrpition: string;
  category: string;
  image: string;

}