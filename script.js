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
        alert('Please give a positive value greater than 0');
        clearInputFields();
        return;
    }
    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    document.getElementById('total-expense').innerText = totalExpenses;
    const balance = incomeTotal - totalExpenses;
    document.getElementById('balance').innerText = balance;

    //call clean input fields function
    clearInputFields();

})
document.getElementById('save-btn').addEventListener('click', function () {
    const saveField = document.getElementById('save-parcent');
    const saveValue = parseInt(saveField.value);
    const balance = document.getElementById('balance');
    const balanceTotal = parseFloat(balance.innerText);
    const savingAmount = (balanceTotal * saveValue) / 100;
    document.getElementById('saving-amount').innerText = savingAmount;
    const remainingBalance = balanceTotal - savingAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;

    // clear input field
    saveField.value = '';
})
// clean input fields function
function clearInputFields() {
    const incomeField = document.getElementById('income-total');
    const foodField = document.getElementById('food-expense');
    const rentField = document.getElementById('rent-expense');
    const clothesField = document.getElementById('clothes-expense');
    incomeField.value = '';
    foodField.value = '';
    rentField.value = '';
    clothesField.value = '';
}