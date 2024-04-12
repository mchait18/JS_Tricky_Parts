function createAccount(pin, amount = 0) {
    let acctPin = pin
    let balance = amount
    return {
        checkBalance(pin) {
            if (pin !== acctPin) return "Invalid PIN."
            return `$${balance}`
        },
        deposit(pin, deposit) {
            if (pin !== acctPin) return "Invalid PIN."
            balance += deposit
            return `Succesfully deposited $${deposit}. Current balance: $${balance}.`
        },
        withdraw(pin, withdrawal) {
            if (pin !== acctPin) return "Invalid PIN."
            if (withdrawal > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled."
            balance -= withdrawal
            return `Succesfully withdrew $${withdrawal}. Current balance: $${balance}.`
        },
        changePin(oldPin, newPin) {
            if (oldPin !== acctPin) return "Invalid PIN."
            acctPin = newPin
            return "PIN successfully changed!"
        }
    }
}

module.exports = { createAccount };
