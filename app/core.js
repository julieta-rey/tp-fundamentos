module.exports =  class Core {
    constructor() {
        this.history = {};
        this.prediction =  [];
    }

    getPrediction(consumed) {
        if (!this.prediction.length) {
            throw 'No se realizó ninguna compra. No existen registros.'
        }
        this.predict(consumed);
        return this.prediction;
    }

    predict(consumedItems) {
        let amount;
        this.history.map((historyItem) => {
            if(consumedItems.includes(historyItem.type)) { 
                amount = this.predictAmountWithWeight(historyItem);
            } else {
                amount = this.predictAmount(historyItem.amounts);
            }
            this.prediction.push({
                type : historyItem.type,
                amount : result
            });
        });
    }

    predictAmount(history) {
        let sum = 0;
        history.amounts.map((amount) => {
            sum = sum + amount;
        });
        return sum / history.amounts.length;
    }

    predictAmountWithWeight(history) {
        let sum = 0;
        for (let i = 0; i < history.amounts.length -1 ; i++) {
            sum = sum + history.amounts[i];
        }
        return 0.3 * (sum / history.amounts.length) + history.amounts[history.amounts.length - 1] * 0.7;
    }

    checkIfPredicted(item) {
        return this.prediction.find((predictedItem) => {
            return item.type === predictedItem.type;
        })
    }

    improvePrediction(item) {
        let average = this.addAmountToHistory(item);
        this.prediction = this.prediction.map((predictedItem) => {
            if (predictedItem.type === item.type) {
                predictedItem.amount = average;
            }
            return predictedItem;
        });
    }

    correctPrediction(item) {
        this.addToHistory(item);
        this.prediction.push(item);
    }

    addToHistory(item) {
        this.history.push(item);
    }

    addAmountToHistory(item) {
        let average = 0;
        let partial;
        this.history.map((historyItem) => {
            if(historyItem.type === item.type) {
                historyItem.amounts.push(item.amount);
                partial = historyItem.amounts;
            }
        })
        partial.map((amount) => {
            average = average + amount;
        })
        return average / partial.length;
    }   

    correctOnCleaning(removedItem, remains) {
        let item = {
            type : removedItem.type,
            amount : remains * -1
        };
        if(this.checkIfPredicted(removedItem)) {
            this.addAmountToHistory(item)
        }
    }

}