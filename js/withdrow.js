
//step 1
document.getElementById('btn-withdrow').addEventListener('click',function(){
    // step 2
   const withdrowField = document.getElementById('withdrow-field');
   const newWithdrowAmmountString =withdrowField.value;
   const newWithdrowAmmount = parseFloat(newWithdrowAmmountString);
   // step 3
   const withdrowTotalElement =document.getElementById('withdrow-total');
   const privouseWithdrowTotalString = withdrowTotalElement.innerText;
   const privouseWithdrowTotal =parseFloat(privouseWithdrowTotalString);
   //step 4
   const currentWithdrowTotal = privouseWithdrowTotal + newWithdrowAmmount;
   withdrowTotalElement.innerText =currentWithdrowTotal;
//step 5
const balanceTotalElements = document.getElementById('diposit-balance');
const privouseBalanceTotalString = balanceTotalElements.innerText;
const priviousBalanceTotal =parseFloat(privouseBalanceTotalString);

//step 6
const newBalanceTotal = priviousBalanceTotal - newWithdrowAmmount;
balanceTotalElements.innerText = newBalanceTotal;



// step 7 clear input field
   withdrowField.value = '';
})