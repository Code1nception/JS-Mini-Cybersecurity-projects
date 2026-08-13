/*const urlInput = document.getElementById("url-input");
const inspectBtn = document.getElementById("inspect-btn");
const results = document.getElementById("results");

inspectBtn.addEventListener("click", function () {

    const url = urlInput.value.trim();
    let output = ""
    
    fetch(url).then(response =>{
        
        if(!response.ok){
        results.innerHTML=`<p class="error"> Http Error : ${response.status}</p>`;
        return;
    }

        output +=`<p>Status Code : ${response.status}</p>
        <p>Status : ${response.statusText || "Not provide by Server "}</p>
        <p>Content-type : ${response.headers.get("content-type")} 
        <h4>Header</h4>`
        response.headers.forEach((value,key)=>{
            output += `<p>${key} : ${value}</p>`;
        });
        results.innerHTML = output;
    })
    .catch(error =>{
        results.innerHTML = `<p class="error">❌ Request failed!</p>`;
        console.error(error);
    });

});*/
/*
const urlInput = document.getElementById("url-input");
const inspectBtn = document.getElementById("inspect-btn");
const results = document.getElementById("results");


inspectBtn.addEventListener("click", async function () {

    const url = urlInput.value.trim();
    let output = ""
// Handle network/fetch errors
    try{
        const response = await fetch(url);
        // Check whether the HTTP response was successful
        if(!response.ok){
            results.innerHTML=`<p class="error">❌ HTTP Error: ${response.status}</p>`;
            return;
        }
        const csp = response.headers.get("content-security-policy");
        const transport = response.headers.get("strict-transport-security");
        const xcontent = response.headers.get("x-content-type-options");
        const xframe = response.headers.get("x-frame-options");
        const ref = response.headers.get("referrer-policy");
//scoring for how many header presents
        let securityScore = 0;
        if (csp) securityScore++;
        if (transport) securityScore++;
        if (xcontent) securityScore++;
        if (xframe) securityScore++;
        if (ref) securityScore++;
//displaying the details 
        output +=`<p>Status Code : ${response.status}</p>
        <p>Status : ${response.statusText || "Not provide by Server "}</p>
        <p>Content-type : ${response.headers.get("content-type")}</p>
        <h3>Security Headers</h3>
        <h4>Security Header Score : ${securityScore} / 5 </h4>
        <p>Content-Security-Policy : ${csp || "❌ Not Found"}</p>
        <p>Strict-Transport-Security : ${transport || "❌ Not Found"}</p>
        <p>X-Content Type Options : ${xcontent || "❌ Not Found"}</p>
        <p>X-Frame Options : ${xframe || "❌ Not Found"}</p>
        <p>Referrer-Policy : ${ref || "❌ Not Found"}</p>
        <h3>Header</h3>`;
        response.headers.forEach((value,key)=>{
            output += `<p>${key} : ${value}</p>`;
        });
        results.innerHTML = output;
    } catch(error){
        results.innerHTML= `<p class="error">❌ Request failed!</p>`;
        console.log(error);
    }

});*/


const urlInput = document.getElementById("url-input");
const inspectBtn = document.getElementById("inspect-btn");
const results = document.getElementById("results");

inspectBtn.addEventListener("click", async function () {

    const url = urlInput.value.trim();
    let output = "";

    // Handle network/fetch errors
    try {

        const response = await fetch(url);

        // Check whether the HTTP response was successful
        if (!response.ok) {

            results.innerHTML =
                `<p class="error">❌ HTTP Error: ${response.status}</p>`;

            return;
        }

        const csp =
            response.headers.get("content-security-policy");

        const transport =
            response.headers.get("strict-transport-security");

        const xcontent =
            response.headers.get("x-content-type-options");

        const xframe =
            response.headers.get("x-frame-options");

        const ref =
            response.headers.get("referrer-policy");


        // Scoring for how many security headers are present

        let securityScore = 0;

        if (csp) securityScore++;
        if (transport) securityScore++;
        if (xcontent) securityScore++;
        if (xframe) securityScore++;
        if (ref) securityScore++;


        // Displaying the details

        output += `
            <p>Status Code : ${response.status}</p>

            <p>
                Status :
                ${response.statusText || "Not provided by Server"}
            </p>

            <p>
                Content-type :
                ${response.headers.get("content-type") || "Not provided"}
            </p>

            <h3>Security Headers</h3>

            <h4>
                Security Header Score :
                ${securityScore} / 5
            </h4>

            <p>
                Content-Security-Policy :
                ${csp || "❌ Not Found"}
            </p>

            <p>
                Strict-Transport-Security :
                ${transport || "❌ Not Found"}
            </p>

            <p>
                X-Content-Type-Options :
                ${xcontent || "❌ Not Found"}
            </p>

            <p>
                X-Frame-Options :
                ${xframe || "❌ Not Found"}
            </p>

            <p>
                Referrer-Policy :
                ${ref || "❌ Not Found"}
            </p>

            <h3>Header</h3>
        `;


        response.headers.forEach((value, key) => {

            output += `
                <p>
                    ${key} : ${value}
                </p>
            `;

        });


        results.innerHTML = output;

    } catch (error) {

        results.innerHTML =
            `<p class="error">❌ Request failed!</p>`;

        console.log(error);

    }

});