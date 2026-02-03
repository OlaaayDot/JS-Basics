let newname = document.getElementById("newname");
let name1 = document.getElementById("name1");

function changecontent(){
    newname.textContent = name1.value;
}

function changecolor(){
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    newname.style.color = randomColor;
}