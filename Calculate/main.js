const txtItemName = document.getElementById("itemName");
const numItemPrice = document.getElementById("itemPrice");

const textElement1 = document.getElementById("element1");
const textElement2 = document.getElementById("element2");
const numberText = document.getElementById("total");
const numberText2 = document.getElementById("tax");

let arr1 = [];
let arr2 = [];

function itemdesc(){

    arr1.push(txtItemName.value);
    arr2.push(parseFloat(numItemPrice.value));

    textElement1.innerHTML = arr1.join("<br>");
    textElement2.innerHTML = arr2.join("<br>");
}


function calculate(){
    let total = 0;
    let tax = .25;

    for(let i=0; i<arr2.length; i++){
        total += arr2[i];
}

    let subtotaltax = tax * total;
    let finaltotal = total - subtotaltax;

    numberText2.innerHTML = subtotaltax;
    numberText.innerHTML = finaltotal;
}

function clearList(){
    arr1 = [];
    arr2 = [];

    textElement1.innerHTML = "";
    textElement2.innerHTML = "";
    numberText.innerHTML = "0";
    numberText2.innerHTML = "0";
}


