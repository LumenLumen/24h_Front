import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-zone-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './zone-input.component.html',
  styleUrl: './zone-input.component.css'
})
export class ZoneInputComponent {


  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
