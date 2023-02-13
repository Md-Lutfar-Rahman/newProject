//  trying to do it again with function
function getInputFieldValueById(elementId) {
    const getDepositInput = document.getElementById(elementId);
    const getDepositInputString = getDepositInput.value;
    const depositInputValue = parseFloat(getDepositInputString);
    return depositInputValue;
}
function getTextFieldValueById(elementId) {
    const getDepositText = document.getElementById(elementId);
    const getDepositTextValueString = getDepositText.innerText;
    const depositTextValue = parseFloat(getDepositTextValueString);
    return depositTextValue;
}
function setTextFieldValue(elementId,newValue){
    const TextElement = document.getElementById(elementId);
    TextElement.innerText = newValue;
}