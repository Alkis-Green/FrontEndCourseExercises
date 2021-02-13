///////////////     EXERCISE 1    /////////////



function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read,
        this.info = function () {
            return `"${this.title} by ${this.author}, ${this.pages} pages, ${this.read}."`
        }
};

const theHobbit = new Book('The Hobbit', 'J.R.R', 295, 'Not read yet');
console.log(theHobbit.info());

const theAlchemist = new Book('The Alchemist', 'Paulo Coelho', 256, 'Completed');
console.log(theAlchemist.info());


//////////////////  EXERCISE 2    /////////////


function Account(name, iban, balance) {
    this.name = name,
        this.iban = iban,
        this.balance = balance
};


Account.prototype.deposit = function (amount) {
    if (this._isPositive(amount)) {
        this.balance += amount;
        console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
        return true;
    }
    return false;
}

Account.prototype.withdraw = function (amount) {
    if (this._isAllowed(amount)) {
        this.balance -= amount;
        console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
        return true;
    }
    return false;
}

Account.prototype._isPositive = function (amount) {
    const isPositive = amount > 0;
    if (!isPositive) {
        console.error('Amount must be positive!');
        return false;
    }
    return true;
}

Account.prototype._isAllowed = function (amount) {
    if (!this._isPositive(amount)) return false;

    const isAllowed = this.balance - amount >= 0;
    if (!isAllowed) {
        console.error('You have insufficient funds!');
        return false;
    }
    return true;
}



const alkis = new Account('Alkis Green', 20090003858, 900);

alkis.deposit(400);
alkis.withdraw(800);