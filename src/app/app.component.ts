import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgentDialogLineComponent } from './agent-dialog-line/agent-dialog-line.component';
import { ZoneInputComponent } from "./zone-input/zone-input.component";
import { CommonModule } from '@angular/common';
import { BulleComponent } from "./bulle/bulle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgentDialogLineComponent, ZoneInputComponent, CommonModule, BulleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewChecked{
  title = 'Hotel';
  
  @ViewChild('scrollable') private scrollable: ElementRef | undefined;
  listeMessage: Array<[string, number]> = [];

  ngOnInit(): void {
      this.listeMessage.push(["Bonjour, je suis Epp, votre agent réceptionniste. Que puis-je faire pour vous ?", 0]);
  }

  myOuputData(event: any){
    this.listeMessage.push([event.texte,1]);
  }
  
  // Cette méthode s'assure que l'on fait défiler le conteneur vers le bas après chaque ajout de message
  ngAfterViewChecked() {
    if (this.scrollable) {
      const scrollableElement = this.scrollable.nativeElement;
      scrollableElement.scrollTop = scrollableElement.scrollHeight;
    }
  }

}
