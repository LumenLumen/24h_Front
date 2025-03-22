import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-zone-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './zone-input.component.html',
  styleUrl: './zone-input.component.css'
})
export class ZoneInputComponent {

  @Output() outputData: EventEmitter<string> = new EventEmitter();
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.outputData.emit(form.value);
    }
    form.reset();
  }
}
