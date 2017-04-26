import { Component, OnInit } from '@angular/core';
import { Reloj } from '../../services/reloj';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  
  public horas:number = 0;
  public minutos:number = 0;
  public segundos:number = 0;

  public lapsos: Array<Reloj> = [];
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
    let obj =  new Reloj(this.horas, this.minutos, this.segundos);
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

  ngOnInit(){}
}

