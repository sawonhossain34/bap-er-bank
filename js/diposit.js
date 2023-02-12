document.getElementById('btn-diposit').addEventListener('click',function(){
    
    const dipositField = document.getElementById('deposit-field');
    const newDipositAmmountString = dipositField.value;
    const newDipositAmmount = parseFloat(newDipositAmmountString);
    
    
    
    
////step diposit total 
    const dipositTotalElement = document.getElementById('diposit-total');
    const priviousDipositTotalString  = dipositTotalElement.innerText;
    const priviousDipositTotal = parseFloat(priviousDipositTotalString);
    
    const currentDipisitTotal = newDipositAmmount + priviousDipositTotal;
    
    dipositTotalElement.innerText = currentDipisitTotal;
//////step balance total///
const balanceTotalElements = document.getElementById('diposit-balance');
const priviousBalanceTotalString =balanceTotalElements.innerText;
const priviousBalanceTotal = parseFloat(priviousBalanceTotalString);

const currentBalanceTotal = priviousBalanceTotal + newDipositAmmount;

balanceTotalElements.innerText = currentBalanceTotal;



    dipositField.value = '';
})