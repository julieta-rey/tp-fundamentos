module.exports = class Item {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
        /*
        Falta agregar fecha de expiracion. podria tomarse de una tabla
        como informacion inicial -> correccion a partir de cleaning cycle.
        */
    }

    consume(amount) {
        this.amount = this.amount - amount;
    }

    add(amount) {
        this.amount = this.amount + amount;
    }

    purge() {
        //elimina elementos de cantidad 0
    }
}