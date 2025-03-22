import { Component, Input } from '@angular/core';
import { BulleComponent } from "../bulle/bulle.component";
import { EppComponent } from '../epp/epp.component';

@Component({
  selector: 'app-agent-dialog-line',
  standalone: true,
  imports:[BulleComponent, EppComponent],
  templateUrl: './agent-dialog-line.component.html',
  styleUrl: './agent-dialog-line.component.css',
})
export class AgentDialogLineComponent {

    @Input() texte !: string ;
    @Input() emotion!: string ;
}
