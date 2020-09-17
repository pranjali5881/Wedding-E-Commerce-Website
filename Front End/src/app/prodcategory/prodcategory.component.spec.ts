import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcategoryComponent } from './prodcategory.component';

describe('ProdcategoryComponent', () => {
  let component: ProdcategoryComponent;
  let fixture: ComponentFixture<ProdcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
