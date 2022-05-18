//initial count

let count= 0;
const value = document.querySelector("#value");
const decrease= document.querySelector(".decrease");

const increase= document.querySelector(".increase");
const reset= document.querySelector(".reset");

decrease.addEventListener("click" , function(e){
    count--;
    value.textContent = count;
})

increase.addEventListener("click" , function(e){
    count++;
    value.textContent = count;
})

reset.addEventListener("click" , function(e){
    count = 0;
    value.textContent = count;
})





