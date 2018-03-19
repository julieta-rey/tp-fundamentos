/*
hace instancias y deja al listener escuchando por  los eventos que los sensores podrian disparar
while true? tiene que trabajar constantemente. no deberia ser necesario levantar un server para el ejemplo


core -> logica que aprende y predice
ctrl -> funciones que se disparan en los eventos

fridge + item -> elementos que modelan el universo.


*/
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



// app.emit('event'); triggers the event
// app.emit('purchase', [{type:'cheese', amount:10}, 'beer', 'apples', 'meat']);