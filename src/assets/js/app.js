const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');

const cancelButton = document.querySelector('#btn-cancel');
const SaveButton = document.querySelector('#btn-ok');

const expensesList = document.querySelector('#expenses-list');
const totalExpensesCalc = document.querySelector('#total-expenses');

const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
    reasonInput.value='';
    amountInput.value='';
};

SaveButton.addEventListener('click', () => {
    console.log('Save Button Pressed !! :)');
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;    

    if ((enteredReason.trim().length <= 0) || 
        (enteredAmount <=0) ||
        (enteredAmount.trim().length = 0)){

            alertCtrl.create({
                message: 'Please enter a valid username and password!',
                header:  'Invalid Inputs',
                buttons:  ['OK']              
            }).then(alertElement => {
                alertElement.present();
            });
            return;
    }

    console.log('entered reason : '+enteredReason);
    console.log('entered amount : '+enteredAmount);

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesCalc.textContent = totalExpenses;
    clear();
});

cancelButton.addEventListener('click', clear);

function showMessage(){
   // alert('Image clicked');
    console.log('clicked image');
    window.location.href='index.html';
} 