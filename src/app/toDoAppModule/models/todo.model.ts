export class Todo {

    public id: number;
    public completado: boolean;

    constructor(public texto: string) {

        this.texto = texto;
        this.id = (new Date().getTime() + (Math.round(Math.random() * 1000)));
        this.completado = false;

    }

}