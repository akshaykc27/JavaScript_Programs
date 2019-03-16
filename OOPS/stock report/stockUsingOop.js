var Stock = function(stockName,NoOfShares,sharePrice)
{
    this._stockName=stockName;
    this._NoOfShares=NoOfShares;
    this._sharePrice=sharePrice;
}

Stock.prototype = {
    set stockName(stockName) { this._stockName = stockName;},
    get stockName() { return this._stockName},
    set NoOfShares(NoOfShares){this._NoOfShares = NoOfShares;},
    get NoOfShares() {return this._NoOfShares;},
    set sharePrice(sharePrice) {this._sharePrice = sharePrice;},
    get sharePrice() {return this._sharePrice;},
    get total() { return this._NoOfShares * this.sharePrice}
};

var stk = new Stock("bmw",25,56998);
var stk1 = new Stock("ducati",56,35598);
var stk2 = new Stock("ferrari",36,89636);


console.log("stock name : "+ stk.stockName + ", number of shares : "+ stk.NoOfShares + " share price : "+ stk.sharePrice+" total share is : "+stk.total);
console.log("stock name : "+ stk1.stockName + ", number of shares : "+ stk1.NoOfShares + " share price : "+ stk1.sharePrice+" total share is : "+stk1.total);
console.log("stock name : "+ stk2.stockName + ", number of shares : "+ stk2.NoOfShares + " share price : "+ stk2.sharePrice+" total share is : "+stk2.total);