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
      console.log(form.value);
      this.outputData.emit(form.value);
    }
    form.reset();
  }

  demanderInfoSPA(form:NgForm) { 
    form.controls['texte'].setValue("Je souhaite avoir des informations sur les SPA.");
    if (form.valid) {
      console.log(form.value);
      this.outputData.emit(form.value);
    }
    form.reset();
  }

  demanderTourisme(form: NgForm) {
    form.controls['texte'].setValue("Quelles sont les activités autour de l'hôtel ?");
    if (form.valid) {
      console.log(form.value);
      this.outputData.emit(form.value);
    }
    form.reset();
  }

  demanderMeteo(form: NgForm) {
    form.controls['texte'].setValue("Quelle est la météo à venir ?");
    if (form.valid) {
      console.log(form.value);
      this.outputData.emit(form.value);
    }
    form.reset();
  }

  demanderReserver(form: NgForm) {
    form.controls['texte'].setValue("Je souhaite réserver une table au restaurant.");
    if (form.valid) {
      console.log(form.value);
      this.outputData.emit(form.value);
    }
    form.reset();
  }

  demanderInfoRestaurants(form: NgForm) {
    form.controls['texte'].setValue("Je souhaite avoir des informations sur les restaurants.");
    if (form.valid) {
      console.log(form.value);
      this.outputData.emit(form.value);
    }
    form.reset();
  }

  demanderEnregistrement(form: NgForm) {
    form.controls['texte'].setValue("Je souhaite m'enregistrer en tant que client.");
    if (form.valid) {
      console.log(form.value);
      this.outputData.emit(form.value);
    }
    form.reset();
  }
}
