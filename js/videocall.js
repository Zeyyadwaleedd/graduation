let addrate1 = document.getElementById("vidcancelicon1")
let closerate1 = document.getElementById("ratenot1")
let subrate1 = document.getElementById("ratesub1")
let  vidoverlay1 = document.querySelector(".vidoverlay1")

vidoverlay1.style.display = "none";
addrate1.addEventListener("click",() =>{
    vidoverlay1.style.display = "block";
})

closerate1.addEventListener("click" , () =>{
    vidoverlay1.style.display = "none";
})

subrate1.addEventListener("click" , () =>{
    vidoverlay1.style.display = "none";
})

const stars1 = document.querySelectorAll(".starsrate1 i");

stars1.forEach((star,index1) =>{
    star.addEventListener("click", () =>{

        stars1.forEach((star,index2) =>{
            index1 >= index2 ? star.classList.add("active1") : star.classList.remove("active1");
        });
    });
});
