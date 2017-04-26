export class Reloj{
    private horas:number;
    private minutos:number;
    private segundos:number;

    constructor(horas:number, minutos:number, segundos:number){
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    getHoras():number{
        return this.horas;
    }

    setHoras(horas:number){
        this.horas = horas;
    }

    getMinutos():number{
        return this.minutos;
    }

    setMinutos(minutos:number){
        this.minutos = minutos;
    }

    getSegundos():number{
        return this.segundos;
    }
    
    setSegundos(segundos:number){
        this.segundos = segundos;
    }

}