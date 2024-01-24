import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanDreamsComponent } from './american-dreams.component';

describe('AmericanDreamsComponent', () => {
  let component: AmericanDreamsComponent;
  let fixture: ComponentFixture<AmericanDreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmericanDreamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmericanDreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
