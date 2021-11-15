import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjemplosService {

  ejemploActual: Subject<string> = new Subject<string>()

  constructor() { }

  setEjemplo(ejemplo: string){
    this.ejemploActual.next(ejemplo);
  }

}
