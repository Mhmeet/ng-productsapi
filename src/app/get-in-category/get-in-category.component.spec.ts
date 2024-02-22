import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInCategoryComponent } from './get-in-category.component';

describe('GetInCategoryComponent', () => {
  let component: GetInCategoryComponent;
  let fixture: ComponentFixture<GetInCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetInCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetInCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
