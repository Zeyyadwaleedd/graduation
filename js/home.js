//start (home) js
let notifibox1 = document.getElementById('homenotifi11');
let down = false;

function togglenotifi(){
    if(down){
        notifibox1.style.height = '0px';
        notifibox1.style.opacity = 0;
        down = false;
    }else{
        notifibox1.style.height = '600px';
        notifibox1.style.opacity = 1;
        down = true;
    }
}

//end (home) js

// //----------------------------------------------------------------

// //start (appiontment) js
// //not working here
// let checkback1 = document.getElementById('appcheck11');
// let checkback2 = document.getElementById('appcheck12');
// let checkback3 = document.getElementById('appcheck13');
// let checkback4 = document.getElementById('appcheck14');
// let checkback5 = document.getElementById('appcheck15');
// let checkback6 = document.getElementById('appcheck16');

// let down1 = false;


// checkback1.style.display = 'none';
// function togglecheck1(){
//     if(down1){
//         checkback1.style.display = 'none';
//         down1 = false;
//     }else{
//         checkback1.style.display = 'block';
//         checkback2.style.display = 'none';
//         checkback3.style.display = 'none';
//         checkback4.style.display = 'none';
//         checkback5.style.display = 'none';
//         checkback6.style.display = 'none';
//         down1 = true;
//     }
// }

// checkback2.style.display = 'none';
// function togglecheck2(){
//     if(down1){
//         checkback2.style.display = 'none';
//         down1 = false;
//     }else{
//         checkback2.style.display = 'block';
//         checkback1.style.display = 'none';
//         checkback3.style.display = 'none';
//         checkback4.style.display = 'none';
//         checkback5.style.display = 'none';
//         checkback6.style.display = 'none';
//         down1 = true;
//     }
// }

// checkback3.style.display = 'none';
// function togglecheck3(){
//     if(down1){
//         checkback3.style.display = 'none';
//         down1 = false;
//     }else{
//         checkback3.style.display = 'block';
//         checkback2.style.display = 'none';
//         checkback1.style.display = 'none';
//         checkback4.style.display = 'none';
//         checkback5.style.display = 'none';
//         checkback6.style.display = 'none';
//         down1 = true;
//     }
// }

// checkback4.style.display = 'none';
// function togglecheck4(){
//     if(down1){
//         checkback4.style.display = 'none';
//         down1 = false;
//     }else{
//         checkback4.style.display = 'block';
//         checkback2.style.display = 'none';
//         checkback3.style.display = 'none';
//         checkback1.style.display = 'none';
//         checkback5.style.display = 'none';
//         checkback6.style.display = 'none';
//         down1 = true;
//     }
// }

// checkback5.style.display = 'none';
// function togglecheck5(){
//     if(down1){
//         checkback5.style.display = 'none';
//         down1 = false;
//     }else{
//         checkback5.style.display = 'block';
//         checkback2.style.display = 'none';
//         checkback3.style.display = 'none';
//         checkback4.style.display = 'none';
//         checkback1.style.display = 'none';
//         checkback6.style.display = 'none';
//         down1 = true;
//     }
// }

// checkback6.style.display = 'none';
// function togglecheck6(){
//     if(down1){
//         checkback6.style.display = 'none';
//         down1 = false;
//     }else{
//         checkback6.style.display = 'block';
//         checkback2.style.display = 'none';
//         checkback3.style.display = 'none';
//         checkback4.style.display = 'none';
//         checkback5.style.display = 'none';
//         checkback1.style.display = 'none';
//         down1 = true;
//     }
// }

// //---------

// let checkback7 = document.getElementById('appcheck111');
// let checkback8 = document.getElementById('appcheck112');
// let checkback9 = document.getElementById('appcheck113');
// let checkback10 = document.getElementById('appcheck114');

// checkback7.style.display = 'none';
// function togglecheck7(){
//     if(down1){
//         checkback7.style.display = 'none';
//         down1 = false;
//     }else{
//         checkback7.style.display = 'block';
//         checkback8.style.display = 'none';
//         checkback9.style.display = 'none';
//         checkback10.style.display = 'none';
//         down1 = true;
//     }
// }

// checkback8.style.display = 'none';
// function togglecheck8(){
//     if(down1){
//         checkback8.style.display = 'none';
//         down1 = false;
//     }else{
//         checkback8.style.display = 'block';
//         checkback7.style.display = 'none';
//         checkback9.style.display = 'none';
//         checkback10.style.display = 'none';
//         down1 = true;
//     }
// }

// checkback9.style.display = 'none';
// function togglecheck9(){
//     if(down1){
//         checkback9.style.display = 'none';
//         down1 = false;
//     }else{
//         checkback9.style.display = 'block';
//         checkback8.style.display = 'none';
//         checkback7.style.display = 'none';
//         checkback10.style.display = 'none';
//         down1 = true;
//     }
// }

// checkback10.style.display = 'none';
// function togglecheck10(){
//     if(down1){
//         checkback10.style.display = 'none';
//         down1 = false;
//     }else{
//         checkback10.style.display = 'block';
//         checkback8.style.display = 'none';
//         checkback9.style.display = 'none';
//         checkback7.style.display = 'none';
//         down1 = true;
//     }
// }

// //end of (appiontment) js

// //---------------------------------------------------------------

// //start of (Products info) js
// //not working here
// const plus1 = document.querySelector(".plus1"),
// minus1 = document.querySelector(".minus1"),
// num1 = document.querySelector(".num1");

// let z = 1;

// plus1.addEventListener("click", () => {
    
//     z++;
//     // z =(z < 10) ? "0" + z : z;
//     num1.innerHTML = z;
// });

// minus1.addEventListener("click", () => {
//     if (z > 1){
//         z--;
//         // z =(z < 10) ? "0" + z : z;
//         num1.innerHTML = z;
//     }
// });

// //end of (Products info) js

// //---------------------------------------------------------------

// //----------------------------------------------------------------

// //start (Products) js
// //not working here
// let heartnot1 = document.getElementById("heartnots1");
// let heartsoild1 = document.getElementById("heartsoild1");

// heartsoild1.style.display = "none";

// heartnot1.addEventListener("click",() =>{
//     heartnot1.style.display = "none";
//     heartsoild1.style.display = "block";
// });

// heartsoild1.addEventListener("click",() =>{
//     heartnot1.style.display = "block";
//     heartsoild1.style.display = "none";
// });


// //end of (Products) js

// //----------------------------------------------------------------

// //start (video call) js
// //not working here
// let addrate1 = document.getElementById("vidcancelicon1")
// let closerate1 = document.getElementById("ratenot1")
// let subrate1 = document.getElementById("ratesub1")
// let  vidoverlay1 = document.querySelector(".vidoverlay1")

// vidoverlay1.style.display = "none";
// addrate1.addEventListener("click",() =>{
//     vidoverlay1.style.display = "block";
// })

// closerate1.addEventListener("click" , () =>{
//     vidoverlay1.style.display = "none";
// })

// subrate1.addEventListener("click" , () =>{
//     vidoverlay1.style.display = "none";
// })

// const stars1 = document.querySelectorAll(".starsrate1 i");

// stars1.forEach((star,index1) =>{
//     star.addEventListener("click", () =>{

//         stars1.forEach((star,index2) =>{
//             index1 >= index2 ? star.classList.add("active1") : star.classList.remove("active1");
//         });
//     });
// });

// //end of (video call) js