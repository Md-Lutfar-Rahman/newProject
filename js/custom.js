// console.log(' custom js file')
/*
step 1 : get the deposit btn click 



*/
document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('btn deposit is clicked');
  const getDepositAmmount =  document.getElementById('deposit-field');
  const getDepositAmmountString = getDepositAmmount.value;

  const depositAmount = parseFloat(getDepositAmmountString);
  

//    get previous deposit ammount
    const getPreviousDepositAmount = document.getElementById('deposit-total');
    const getPreviousDepositAmountString = getPreviousDepositAmount.innerText;
    const newDepositAmount = parseFloat(getPreviousDepositAmountString);
    const currentDepositAmount = depositAmount + newDepositAmount;
    getPreviousDepositAmount.innerText = currentDepositAmount;
})
//  trying to do it again with function