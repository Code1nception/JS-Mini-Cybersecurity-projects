
const parserinput = document.getElementById("input-field");
const button = document.getElementById("btn");
const contentArea = document.getElementById("content-area");

button.addEventListener("click", function () {

    const token = parserinput.value.trim();

    if (token === "") {
        contentArea.innerHTML = "<p class='error'>Please enter a JWT Token.</p>";
        return;
    }

    const tokenpart = token.split(".");

    if (tokenpart.length !== 3) {
        contentArea.innerHTML = "<p class='error'>❌ Invalid JWT Token!</p>";
        return;
    }

    try {

        const header = atob(tokenpart[0]);
        const payload = atob(tokenpart[1]);

        const headerobj = JSON.parse(header);
        const payloadobj = JSON.parse(payload);

        let output = "";

        output += `<div class="top-row">`;

        // Header
        output += `
        <div class="card">

            <div class="card-title">
                <h3>Header</h3>

                <button
                    class="copy-btn"
                    onclick='copyText(${JSON.stringify(header)})'>
                    Copy
                </button>

            </div>
        `;

        for (const [key, value] of Object.entries(headerobj)) {
            output += `<p><strong>${key}</strong> : ${value}</p>`;
        }

        output += `</div>`;

        // Payload
        output += `
        <div class="card">

            <div class="card-title">
                <h3>Payload</h3>

                <button
                    class="copy-btn"
                    onclick='copyText(${JSON.stringify(payload)})'>
                    Copy
                </button>

            </div>
        `;

        for (const [key, value] of Object.entries(payloadobj)) {
            output += `<p><strong>${key}</strong> : ${value}</p>`;
        }

        output += `</div>`;
        output += `</div>`;

        output += `
        <div class="card signature">

            <div class="card-title">

                <h3>Signature</h3>

                <button
                    class="copy-btn"
                    onclick='copyText("${tokenpart[2]}")'>
                    Copy
                </button>

            </div>

            <p>${tokenpart[2]}</p>

        </div>
        `;

        contentArea.innerHTML = output;

    } catch (error) {

        contentArea.innerHTML = "<p class='error'>❌ Invalid JWT Token!</p>";
        console.error(error);

    }

});

function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("✅ Copied!");
}
