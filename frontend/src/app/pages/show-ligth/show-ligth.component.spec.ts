import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLigthComponent } from './show-ligth.component';

describe('ShowLigthComponent', () => {
  let component: ShowLigthComponent;
  let fixture: ComponentFixture<ShowLigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowLigthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowLigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
