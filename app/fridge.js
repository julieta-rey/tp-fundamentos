module.exports = class Fridge {
    constructor() {
        this.contents = [];
    }

    hasItem(type) {
        return this.contents.find((item) => {
            item.type === type;
        }).length;
    }

    addItem(type, amount) {
        if (this.hasItem(type)) {
            this.contents = this.contents.map((item) => {
                if (item.type === type) {
                    item.add(amount);
                }
                return item;
            });
        } else {
            this.contents.push(new Item(type, amount));
        }
    }

    consumeItem(itemConsumed, amountConsumed) {
        let remains;
        this.contents = this.contents.map((item) => {
            if(itemConsumed.type = item.type) {
                item.consume(amountConsumed);
                remains = item.amount;
            }
            return item;
        });
        return remains;
    }

    eliminateItem(type) {
        let remains;
        this.contents = this.contents.filter((item)=>{
            if(item.type = type) {
                remains = item.amount;
            }
            item.type != type;
        });
        return remains;
    }

    purge() {
        let consumed = [];
        this.contents = this.contents.filter((item) => {
            if (item.amount === 0){
                consumed.push(item.type);
            }
            return item.amount > 0;
        });
        return consumed;
    }

}