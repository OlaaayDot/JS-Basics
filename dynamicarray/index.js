const textElement = document.getElementById("element1");
const inputText = document.getElementById("numbers");

let arr1 = [];

function showNumbers(){

    let newInt = parseInt(numbers.value);

    if(typeof newInt === 'number' && !Number.isNaN(newInt)){

        arr.push(newInt);

        textElement.innerHTML = arr.join("<br>");
    }else{
        alert("Error: Not a number!")
    }

}