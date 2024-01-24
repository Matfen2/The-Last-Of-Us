import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlouComponent } from './tlou.component';

describe('TlouComponent', () => {
  let component: TlouComponent;
  let fixture: ComponentFixture<TlouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TlouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TlouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
