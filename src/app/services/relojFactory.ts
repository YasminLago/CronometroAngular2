import { Injectable } from '@angular/core';
import { Reloj } from './reloj';


@Injectable()
export class RelojFactory{
    
    constructor(){}

    nuevoreloj(horas:number, minutos:number, segundos:number): Reloj{
        return new Reloj(horas, minutos, segundos);
    }
}