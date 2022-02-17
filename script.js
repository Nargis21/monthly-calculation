// get the value of income,rent,food,clothes and calculate it

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeField = document.getElementById('income-total');
    const incomeTotal = parseFloat(incomeField.value);
    const foodField = document.getElementById('food-expense');
    const foodExpense = parseFloat(foodField.value);
    const rentField = document.getElementById('rent-expense');
    const rentExpense = parseFloat(rentField.value);
    const clothesField = document.getElementById('clothes-expense');
    const clothesExpense = parseFloat(clothesField.value);

    // Error handling for negative value
    if (incomeTotal < 0 || rentExpense < 0 || foodExpense < 0 || clothesExpense < 0) {
        const errorMessage = document.getElementById('input-error');
        errorMessage.classList.remove('d-none');
        clearInputFields();
        return
    }
    else {
        const errorMessage = document.getElementById('input-error');
        errorMessage.classList.add('d-none');
    }
    const totalExpenses = foodExpense + rentExpense + clothesExpense;

    // Error handling for over expense
    if (totalExpenses > incomeTotal) {
        const errorMessage = document.getElementById('expense-error');
        errorMessage.classList.remove('d-none');
        clearInputFields();
        return
    }
    else {
        const errorMessage = document.getElementById('expense-error');
        errorMessage.classList.add('d-none');
    }


    document.getElementById('total-expense').innerText = totalExpenses;
    const balance = incomeTotal - totalExpenses;
    document.getElementById('balance').innerText = balance;

})

// Calculate save amount with parcentage 

document.getElementById('save-btn').addEventListener('click', function () {
    const saveField = document.getElementById('save-parcent');
    const saveValue = parseFloat(saveField.value);
    const balance = document.getElementById('balance');
    const balanceTotal = parseFloat(balance.innerText);
    const incomeField = document.getElementById('income-total');
    const incomeTotal = parseFloat(incomeField.value);
    const savingAmount = (incomeTotal * saveValue) / 100;

    // error handing for lowest balance
    if (savingAmount > balanceTotal) {
        const errorMessage = document.getElementById('amount-error');
        errorMessage.classList.remove('d-none');
        clearInputFields();
        return
    }
    else {
        const errorMessage = document.getElementById('amount-error');
        errorMessage.classList.add('d-none');
    }

    document.getElementById('saving-amount').innerText = savingAmount;
    const remainingBalance = balanceTotal - savingAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;

    //call clean input fields function
    clearInputFields();
})
//function of Get a element by id
function getValue(idName) {
    const element = document.getElementById(idName);
    const elementValue = parseFloat(element.value);
    return elementValue;
}
// clean input fields function
function clearInputFields() {
    const incomeField = document.getElementById('income-total');
    const foodField = document.getElementById('food-expense');
    const rentField = document.getElementById('rent-expense');
    const clothesField = document.getElementById('clothes-expense');
    const saveField = document.getElementById('save-parcent');
    incomeField.value = '';
    foodField.value = '';
    rentField.value = '';
    clothesField.value = '';
    saveField.value = '';

}