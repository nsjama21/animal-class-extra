class BankAccount {
    constructor(ownerNameParam, balanceParam, acctNumParam) {
        this.ownerName = ownerNameParam
        this.balance = balanceParam
        this.acctNum = acctNumParam
    }

    deposit(amountDeposited) {
        console.log(`You have made a deposit of ${amountDeposited}.`)
    }

    withdraw(amountWithdrawn) {
        console.log(`You have made a withdrawal of ${amountWithdrawn}.`)
    }

}

class CheckingAccount extends BankAccount {
    constructor(ownerNameParam, balanceParam, acctNumParam) {
        super(ownerNameParam, balanceParam, acctNumParam)

        this.overdraftEnabled = true || false
    }

    withdraw() {
        console.log("Overdraft feature enabled. We have prevented you from overdrafting your account.")
    }
}

class SavingsAccount extends BankAccount {
    constructor(ownerNameParam, balanceParam, acctNumParam) {
        super(ownerNameParam, balanceParam, acctNumParam)

    }

    withdraw() {
        console.log("You have insufficient funds. You cannot make any withdrawals at this time.")
    }
}

const bobbieCheckingAccount = new CheckingAccount("Bobbie", "600", "622222555555")

console.log(bobbieCheckingAccount)
bobbieCheckingAccount.deposit("2000")
bobbieCheckingAccount.withdraw()

const robertaSavingsAccount = new SavingsAccount("Roberta", "35000", "21212125554")

console.log(robertaSavingsAccount)
robertaSavingsAccount.withdraw()