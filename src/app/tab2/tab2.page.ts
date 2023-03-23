import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valendo = 1;
  contarpontos1 = 0;
  contarpontos2 = 0;
  registrar1 = 0;
  registrar2 = 0;

  constructor(private alertController: AlertController) {}
  MudarValendo(numero: number ){
  this.valendo = numero;
}
  Contador1(){
    this.contarpontos1 += this.valendo
    if(this.contarpontos1 > 12 ){
      this.contarpontos1 = 0;
      this.registrar1 += 1;
    }
  }
  Contador2(){
    this.contarpontos2 += this.valendo
    if(this.contarpontos2 > 12 ){
      this.contarpontos2 = 0;
      this.registrar2 += 1;
    }
  }
  Diminuir1(){
    this.contarpontos1 -= this.valendo

    if(this.contarpontos1 < 0){
      this.contarpontos1 = 0;
     }

  }
  Diminuir2(){
    this.contarpontos2 -= this.valendo
    if(this.contarpontos2 < 0){
      this.contarpontos2 = 0;
     }
  }

  Limpar(){
    this.valendo = 1;
    this.contarpontos1 = 0;
    this.contarpontos2 = 0;
    this.registrar1 = 0;
    this.registrar2 = 0;

  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Jogo Reiniciado',
      cssClass: 'custom-alert',
    });

    await alert.present();
  }
}
