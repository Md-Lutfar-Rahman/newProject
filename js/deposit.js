document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositValue = getInputFieldValueById('deposit-field');
    const newTextValue = getTextFieldValueById('deposit-total');
    const TotalDepositValue = newDepositValue + newTextValue;
    setTextFieldValue('deposit-total',TotalDepositValue);
})