document.getElementById('btn-submit').addEventListener('click',function(){

   const emailField =document.getElementById('user-email');
   const email = emailField.value;
//    console.log(email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    if(email === 'sawon@erbap.com' && password === '123456789'){
        window.location.href= 'bank.html';
    }
    else{
       alert('toke ami tojjo sontan korlam ,tui kina password vule gases');
    }
})