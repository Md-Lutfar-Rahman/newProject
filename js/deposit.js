document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositValue = getInputFieldValueById('deposit-field');
    const newTextValue = getTextFieldValueById('deposit-total');
    const TotalDepositValue = newDepositValue + newTextValue;
    setTextFieldValue('deposit-total',TotalDepositValue);
    // set the Balance Amount 
    const previousBalanceAmount = document.getElementById('balance-total');
    const previousBalanceAmountString =previousBalanceAmount.innerText;
    const previousBalanceValue = parseFloat(previousBalanceAmountString);
    // alert (previousBalanceValue);
    const newBalanceAmoutTotal = previousBalanceValue + newDepositValue;
    setTextFieldValue('balance-total',newBalanceAmoutTotal);
    // previousBalanceAmount.innerText = newBalanceAmoutTotal;
    // alert(newBalanceAmoutTotal);

})
