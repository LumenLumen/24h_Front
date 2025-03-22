import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EppComponent } from './epp.component';

describe('EppComponent', () => {
  let component: EppComponent;
  let fixture: ComponentFixture<EppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
