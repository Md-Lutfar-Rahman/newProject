// Step 1 : Add Event Listner with the submit btn clicked
document.getElementById('btn-submit').addEventListener('click',function(){
console.log('submit btn clicked');
// step 2 :get the email from the filed;
const emailfield = document.getElementById('user-email');
const email = emailfield.value;
// step 3 : get password ;
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
 if( email === 'lutfarbmi@gmail.com' && password === '12345678'){
        window.location.href = 'bank.html';
 }
 else{
        alert('Toi Password Vuila geso , tore ami reject korlam')
 }
}); 