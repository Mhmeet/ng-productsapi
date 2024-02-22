import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtailProductComponent } from './dtail-product.component';

describe('DtailProductComponent', () => {
  let component: DtailProductComponent;
  let fixture: ComponentFixture<DtailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DtailProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DtailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
