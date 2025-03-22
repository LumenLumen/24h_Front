import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-epp',
  standalone: true,
  imports: [],
  templateUrl: './epp.component.html',
  styleUrl: './epp.component.css'
})
export class EppComponent implements OnInit {

  @Input() emotion !: String ;
  file = 'base.png' ;

  ngOnInit(): void {
      if (this.emotion == "CRY"){
        this.file = 'cry.png' ;
      }
      else if (this.emotion == "CUISINE"){
        this.file = 'cuisine.png' ;
      }
      else if (this.emotion == "DEAD"){
        this.file = 'dead.png' ;
      }
      else if (this.emotion == "SPA"){
        this.file = 'spa.png' ;
      }
      else if (this.emotion == "TOURISME"){
        this.file = 'tourisme.png' ; 
      }
      else {
        this.file = 'base.png' ;
      }

      this.file = "assets/" + this.file ;

  }

}
