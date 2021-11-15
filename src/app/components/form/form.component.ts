import { Component, OnInit } from '@angular/core';
import { EjemplosService } from 'src/app/servicios/ejemplos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public value: string = "";
  public datos:any = {};
  constructor(
    private service: EjemplosService
  ) { 
    this.service.ejemploActual.subscribe((ejemplo: string ) => {
      this.value = JSON.stringify(ejemplo);
    });
  }

  ngOnInit() {
  }

  transformar(){
    try{
      this.datos['gramatica'] = JSON.parse(this.value);
      this.renombrarVariables();
      this.gramaticaIntermedia();
      this.replaceNoTerminales();

    }catch(e){
      alert(JSON.stringify(e));
    }
  }

  keys(object){
    if(!object) return;
    return Object.keys(object);
  }

  renombrarVariables(){
    const tmpArr: string[] = this.value.split("");
    // Guardado de simbolos no terminales
    const noTerminales: string[] = [];
    const nuevasVariables: any = {};
    let cont: number = 1;
    tmpArr.forEach((t) => {
      if( /^[A-Z]*$/.test(t) && !noTerminales.find(l => l == t)){
        noTerminales.push(t);
        nuevasVariables[t] = `Ä${cont}`;
        cont++;
      } 
    });

    this.datos['nuevasVariables'] = nuevasVariables;
  }

  gramaticaIntermedia(){
    const nuevasVariables = this.datos['nuevasVariables'];
    let gramaticaIntermedia = JSON.stringify(this.datos['gramatica']);
    Object.keys(nuevasVariables).forEach( k => {
      gramaticaIntermedia = gramaticaIntermedia['replaceAll'](k, `${nuevasVariables[k]}`);
    });
    this.datos['gramaticaIntermedia'] = JSON.parse(gramaticaIntermedia);
  }

  replaceNoTerminales(){
    let gr: any = this.datos['gramaticaIntermedia'];
    const tmp:any = {};
    Object.keys(gr).forEach((key: string) => {
      const value = gr[key].split("|");

      value.forEach( (item: string ) => {
        const element = item.trim();
        const[a,b] = element; // primer y segundo elemento
        if(!/^[a-z]*$/.test(a)){ // se valida si empieza por simbolo terminal
          const noTerminal = Number.isInteger(+b) ? `${a}${b}` : a;
          const restante = element.slice(noTerminal.length);
          tmp[key] = tmp[key] ? `${tmp[key]}|${tmp[noTerminal] || gr[noTerminal]}` : `${gr[noTerminal]}${restante}`;
        }else{
          tmp[key] = tmp[key] ? `${tmp[key]}|${a}` : a;
        }
      });      
    })

    this.datos['gramaticaFinal'] = tmp;
  }



}
