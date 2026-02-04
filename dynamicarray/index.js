const textElement = document.getElementById("elements");
const inputText = document.getElementById("numbers");

let arr = [];

function showNumbers(){

    let newInt = parseInt(inputText.value);

    if(typeof newInt === 'number' && !Number.isNaN(newInt)){

        arr.push(newInt);

        textElement.innerHTML = arr.join("<br>");
    }else{
        alert("Error: Not a number!")
    }

}
