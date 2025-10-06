const CAB = document.getElementById("CAB")
const CCB = document.getElementById("CCB")
const BO = document.getElementById("BO")
const action = document.getElementById("action")

let account = 1000
let cash = 1000
let n = 0
let massage = ""

function changeCurrent() {
    account = Number(CAB.value)
    cash = Number(CCB.value)
    n += 1
    massage = n + ", Current account balance: " + account + ", Current cash balance: " + cash + '\n' + massage;
    document.getElementById("widget").innerHTML = massage;
}

function operationProceed() {
    n += 1
    if (action.value === 'deposit') {
        if (Number(BO.value) > cash){
            massage = n + ", Cloundn't deposit entered balance. (Insufficient cash balance)" + "\n" + massage;
        } else {
            account += Number(BO.value);
            cash -= Number(BO.value);
            massage = n + ", Current account balance: " + account + ", Current cash balance: " + cash + "\n" + massage;
        }
    } else {
        if (Number(BO.value) > account){
            massage = n + ", Cloundn't withdraw entered balance. (Insufficient account balance)" + "\n" + massage;
        } else {
            account -= Number(BO.value);
            cash += Number(BO.value);
            massage = n + ", Current account balance: " + account + ", Current cash balance: " + cash + "\n" + massage;
        }
    }
    document.getElementById("widget").innerHTML = massage;
}

function currencyConvert() {

}