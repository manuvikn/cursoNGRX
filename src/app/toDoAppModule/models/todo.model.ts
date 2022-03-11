export class Todo {

    public id: number;
    public completado: boolean;

    constructor(public texto: string) {

        this.texto = texto;
        this.id = new Date().getTime();
        this.completado = false;

    }

}