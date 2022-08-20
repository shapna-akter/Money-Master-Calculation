document.getElementById('calculate-button').addEventListener('click', function(){
    const totalIncome = getInputFieldValueById('total-income');
    const foodExpenses = getInputFieldValueById('food-expenses');
    const rentExpenses = getInputFieldValueById('rent-expenses');
    const clothExpenses = getInputFieldValueById('cloth-expenses');

    if( (isNaN(totalIncome) || totalIncome < 0) || (isNaN(foodExpenses) || foodExpenses < 0) || (isNaN(rentExpenses) || rentExpenses < 0) || (isNaN(clothExpenses) || clothExpenses < 0) ){
        alert("Please check your all input field");
    }

    const totalCost = foodExpenses + rentExpenses + clothExpenses;
    seTextElementValueById('total-expenses', totalCost);

    if(totalCost > totalIncome){
        alert ("You can't spend money more than your income");
        return;
    }

    const newbalance = totalIncome - totalCost;
    seTextElementValueById('balance', newbalance)
})
document.getElementById('save-button').addEventListener('click', function(){
    const totalIncome = getInputFieldValueById('total-income');
    const saveInput = getInputFieldValueById('save-input');
    const newbalance = getTextElementValueById('balance');

    if(saveInput > 100){
        alert("Save 100% over is not possible");
        return
    }
    const newSaveAmount = totalIncome * (saveInput / 100);

    if (newbalance < newSaveAmount){
        alert("You can not save money more than your income");
        return;
    }
    seTextElementValueById('save-amount', newSaveAmount);

    const currentBalance = newbalance - newSaveAmount;
    seTextElementValueById('remaining-balance', currentBalance)
})