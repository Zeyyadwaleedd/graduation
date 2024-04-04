const plus1 = document.querySelector(".plus1"),
minus1 = document.querySelector(".minus1"),
num1 = document.querySelector(".num1");

let z = 1;

plus1.addEventListener("click", () => {
    
    z++;
    // z =(z < 10) ? "0" + z : z;
    num1.innerHTML = z;
});

minus1.addEventListener("click", () => {
    if (z > 1){
        z--;
        // z =(z < 10) ? "0" + z : z;
        num1.innerHTML = z;
    }
});