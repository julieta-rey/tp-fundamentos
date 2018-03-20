const Fridge = require('./fridge');
const Core = require('./core');

const minStock = 4;

module.exports = class Ctrl {
    constructor() {
        this.fridge  = new Fridge();
        this.core = new Core();
    }

    storePurchase(items) {
        items.map((item)=> {
            this.fridge.addItem(item.type, item.amount);
            if (this.core.checkIfPredicted(item)) {
                this.core.improvePrediction(item);
            } else {
                this.core.correctPrediction(item);
            }
        });
    }

    requestPurchaseList() {
        let consumed = this.fridge.purge();
        this.core.correctPrediction(consumed);
        return this.core.getPrediction();
    }

    consume(item, amountConsumed) {
        let remains = this.fridge.consumeItem(item, amountConsumed);
        this.core.updateUsage(item, amountConsumed);
        if (remains < minStock) {
            this.alertLowStock(item);
        }
    }

    alertLowStock(item) {
        console.warn(`${item.type} se encuentra por debajo del stock minimo.`)
    }


    // alertBeforeExpirationDate() {

    // }

    // alertOnExpirationDate() {

    // }

    activateCleaningProcess(removedItems) {
        removedItems.map((item) => {
            let remains = this.fridge.eliminateItem(item.type);
            this.core.correctOnCleaning(item);
        })
    }


}