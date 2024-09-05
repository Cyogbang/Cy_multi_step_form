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
const planNEXT = document.getElementById("btn-2");

Step_1.onclick = () => {
    PG_1.style.display = "block";
    PG_2.style.display = "none";
    PG_3.style.display = "none";
    PG_4.style.display = "none";
    revert.style.opacity = "0"; 
}

Step_2.onclick = () => {
    validatePG1();
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
    validatePG1();
}

function validatePG1(){
        console.log (name.value);
        console.log (phone.value);
      if (is_string(name.value) && name.value !="" && !isNaN(phone.value) && phone.value !="") { // Access the value of the input element
        console.log("well-done");
        PG_1.style.display = "none";
        PG_2.style.display = "block";
        revert.style.opacity = "100";
        } else {
        console.log("sorry");
        prompt("Some spaces not rightly inputed");
        }
}

// planNEXT.onclick = () => {
//     let toggler = document.getElementById("flexSwitchCheckDefault");
//     let monthlyPlan = document.querySelector(".check1");
//     let yearlyPlan = document.querySelector(".check2");

//     if (toggler == role) {
//         console.log("monthly");
//     } else {
//         console.log("yearly");
//     }
// }

let toggler = document.getElementById("flexSwitchCheckDefault");
let card1 = document.querySelector(".yearly1");
let card2 = document.querySelector(".yearly2");
let card3 = document.querySelector(".yearly3");
// const mPlan = document.querySelectorAll(".monthly");
const mPlan1 =document.querySelector(".monthly-1")
const mPlan2 =document.querySelector(".monthly-2")
const mPlan3 =document.querySelector(".monthly-3")

let monthlyPlan = () => {
    console.log("monthly");
    mPlan1.style.display = "block";
    mPlan2.style.display = "block";
    mPlan3.style.display = "block";
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
};
let yearlyPlan = () => {
    console.log("yearly");
    card1.innerHTML = '<p><span class="card-text small fw-bold">Arcade</span><br><span class="card-text small text-muted">$90/yr</span><br><span class="card-text small">2 months free</span></p>'
    card2.innerHTML = '<p><span class="card-text small fw-bold">Advanced</span><br><span class="card-text small text-muted">$120/yr</span><br><span class="card-text small">2 months free</span></p>'
    card3.innerHTML = '<p><span class="card-text small fw-bold">Pro</span><br><span class="card-text small text-muted">$150/yr</span><br><span class="card-text small">2 months free</span></p>'
    card1.style.display = "block";
    card2.style.display = "block";
    card3.style.display = "block";
    mPlan1.style.display = "none";
    mPlan2.style.display = "none";
    mPlan3.style.display = "none";
};
let currentPlan = monthlyPlan;
toggler.addEventListener("click", () => {
    if (currentPlan === monthlyPlan) {
        currentPlan = yearlyPlan;
    } else {
        currentPlan = monthlyPlan;
    }
    currentPlan();
})

// function choosePlan(choice){
//     let toggler = document.getElementById("flexSwitchCheckDefault");
//     let monthlyPlan = document.querySelector(".check1");
//     let yearlyPlan = document.querySelector(".check2");

//     if (toggler == choice) {
//         console.log("monthly");
//     } else {
//         console.log("yearly");
//     }
// }