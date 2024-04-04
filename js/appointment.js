//start (appiontment) js
let checkback1 = document.getElementById('appcheck11');
let checkback2 = document.getElementById('appcheck12');
let checkback3 = document.getElementById('appcheck13');
let checkback4 = document.getElementById('appcheck14');
let checkback5 = document.getElementById('appcheck15');
let checkback6 = document.getElementById('appcheck16');

let down1 = false;


checkback1.style.display = 'none';
function togglecheck1(){
    if(down1){
        checkback1.style.display = 'none';
        down1 = false;
    }else{
        checkback1.style.display = 'block';
        checkback2.style.display = 'none';
        checkback3.style.display = 'none';
        checkback4.style.display = 'none';
        checkback5.style.display = 'none';
        checkback6.style.display = 'none';
        down1 = true;
    }
}

checkback2.style.display = 'none';
function togglecheck2(){
    if(down1){
        checkback2.style.display = 'none';
        down1 = false;
    }else{
        checkback2.style.display = 'block';
        checkback1.style.display = 'none';
        checkback3.style.display = 'none';
        checkback4.style.display = 'none';
        checkback5.style.display = 'none';
        checkback6.style.display = 'none';
        down1 = true;
    }
}

checkback3.style.display = 'none';
function togglecheck3(){
    if(down1){
        checkback3.style.display = 'none';
        down1 = false;
    }else{
        checkback3.style.display = 'block';
        checkback2.style.display = 'none';
        checkback1.style.display = 'none';
        checkback4.style.display = 'none';
        checkback5.style.display = 'none';
        checkback6.style.display = 'none';
        down1 = true;
    }
}

checkback4.style.display = 'none';
function togglecheck4(){
    if(down1){
        checkback4.style.display = 'none';
        down1 = false;
    }else{
        checkback4.style.display = 'block';
        checkback2.style.display = 'none';
        checkback3.style.display = 'none';
        checkback1.style.display = 'none';
        checkback5.style.display = 'none';
        checkback6.style.display = 'none';
        down1 = true;
    }
}

checkback5.style.display = 'none';
function togglecheck5(){
    if(down1){
        checkback5.style.display = 'none';
        down1 = false;
    }else{
        checkback5.style.display = 'block';
        checkback2.style.display = 'none';
        checkback3.style.display = 'none';
        checkback4.style.display = 'none';
        checkback1.style.display = 'none';
        checkback6.style.display = 'none';
        down1 = true;
    }
}

checkback6.style.display = 'none';
function togglecheck6(){
    if(down1){
        checkback6.style.display = 'none';
        down1 = false;
    }else{
        checkback6.style.display = 'block';
        checkback2.style.display = 'none';
        checkback3.style.display = 'none';
        checkback4.style.display = 'none';
        checkback5.style.display = 'none';
        checkback1.style.display = 'none';
        down1 = true;
    }
}

//----------------------------------

let checkback7 = document.getElementById('appcheck111');
let checkback8 = document.getElementById('appcheck112');
let checkback9 = document.getElementById('appcheck113');
let checkback10 = document.getElementById('appcheck114');

checkback7.style.display = 'none';
function togglecheck7(){
    if(down1){
        checkback7.style.display = 'none';
        down1 = false;
    }else{
        checkback7.style.display = 'block';
        checkback8.style.display = 'none';
        checkback9.style.display = 'none';
        checkback10.style.display = 'none';
        down1 = true;
    }
}

checkback8.style.display = 'none';
function togglecheck8(){
    if(down1){
        checkback8.style.display = 'none';
        down1 = false;
    }else{
        checkback8.style.display = 'block';
        checkback7.style.display = 'none';
        checkback9.style.display = 'none';
        checkback10.style.display = 'none';
        down1 = true;
    }
}

checkback9.style.display = 'none';
function togglecheck9(){
    if(down1){
        checkback9.style.display = 'none';
        down1 = false;
    }else{
        checkback9.style.display = 'block';
        checkback8.style.display = 'none';
        checkback7.style.display = 'none';
        checkback10.style.display = 'none';
        down1 = true;
    }
}

checkback10.style.display = 'none';
function togglecheck10(){
    if(down1){
        checkback10.style.display = 'none';
        down1 = false;
    }else{
        checkback10.style.display = 'block';
        checkback8.style.display = 'none';
        checkback9.style.display = 'none';
        checkback7.style.display = 'none';
        down1 = true;
    }
}

//end (appiontment) js