const Step_1 = document.querySelector (".nav-1");
const Step_2 = document.querySelector (".nav-2");
const Step_3 = document.querySelector (".nav-3");
const Step_4 = document.querySelector (".nav-4");
const revert = document.querySelector (".return-btn");
const PG_1 = document.querySelector (".bio-info");
const PG_2 = document.querySelector (".plans-info");
const PG_3 = document.querySelector (".add-ons");
const PG_4 = document.querySelector (".finish-up");
const PG_5 = document.querySelector (".appreciation");


Step_1.onclick = () => {
    PG_1.style.display = "block";
    PG_2.style.display = "none";
    PG_3.style.display = "none";
    PG_4.style.display = "none";
    revert.style.opacity = "0"; 
}
Step_2.onclick = () => {
    PG_1.style.display = "none";
    PG_2.style.display = "block";
    PG_3.style.display = "none";
    PG_4.style.display = "none"; 
    revert.style.opacity = "100";
}
Step_3.onclick = () => {
    PG_1.style.display = "none";
    PG_2.style.display = "none";
    PG_3.style.display = "block";
    PG_4.style.display = "none"; 
    revert.style.opacity = "100"; 
}
Step_4.onclick = () => {
    PG_1.style.display = "none";
    PG_2.style.display = "none";
    PG_3.style.display = "none"; 
    revert.style.opacity = "100"; 
    PG_4.style.display = "block"; 
}


    let name = document.getElementById ("client-name");
    let phone = document.getElementById ("client-phone");
    const bioNEXT = document.getElementById ("btn-1");

function is_string(phone) {
    return typeof phone === "string";
}
function is_number(phone) {
    return !isNaN(phone) && typeof phone === "number";
}

bioNEXT.onclick = () => {
    console.log (name.value);
    console.log (phone.value);
  if (is_string(name.value) && name.value !="" && !isNaN(phone.value) && phone.value !="") { // Access the value of the input element
    console.log("well-done");
    PG_1.style.display = "none";
    PG_2.style.display = "block";
    revert.style.opacity = "100";
    } else {
    console.log("sorry");
    prompt("Some spaces not rightly inputed")
    }
};