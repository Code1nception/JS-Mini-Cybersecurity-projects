const password = document.getElementById("inputfield");
const strength = document.getElementById("strength");
const content_area = document.getElementById("listofcontent");
const progressbar = document.getElementById("progress_bar")
password.addEventListener("input",function(){
    const valuer = password.value;
    if(valuer.trim() === ""){
        strength.innerHTML="Let's Check Your Password Strength";
        content_area.innerText="";
        progressbar.style.width="0%";
        return;
    }
    const lengthvalue = valuer.length;
    const hasupper = /[A-Z]/.test(valuer);
    const haslower = /[a-z]/.test(valuer);
    const hasnumber = /[0-9]/.test(valuer);
    let output ="";
    const hasSpecial = /[~!@#$%^&*()\-_;:'".,<>/?{}|]/.test(valuer);
    let score = 0;
    if(lengthvalue >= 8){
        output+="✔ Length of The Password\n"
        score++;
    }
    if (hasupper) {
        output += "✔ Uppercase Letter\n";
        score++;
    }
    if (haslower){
        output += "✔ Lowercase Letter\n";
        score++;
    }
    if (hasnumber){
        output += "✔ Numbers\n";
        score++;
    }
    if (hasSpecial){ 
        output += "✔ Special Characters\n";
        score++;}

    content_area.innerText=output;
    progressbar.style.width = (score * 20) + "%";
    if(score>=4){
        strength.innerHTML="Strong Password :)";
        progressbar.style.backgroundColor = "green";
    }else if(score==3){
        strength.innerHTML="Fair Password Strength";
        progressbar.style.backgroundColor="orange";
    }else{
        strength.innerHTML="Weak Password Strength :(";
        progressbar.style.backgroundColor="red";
    }
})
