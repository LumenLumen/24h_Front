import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDialogLineComponent } from './agent-dialog-line.component';

describe('AgentDialogLineComponent', () => {
  let component: AgentDialogLineComponent;
  let fixture: ComponentFixture<AgentDialogLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentDialogLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentDialogLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
