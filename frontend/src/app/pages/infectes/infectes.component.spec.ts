import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectesComponent } from './infectes.component';

describe('InfectesComponent', () => {
  let component: InfectesComponent;
  let fixture: ComponentFixture<InfectesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfectesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfectesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
