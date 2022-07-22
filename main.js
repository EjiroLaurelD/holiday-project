
const mtn =["0703","0704","0706","0803","0810","0813","0814","0816","0903","0906","0913","0916"];
const glo =["0705","0805","0807","0811","0815","0905","0915"];
const airtel= ["0701","0708","0802","0808","0812","0901","0904","0907","0912"];
const etisalat= ["0809","0817","0818","0908","0909"];
// const userInput = document.getElementById("phone");

// let check = userInput.value;
// const checkNumber = (provider) =>{
//     for (const element of provider){
//         if (check.includes(element)){
//             console.log(`Number is ${element}`);
//         }
//     }
// }
// checkNumber(mtn);
// checkNumber(glo);
// checkNumber(etisalat);
// checkNumber(airtel)



const userInput = document.getElementById('phone');
let check;

const checkNumber = (array, provider) => {
    check = userInput.value;
    for (const element of array) {
        if (check.includes(element)) {
            display.textContent = provider;
            console.log(`Number is ${element} and it belongs to ${provider} services`);
        }
    }
};
userInput.addEventListener('change', () => {
    checkNumber(mtn, 'MTN');
    checkNumber(glo, 'GLO');
    checkNumber(etisalat, 'ETISALAT');
    checkNumber(airtel, 'AIRTEL');
});

const display = document.getElementById('display')





// check.addEventlistener("input", (checkNumber) =>{
//     if (mtn.includes(check)){
//         console.log("mtn")
        
//     }
//     if (glo.includes(check)){
//         console.log("mtn")
        
//     }
//     if (airtel.includes(check)){
//         console.log("mtn")
        
//     }
//     if (etisalat.includes(check)){
//         console.log("mtn")
        
//     }
//     else {
//         return "invalid number"
//     }
// })

// checkNumber()


// check.addEventListener("input", (e) => {
//     if (check === mtn[""] ){
//         console.log("mtn")
//     }
//     if (check === glo[""]){
//         console.log("glo")
//     }
//     if (check === airtel['']){
//         console.log("airtel")
//     }
//     if (check === etisalat['']){
//         console.log("9Mobile")
//     }
//     else{
//         "return invalid number"
//     }

// })
