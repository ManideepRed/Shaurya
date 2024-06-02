function loadscript(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let number=document.getElementById("number").value;
    let gender=0;
    let pass=document.getElementById("pass").value;
    let passc=document.getElementById("passc").value;

    if(name.length<5){
            alertname1.style.display="block";
        return;
    }
    if(!name.length<5){
        alertname1.style.display="none";   
    }

    for (let i = 0; i < name.length; i++) {
        if (!isNaN(parseInt(name[i]))) {
            alertname2.style.display="block";
            return;
        }
        else{
            alertname2.style.display="none";
        }
    }
    
    if(email.slice(-10)!=="@gmail.com"){
        alertgmail.style.display="block"
        return;
    }
    if(email.slice(-10)=="@gmail.com"){
        alertgmail.style.display="none"
    }

    if(number.toString().length!==10){
        alertnum.style.display="block"
        return;
    }
    if(number.toString().length==10){
        alertnum.style.display="none";
    }
    gender=document.getElementById("genbut");
    if(!gender.innerHTML.trim()){
        alertgen.style.display="block";
        return;
    }
    if(gender.innerHTML.trim()){
        alertgen.style.display="none";
    }

    if(pass.length<8){
        alertpass1.style.display="block";
        return;
    }
    if(!pass.length<8){
        alertpass1.style.display="none";
    }
    if(pass!=passc){
        alertpass2.style.display="block";
        return;
    }
    if(pass==passc){
        alertpass2.style.display="none";
    }
   
}

function toggle(){
    option=document.getElementById("genopt");
    if(option.style.display=="block"){
        option.style.display="none";
    }
    else{
        option.style.display="block";
    }
}

function selectopt(a){
    event.preventDefault();
    document.getElementById("genbut").innerText=a;
    gender=a;
    toggle();
}

document.addEventListener('click',function(event){
let but=document.getElementById('genbut');
let con=document.getElementById('genopt');
if (!but.contains(event.target) && !con.contains(event.target)) {
    con.style.display="none"
}
});


  