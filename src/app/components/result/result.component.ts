import { Component, OnInit } from '@angular/core';
import { EjemplosService } from 'src/app/servicios/ejemplos.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public ejemplos : any[] = [
    { 
      "S":"XA",
      "B":"b|S",
      "X":"b",
      "A":"a"
    },
    { 
      "S": "X",
      "M": "a|S",
      "X": "b",
      "A": "a",
      "E":"X|b"
    } 
  ];

  constructor(
    public service: EjemplosService
  ) { }

  ngOnInit() {

  }

  setEjemplo(ejemplo: string){
    this.service.setEjemplo(ejemplo);
  }

}
