import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { Iprodcut } from '../container/container.component';
@Component({
  selector: 'app-dtail-product',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './dtail-product.component.html',
  styleUrl: './dtail-product.component.scss'
})
export class DtailProductComponent {
  constructor(
    public dialogRef: MatDialogRef<DtailProductComponent>,
    @Inject(MAT_DIALOG_DATA) public DialogData: Iprodcut,
  ) {}
}
