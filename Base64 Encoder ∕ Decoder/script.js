const inputtext = document.getElementById('input-text');
const outputtext = document.getElementById('output-text');
const encodebtn = document.getElementById('encode-btn');
const decodebtn = document.getElementById('decode-btn');
const copybtn = document.getElementById('copy-btn');
const clearbtn = document.getElementById('clear-btn');

encodebtn.addEventListener("click", function(){
    if(inputtext.value.trim() === ""){
        outputtext.value = "Please Enter Text to Encode";
        return;
    }
    const text = inputtext.value;
    const encodetext = btoa(text);
    outputtext.value = encodetext;
});
decodebtn.addEventListener("click", function(){
    if(inputtext.value.trim() === ""){
        outputtext.value = "Please Enter Text to Decode";
        return;
    }
    try{
        const text = inputtext.value;
        const decodetext = atob(text);
        outputtext.value = decodetext;
    } catch (error) {
        outputtext.value = "Invalid Base64 Input";
    }
});

copybtn.addEventListener("click", async function(){
    if(outputtext.value.trim() === ""){
        return;
    }
    await navigator.clipboard.writeText(outputtext.value);

    copybtn.textContent = "Copied!";
    setTimeout(function(){
        copybtn.textContent = "Copy";
    },1500);
});
clearbtn.addEventListener("click",function(){
    inputtext.value ="";
    outputtext.value = "";
});