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
// const bioNEXT = document.getElementById ("btn-1");

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

// bioNEXT.onclick = () => {
//     let name = document.getElementById("client-name");
//     let mail = document.getElementById("client-mail");
//     let phone = document.getElementById("client-phone");

//     is_string = function(mail) 

//     if (name.value === ) {
        
//     } else {
        
//     }
// }

    let name = document.getElementById("client-name");
    let phone = document.getElementById("client-phone");

function is_string(name) {
    return typeof name === "string";
}

bioNEXT.onclick = () => {
  if (is_string(name.value)) { // Access the value of the input element
    console.log("well-done");
    } else {
    console.log("sorry");
    }
};