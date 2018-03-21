module.exports = class Item {
    constructor(type, amount, expiry) {
        this.type = type;
        this.amount = amount;
    }

    consume(amount) {
        this.amount = this.amount - amount;
    }

    add(amount) {
        this.amount = this.amount + amount;
    }
}