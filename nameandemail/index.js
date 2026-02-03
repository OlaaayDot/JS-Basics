const name1 = document.getElementById("name1");
const email1 = document.getElementById("email1");
const showinfo = document.getElementById("info");

function info(){
    if(!(name1.value === "" || email1.value === "")){

        showinfo.innerHTML = "Name: " + name1.value + "<br>" + "Email: " + email1.value;
    }else{
        alert("Error, please input every field!");
    }
}
