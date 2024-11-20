// Deposit button event handler
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function () {
    const depositAmount = getInputNumber("totalAmount");

    if (!isNaN(depositAmount) && depositAmount > 0) {
        updateBalance("totalMoney", depositAmount);
        addTransaction("Deposit", depositAmount);
        clearInput("totalAmount");
    } else {
        alert("Please enter a valid deposit amount.");
    }
});

// Withdraw button event handler
const withdrawBtn = document.getElementById('withdraw');
withdrawBtn.addEventListener('click', function () {
    const withdrawAmount = getInputNumber("totalAmount");
    const currentBalance = getCurrentBalance("totalMoney");

    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= currentBalance) {
            updateBalance("totalMoney", -withdrawAmount);
            addTransaction("Withdraw", withdrawAmount);
            clearInput("totalAmount");
        } else {
            alert("Insufficient balance.");
        }
    } else {
        alert("Please enter a valid withdrawal amount.");
    }
});

// Function to parse string input to a number
function getInputNumber(inputId) {
    const input = document.getElementById(inputId).value;
    return parseFloat(input);
}

// Function to get the current balance
function getCurrentBalance(balanceId) {
    const balanceText = document.getElementById(balanceId).innerText.replace('$', '');
    return parseFloat(balanceText);
}

// Function to update balance
function updateBalance(balanceId, amount) {
    const currentBalance = getCurrentBalance(balanceId);
    const newBalance = currentBalance + amount;
    document.getElementById(balanceId).innerText = `$${newBalance.toFixed(2)}`;
}

// Function to add transaction to the result div
function addTransaction(type, amount) {
    const resultDiv = document.getElementById('result-output');
    const transactionRecord = document.createElement('p');
    transactionRecord.innerText = `${type}: $${amount.toFixed(2)}`;
    resultDiv.appendChild(transactionRecord);
}

// Function to clear input field
function clearInput(inputId) {
    document.getElementById(inputId).value = "";
}

// Function to add transaction to the result div with color coding
function addTransaction(type, amount) {
    const resultDiv = document.getElementById('result-output');
    const transactionRecord = document.createElement('p');

    // Set text and color based on transaction type
    transactionRecord.innerText = `${type}: $${amount.toFixed(2)}`;
    transactionRecord.style.color = type === "Deposit" ? "green" : "red";

    resultDiv.appendChild(transactionRecord);
}
