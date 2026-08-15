# 🧪 XSS Payload Encoder

A lightweight, browser-based tool that encodes text/payloads into **URL**, **HTML Entity**, **Unicode**, and **Hexadecimal** formats — built as a learning project to understand how encoding schemes are used in web security testing (XSS, WAF bypass research, input sanitization studies, etc.).

No frameworks. No backend. No dependencies. Just plain **HTML, CSS, and JavaScript** — making it a great read for beginners who want to see how a real, working front-end security utility is structured.

---

## ⚠️ Disclaimer

This tool is built strictly for **educational purposes** and **authorized security testing**.

- Only use it on applications/systems you **own** or have **explicit written permission** to test.
- Do **not** use this tool against systems you do not have authorization for — that would be illegal.
- The author is not responsible for any misuse of this tool.

---

## 📸 Preview
<img width="847" height="589" alt="Image" src="https://github.com/user-attachments/assets/df3825f2-a825-4c4b-a1cb-3263824f2e64" />

---

## ✨ Features

- 🔤 **URL Encoding** — converts text using `encodeURIComponent()`
- 🔒 **HTML Entity Encoding** — escapes `& < > " '` to prevent HTML/script injection
- 🌐 **Unicode Encoding** — converts each character to its `\uXXXX` escape form
- 🔢 **Hex Encoding** — converts each character to its hexadecimal ASCII code
- 📋 **One-click Copy** — copy any encoded output to your clipboard instantly
- 🧹 **Clear Button** — resets input and all output fields in one click
- 📱 **Responsive Design** — works cleanly on desktop, tablet, and mobile
- 🎨 **Dark, terminal-style UI** — styled to feel like a real security tool

---

## 🗂️ Project Structure

```
xss-payload-encoder/
├── index.html      # App structure/markup
├── style.css       # Dark-themed, responsive styling
├── script.js       # Encoding logic + UI interactivity
└── README.md       # Project documentation
```

---

## 🧠 How It Works (Beginner-Friendly Breakdown)

The whole app runs in the browser — you type a payload, click **Encode Payload**, and the script transforms it into four different encoded formats. Here's what's happening under the hood, in plain JavaScript:

### 1. Grabbing Elements from the DOM
```js
const input = document.getElementById("input-text");
const encodebtn = document.getElementById("encode-btn");
```
We use `document.getElementById()` to grab references to the textarea and buttons so we can read from / write to them later.

### 2. URL Encoding
```js
const encoder = encodeURIComponent(text);
```
`encodeURIComponent()` is a **built-in JavaScript function** that converts special characters (like `<`, `>`, `/`, spaces) into their `%XX` percent-encoded form — the same encoding you see in URLs and query strings. This is useful for testing how a payload behaves when passed through a URL parameter.

### 3. HTML Entity Encoding
```js
let htmlencoder = text.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
```
This uses `.replace()` with **regular expressions** (`/&/g` means "find all `&` characters globally") to swap out dangerous HTML characters with their **safe entity equivalents**. This is exactly the kind of encoding a secure web app should apply to user input before rendering it in HTML — and exactly what an XSS payload tries to bypass.

### 4. Unicode Encoding
```js
for (let i = 0; i < text.length; i++) {
    const ascii = text.charCodeAt(i);
    const hex = ascii.toString(16).padStart(4, "0");
    unicode += "\\u" + hex;
}
```
- `.charCodeAt(i)` gets the numeric character code of each letter.
- `.toString(16)` converts that number into hexadecimal.
- `.padStart(4, "0")` pads it to always be 4 digits (e.g. `61` → `0061`).
- The result is a JavaScript-style Unicode escape sequence, like `\u0061` for the letter `a`.

### 5. Hex Encoding
```js
for (let i = 0; i < text.length; i++) {
    const ascii = text.charCodeAt(i);
    const hexchar = ascii.toString(16);
    hex += " " + hexchar;
}
```
Same idea as Unicode encoding, but without padding or the `\u` prefix — just raw hex byte values separated by spaces (e.g. `61 6c 65 72 74`).

### 6. Copy-to-Clipboard
```js
await navigator.clipboard.writeText(output.value);
```
Uses the browser's built-in **Clipboard API** to copy text, then temporarily changes the button label to "Copied!" using `setTimeout()` as visual feedback.

---

## 🚀 Getting Started

No installation, no build tools, no npm required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Code1nception/JS-Mini-Cybersecurity-projects.git
   ```
2. **Open the project folder**
   ```bash
   cd JS-Mini-Cybersecurity-projects
   cd xss-payload-encoder
   ```
3. **Run it**
   Just open `index.html` in your browser — double-click it, or use a live server extension in VS Code for auto-reload.

That's it. No `npm install`, no build step.

---

## 🧪 Example Usage

| Input Payload | URL Encoded | HTML Encoded |
|---|---|---|
| `<script>alert(1)</script>` | `%3Cscript%3Ealert(1)%3C%2Fscript%3E` | `&lt;script&gt;alert(1)&lt;/script&gt;` |

Try pasting common test payloads like `<script>alert(1)</script>` or `"><img src=x onerror=alert(1)>` to see how each encoding format transforms them — and observe *why* proper output encoding (like the HTML entity version) is what stops these payloads from executing in a browser.

---

## 🎯 What You Can Learn From This Project

If you're new to web security or JavaScript, this project is a good hands-on way to understand:

- The difference between **URL encoding**, **HTML entity encoding**, and **character-level encoding** (Unicode/Hex)
- Why **output encoding** is one of the primary defenses against **Cross-Site Scripting (XSS)**
- Basic **DOM manipulation** (`getElementById`, `addEventListener`, `.value`)
- Using **regular expressions** with `.replace()` for string sanitization
- The browser's native **Clipboard API**
- Writing clean, dependency-free vanilla JavaScript

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, Flexbox, Grid, responsive media queries
- **Vanilla JavaScript (ES6+)** — no libraries or frameworks

---

## 🤝 Contributing

This is a learning project, and contributions/suggestions are welcome! Feel free to:
- Open an issue for bugs or suggestions
- Fork the repo and submit a pull request
- Suggest additional encoding types (e.g. Base64, Double URL encoding, JavaScript escape)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Sudharshan R**
Cybersecurity Student | Aspiring Security Analyst

- GitHub: [Code1nception](https://github.com/Code1nception)
- LinkedIn: [sudhar-shan-r](https://www.linkedin.com/in/sudhar-shan-r)
- HackerRank: [its_sudharshan_1](https://www.hackerrank.com/its_sudharshan_1)

---

⭐ If you found this project helpful for learning, consider giving it a star on GitHub!
