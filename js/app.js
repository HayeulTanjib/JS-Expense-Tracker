//Declaring inputs, buttons and error msg
let incomeInput = document.getElementById('income_input');
let foodInput = document.getElementById('food_input');
let rentInput = document.getElementById('rent_input');
let clothInput = document.getElementById('cloth_input');
let errMsg = document.getElementById('error_msg');
let calcBtn = document.getElementById('calc_btn');
let totalExpend = document.getElementById('total_expense');
let balanceMoney = document.getElementById('balance');

let saveInput = document.getElementById('save_input');
let saveBtn = document.getElementById('save_btn');
let savingAmount = document.getElementById('saving_amount');
let remainingBalance = document.getElementById('remaining_balance');
let errMsg2 = document.getElementById('error_msg2');

  

//==================================Expense and Balance Section=====================================
function moneyCalculation() {
   
    let foodVal = Number(foodInput.value);
    let rentVal = Number(rentInput.value);
    let clothVal = Number(clothInput.value);
    let incomeVal = Number(incomeInput.value);

    //total expense and balance calculation
    let totalExpense = (foodVal + rentVal + clothVal);
    let balance = (incomeVal - totalExpense);


    //Error Handling
    if(totalExpense > incomeVal){
        errMsg.innerText = "Expense money can't excess Income!";
    }
     else if ((isNaN(totalExpense) | isNaN(balance) | isNaN(incomeVal))){
        errMsg.innerText = "Please input Number!";
     }
     else if (((incomeVal) | (foodVal) | (rentVal) | (clothVal)) < 0 ){
        errMsg.innerText = "Please provide Positive Number!";
     }
     else{
        totalExpend.innerText = totalExpense;
        balanceMoney.innerText = balance;

        errMsg.innerText = '';
     }     
     return balance;
    }


//Expense and Balance Calculation - Handler
calcBtn.addEventListener('click',function(){
    moneyCalculation();
})


//================================= Savings Section ======================================

//Savings handler
saveBtn.addEventListener('click',function(){
    savingCalculation();
})

 
//Savings calculation
function savingCalculation(){
    let getBalance = moneyCalculation()
    let getIncomeVal = Number(incomeInput.value);

    let GetSaveInput = Number(saveInput.value);
    
    //Savings Percentage Calculation
    let calcSavings = ((GetSaveInput / 100) * getIncomeVal) 
    //Remaining total balance
    let restBalance = (getBalance - calcSavings);

    //Error Handling
    if (calcSavings > getBalance){
        errMsg2.innerText = `ERROR! You wanna Save: ${calcSavings} but your Balance: ${getBalance}`;
        savingAmount.innerText = '';
        remainingBalance.innerText = '';
    }
    else{
        savingAmount.innerText = calcSavings;
        remainingBalance.innerText = restBalance;
        errMsg2.innerText = '';
    }
 }




 