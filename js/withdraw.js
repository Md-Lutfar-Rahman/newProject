document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newDepositValue = getInputFieldValueById('withdraw-field');
    const newTextValue = getTextFieldValueById('withdraw-total');
    const TotalDepositValue = newDepositValue + newTextValue;
    setTextFieldValue('withdraw-total',TotalDepositValue);
    // set the Balance Amount 
    const previousBalanceAmount = document.getElementById('balance-total');
    const previousBalanceAmountString =previousBalanceAmount.innerText;
    const previousBalanceValue = parseFloat(previousBalanceAmountString);
    // alert (previousBalanceValue);
    const newBalanceAmoutTotal = previousBalanceValue - newDepositValue;
    setTextFieldValue('balance-total',newBalanceAmoutTotal);
    // previousBalanceAmount.innerText = newBalanceAmoutTotal;
    // alert(newBalanceAmoutTotal);

})
