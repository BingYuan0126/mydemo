const amountE1 = document.querySelector("#amount");
const yearsE1 = document.querySelector("#years");
const rateE1 = document.querySelector("#rate");
const repaymentE1 = document.querySelector("#repayment1");
const repaymentE2 = document.querySelector("#repayment2");
const feeE1 = document.querySelector("#fee");

const calcE1 = document.querySelector("#calc");


console.log(amountE1, yearsE1 ,rateE1, repaymentE1, repaymentE2,feeE1);

calcE1.addEventListener("click",calcLoan);

function calcLoan() {
    let amount = amountE1.value*10000;
    let years = yearsE1.value;
    let rate = rateE1.value/100;
    let fee = feeE1.checked ? 5000 : 0;
    let rule = repaymentE1.checked ? 1 : 2;
    //利息
    let totalInterest = amount * rate * years;
    //總金額
    let totalAmount = amount + totalInterest + fee;

    document.querySelector(".totalAmount").innerText = totalAmount + (fee==0?"": "(含手續費)");
    document.querySelector(".totalInterest").innerText = totalInterest;
    const resultE1 = document.querySelector("#result");
    resultE1.style.display = "none";
    setTimeout(function(){
        resultE1.style.display = "block";
    },500)

    //if(feeE1.checked){
    //     fee=5000;
    //}


    console.log(amount,years,rate,fee, rule , totalAmount ,totalInterest);
}
