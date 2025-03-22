import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bulle',
  standalone: true,
  imports: [],
  templateUrl: './bulle.component.html',
  styleUrl: './bulle.component.css'
})
export class BulleComponent {

    @Input() texte !: string ;
}
