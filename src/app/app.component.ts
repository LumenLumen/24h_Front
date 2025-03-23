import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgentDialogLineComponent } from './agent-dialog-line/agent-dialog-line.component';
import { ZoneInputComponent } from "./zone-input/zone-input.component";
import { CommonModule } from '@angular/common';
import { BulleComponent } from "./bulle/bulle.component";
import { AgentAPIService } from './service/agent-api.service';
import { Reponse } from './models/reponse';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgentDialogLineComponent, ZoneInputComponent, CommonModule, BulleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewChecked{
  title = 'Hotel';

  listeMessage: Array<[string, number, string]> = [];

constructor(private agentService: AgentAPIService) {}

  @ViewChild('scrollable')
  private scrollContainer!: ElementRef;
  
  ngOnInit(): void {
      this.listeMessage.push(["Bonjour, je suis Epp, votre agent réceptionniste. Que puis-je faire pour vous ?", 0, ""]);
  }

  myOuputData(event: any){
    console.log(event);
    let agentReponse: Reponse
    this.listeMessage.push([event.texte,1, ""]);
    this.agentService.postMessage({message: event.texte}).subscribe(
      response => {
        console.log('Success:', response);
        agentReponse = response as Reponse;
        this.listeMessage.push([agentReponse.reponse, 0, agentReponse.emotion]);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }


  private scrollToBottom(): void {
    const container = this.scrollContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }

}
