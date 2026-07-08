const urlinput = document.getElementById("parserinput")
const parsebtn = document.getElementById("btn")
parsebtn.addEventListener("click",function (){
    const url = urlinput.value;
    if (url.trim() === ""){
        console.log("Please Enter the URL")
        return;
    }
    try{
        const parseURL = new URL(url)
        const all = `Protocol : ${parseURL.protocol}\nHostname : ${parseURL.hostname}\nPathname : ${parseURL.pathname} \nQuery : ${parseURL.searchParams} \nUsername : ${parseURL.searchParams.get("user")} \nRole : ${parseURL.searchParams.get("role")} \nID Number : ${parseURL.searchParams.get("id")}`
        console.log(all)
        document.getElementById("url-parser-data").innerText = all;
    }
    catch(error){
        console.log("Invalid URL")
        document.getElementById("url-parser-data").innerText = "❌ Invalid URL";
    }    
})
