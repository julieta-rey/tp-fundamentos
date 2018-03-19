module.exports = class Fridge {
    constructor() {
        this.contents = [];
    }

    addItem(type, amount) {
        this.contents.push(new Item(type, amount));
    }

    eliminateItem(type) {
        this.contents = this.contents.filter((item)=>{
            item.type != type;
        })
    }

}