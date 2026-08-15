const input = document.getElementById("input-text");
const encodebtn = document.getElementById("encode-btn");
const clearbtn = document.getElementById("clear-btn");
const urloutput = document.getElementById("url-output");
const htmloutput = document.getElementById("html-output");
const unicodeoutput = document.getElementById("unicode-output");
const hexoutput = document.getElementById("hex-output");
const copybtns = document.querySelectorAll(".copy-btn");

encodebtn.addEventListener("click", function(){
    const text = input.value.trim();
    if (text === "") {
        urloutput.value = "Please enter a payload.";
        return;
    }
    const encoder = encodeURIComponent(text);
    urloutput.value = encoder;

    let htmlencoder = text.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    htmloutput.value = htmlencoder;

    let unicode = "";
    for (let i =0;i<text.length;i++){
        const ascii = text.charCodeAt(i);
        const hex = ascii.toString(16).padStart(4,"0");
        unicode += "\\u" + hex;
    }
    unicodeoutput.value = unicode;

    let hex = "";
    for(let i =0;i<text.length;i++){
        const ascii = text.charCodeAt(i);
        const hexchar = ascii.toString(16);
        hex += " " + hexchar;
    }
    hexoutput.value = hex.trim();

});

clearbtn.addEventListener("click",function(){
    input.value = "";
    urloutput.value = "";
    htmloutput.value = "";
    unicodeoutput.value = "";
    hexoutput.value = "";
});

copybtns.forEach(function(button){
    button.addEventListener("click",async function(){
        const targetid = button.dataset.target;
        const output = document.getElementById(targetid);
        if(output.value.trim() === ""){
            return;
        }
        await navigator.clipboard.writeText(output.value);
        button.textContent = "Copied!";
        setTimeout(function(){
                button.textContent = "Copy";
        },1500);
    });
});