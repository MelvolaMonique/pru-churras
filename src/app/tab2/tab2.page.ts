import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valendo = 1;
  contarpontos1 = 0;
  contarpontos2 = 0;


  constructor() {}


  MudarValendo(numero: number ){
  this.valendo = numero;
}
  Contador1(){
    this.contarpontos1 += this.valendo
  }

  Contador2(){
    this.contarpontos2 += this.valendo
  }

  Diminuir1(){
    this.contarpontos1 -= this.valendo
    

  }
  Diminuir2(){
    this.contarpontos2 -= this.valendo

  }

}
