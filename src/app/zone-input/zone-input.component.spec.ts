import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneInputComponent } from './zone-input.component';

describe('ZoneInputComponent', () => {
  let component: ZoneInputComponent;
  let fixture: ComponentFixture<ZoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
