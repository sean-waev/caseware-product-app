import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSinglePillComponent } from './product-list-single-pill.component';

describe('ProductListSinglePillComponent', () => {
  let component: ProductListSinglePillComponent;
  let fixture: ComponentFixture<ProductListSinglePillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListSinglePillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListSinglePillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
