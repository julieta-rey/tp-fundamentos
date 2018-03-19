const Fridge = require('./fridge');
const Core = require('./core');

module.exports = class Ctrl {
    constructor() {
        this.fridge  = new Fridge();
        this.core = new Core();
    }

    storePurchase() {
        //guarda una lista de items comprados.
        //activa logica del core
        //core tiene la logica del agente que aprende.
    }

    requestPurchaseList() {
        //solicita al core una lista de items  que espera comprar
    }

    consume() {
        
    }

    configureMinimumStock() {

    }

    alertLowStock() {

    }


    // alertBeforeExpirationDate() {

    // }

    // alertOnExpirationDate() {

    // }

    activateCleaningProcess() {
        //core va a tomar  todos los elementos eliminados 
        //se eliminan de la heladera, y se corrije prediccion
    }


}