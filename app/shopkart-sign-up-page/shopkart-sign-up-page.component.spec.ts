import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkartSignUpPageComponent } from './shopkart-sign-up-page.component';

describe('ShopkartSignUpPageComponent', () => {
  let component: ShopkartSignUpPageComponent;
  let fixture: ComponentFixture<ShopkartSignUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopkartSignUpPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopkartSignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
