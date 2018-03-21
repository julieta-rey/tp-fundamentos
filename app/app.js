const eventEmitter = require('events');
const Controller = require('./ctrl');

class App extends EventEmitter {}

const app = new App();

const ctrl = new Controller();


app.on('purchase', (boughtItems) => {
    ctrl.storePurchase(boughtItems);
});

app.on('cleaning', (removedItems) => {
    ctrl.activateCleaningProcess(removedItems);
});

app.on('consume',(item, amount) => {
    ctrl.consume(item, amount);
})

app.on('predict', () => {
    ctrl.requestPurchaseList();
});