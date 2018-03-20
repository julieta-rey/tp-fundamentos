module.exports = class Item {
    constructor(type, amount, expiry) {
        this.type = type;
        this.amount = amount;
        this.expiry = expiry;
    }

    consume(amount) {
        this.amount = this.amount - amount;
    }

    add(amount) {
        this.amount = this.amount + amount;
    }

    isExpired() {
        let today = new Date();
        return today > this.expiry;
    }
}