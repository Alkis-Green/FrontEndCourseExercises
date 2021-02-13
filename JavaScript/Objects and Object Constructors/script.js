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


function Account(fullName, iban, balance) {
    this.fullName = fullName;
    this.iban = iban;
    this.balance = balance;
}

const kostasMinaidis = new Account("Kostas Minaidis", "GR20030001234", 0);

Account.prototype.getBalance = function () {
    console.log(this.balance);
    return this.balance;
};

Account.prototype.deposit = function (depositAmount) {
    this.balance += depositAmount;
    return this.balance;
};

Account.prototype.withdraw = function (withdrawalAmount) {

    if (this.balance - withdrawalAmount < 0) {
        console.log("Insufficient balance");
        return "Insufficient balance"
    }
    if (withdrawalAmount < 0 || typeof withdrawalAmount !== "number") {
        console.log("Invalid amount");
        return "Invalid amount"
    }
    this.balance -= withdrawalAmount;
    return this.balance;
}

kostasMinaidis.getBalance();
kostasMinaidis.deposit(100);
kostasMinaidis.getBalance();
kostasMinaidis.withdraw(50);
kostasMinaidis.getBalance();

kostasMinaidis.withdraw(500);
kostasMinaidis.withdraw("50");
kostasMinaidis.withdraw(-150);