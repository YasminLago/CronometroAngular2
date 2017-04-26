import { Component, Directive } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Cronómetro';

  public horas:number = 0;
  public minutos:number = 0;
  public segundos:number = 0;

  public lapsos: Array<any> = [];
  public contador:any;

  constructor(){}

  start(){
    if(this.contador == undefined){
      this.contador = setInterval(()=>{
        this.segundos += 1;
        if(this.segundos == 60){
          this.segundos = 0;
          this.minutos +=1;
          if(this.minutos == 60){
            this.minutos = 0;
            this.horas += 1;
            if(this.horas == 60){
              this.horas = 0;
            }
          }
        }
      },1000);
    }
  }

  lapso(){
    let obj:any = {};
    obj.horas = this.horas;
    obj.minutos = this.minutos;
    obj.segundos = this.segundos;

    this.lapsos.push(obj);

  }

  stop(){
    clearInterval(this.contador);
    this.horas = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.contador = null;
    //$("p").remove("#lapsosTiempo");
  }

}
