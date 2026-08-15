# 🛡️ JS Mini Cybersecurity Projects

**A collection of browser-based security tools built with vanilla HTML, CSS, and JavaScript — no frameworks, no backend, no dependencies.**

Each project in this repository is a self-contained utility that mirrors a real tool used during web application security testing, bug bounty recon, and CTF challenges: decoding JWTs, checking password strength, parsing URLs, inspecting HTTP security headers, encoding XSS payloads, and Base64 encoding/decoding. The goal of this repository is to learn JavaScript fundamentals (DOM manipulation, Regex, Fetch/Clipboard/URL APIs, async/await, error handling) by building tools that are directly useful in cybersecurity work — not generic to-do apps.

<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Dependencies-None-success?style=flat-square" />
  <img src="https://img.shields.io/badge/Backend-None-lightgrey?style=flat-square" />
  <img src="https://img.shields.io/badge/status-actively--maintained-brightgreen?style=flat-square" />
</p>

---

## 📌 Table of Contents

- [About This Repository](#-about-this-repository)
- [Projects](#-projects)
  - [1. JWT Token Decoder](#1--jwt-token-decoder)
  - [2. Password Strength Checker](#2--password-strength-checker)
  - [3. Simple URL Parser](#3--simple-url-parser)
  - [4. HTTP Security Header Analyzer](#4--http-security-header-analyzer)
  - [5. XSS Payload Encoder](#5--xss-payload-encoder)
  - [6. Base64 Encoder / Decoder](#6--base64-encoder--decoder)
- [Repository Structure](#-repository-structure)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Skills Practiced Across This Repository](#-skills-practiced-across-this-repository)
- [Roadmap](#-roadmap)
- [Disclaimer](#️-disclaimer)
- [Author](#-author)
- [Support](#-support)

---

## 🎯 About This Repository

Most "learn JavaScript" projects are calculators, to-do lists, or weather apps. This repository takes a different approach — every project is a **mini security tool** that reflects something a penetration tester, bug bounty hunter, or SOC analyst actually touches day-to-day:

| What analysts do manually | What this repo builds |
|---|---|
| Decode a JWT to inspect claims | [JWT Token Decoder](#1--jwt-token-decoder) |
| Judge whether a password meets policy | [Password Strength Checker](#2--password-strength-checker) |
| Break a URL apart to inspect query params | [Simple URL Parser](#3--simple-url-parser) |
| Check if a target sends security headers | [HTTP Security Header Analyzer](#4--http-security-header-analyzer) |
| Encode payloads to test input sanitization / WAF bypass | [XSS Payload Encoder](#5--xss-payload-encoder) |
| Decode Base64 blobs found in requests, tokens, configs | [Base64 Encoder / Decoder](#6--base64-encoder--decoder) |

Every project is:
- ✅ **Zero-dependency** — pure HTML, CSS, and JavaScript, runs by opening `index.html`
- ✅ **Client-side only** — nothing leaves the browser, no server, no data collection
- ✅ **Documented** — each folder has its own README covering how it works, what was learned, and current limitations
- ✅ **Honest about scope** — these are learning tools, not replacements for production-grade security scanners

---

## 🧩 Projects

### 1. 🔐 JWT Token Decoder
Decodes a JSON Web Token into its **Header**, **Payload**, and **Signature**, displayed in a clean card-based UI with copy-to-clipboard support for each section.

- Splits the token on `.` and Base64-decodes the header/payload with `atob()`
- Detects and reports malformed/invalid tokens via `try...catch`
- Renders decoded JSON dynamically using `Object.entries()` + template literals

**Relevance:** JWTs are everywhere in modern auth flows — inspecting claims (`role`, `admin`, `exp`) is one of the first things testers check for privilege-escalation or token-tampering issues.

📁 [`/JWT-Decoder`](./JWT-Decoder) &nbsp;|&nbsp; 📄 [Project README](./JWT-Decoder/Readme.md)

---

### 2. 🔑 Password Strength Checker
Evaluates a password in real time against five common policy requirements and returns a live score, strength label, and progress bar.

- Checks: length ≥ 8, uppercase, lowercase, digit, special character
- Scoring: `0–2 → Weak`, `3 → Fair`, `4–5 → Strong`
- Built entirely with Regex `.test()` and the `input` event for live feedback

**Relevance:** Understanding *why* a password is weak — and how naive scoring rules can be modeled and bypassed — is foundational to both defensive policy design and offensive credential attacks.

📁 [`/Password_Checker`](./Password_Checker) &nbsp;|&nbsp; 📄 [Project README](./Password_Checker/readme.md)

---

### 3. 🔗 Simple URL Parser
Breaks a URL into its components — protocol, hostname, pathname, and query parameters — using the browser's native `URL` and `URLSearchParams` APIs.

- Extracts specific query values (e.g. `username`, `role`, `id`)
- Gracefully handles malformed URLs with `try...catch`
- No manual regex/string-splitting — relies on the standard URL API

**Relevance:** Quickly deconstructing a URL is routine during recon and bug bounty triage — spotting IDOR-prone parameters (`id=`, `role=`) or open-redirect targets starts here.

📁 [`/URL-Parser`](./URL-Parser) &nbsp;|&nbsp; 📄 [Project README](./URL-Parser/Readme.md)

---

### 4. 🛡️ HTTP Security Header Analyzer
Fetches a target URL and inspects its response for five widely used security headers, then produces a simple presence-based security score.

- Checks: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
- Uses `fetch()`, `response.headers.get()` / `.forEach()`, and async/await
- Documents the CORS/Same-Origin limitation transparently rather than trying to bypass it

**Relevance:** Missing security headers are a common, low-effort finding in web app assessments — this tool mirrors (at a basic level) what tools like SecurityHeaders.com or Burp's passive scanner check for.

📁 [`/HTTP-Security-Header`](./HTTP-Security-Header) &nbsp;|&nbsp; 📄 [Project README](./HTTP-Security-Header/README.md)

---

### 5. 🧪 XSS Payload Encoder
Encodes a given payload into **URL**, **HTML Entity**, **Unicode**, and **Hexadecimal** formats side by side, to study how different encoding schemes affect payload execution and sanitization.

- URL encoding via `encodeURIComponent()`
- HTML entity encoding via targeted `.replace()` + regex (`& < > " '`)
- Manual Unicode (`\uXXXX`) and hex byte encoding via `charCodeAt()`
- Dark, terminal-styled UI designed to resemble a real security tool

**Relevance:** Understanding the difference between encoding schemes — and *why* HTML-entity encoding neutralizes `<script>` while URL encoding alone does not — is core to both writing XSS payloads for authorized testing and building proper output-encoding defenses.

📁 [`/XSS-Payload-Encoder`](./XSS-Payload-Encoder) &nbsp;|&nbsp; 📄 [Project README](./XSS-Payload-Encoder/README.md)

---

### 6. 🔐 Base64 Encoder / Decoder
A straightforward encoder/decoder built on JavaScript's native `btoa()` / `atob()`, with copy-to-clipboard and invalid-input handling.

- Encodes plain text to Base64 and decodes it back
- Catches and reports invalid Base64 input instead of throwing unhandled errors
- Explicitly documents that **Base64 is encoding, not encryption**

**Relevance:** Base64 shows up constantly in HTTP traffic, JWTs, API payloads, config files, and CTF challenges — being able to quickly encode/decode it is a baseline skill for reading raw security data.

📁 [`Base64 Encoder∕Decoder`](<./Base64 Encoder∕Decoder>) &nbsp;|&nbsp; 📄 [Project README](<./Base64 Encoder∕Decoder/README.md>)

---

## 🗂 Repository Structure

```text
JS-Mini-Cybersecurity-projects/
│
├── JWT-Decoder/
│   ├── index.html
│   ├── index.js
│   ├── style.css
│   └── Readme.md
│
├── Password_Checker/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── readme.md
│
├── URL-Parser/
│   ├── index.html
│   ├── index.js
│   ├── style.css
│   └── Readme.md
│
├── HTTP-Security-Header/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── README.md
│
├── XSS-Payload-Encoder/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── README.md
│
├── Base64 Encoder∕Decoder/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── README.md
│
└── README.md   ← you are here
```

Every project follows the same self-contained pattern: `index.html` (structure) + `style.css` (styling) + a JS file (logic) + its own `README.md` (documentation). This makes each folder independently cloneable and reviewable.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Flexbox / Grid, responsive layouts, dark UI theming) |
| Logic | Vanilla JavaScript (ES6+) |
| Browser APIs used | `fetch()`, `URL` / `URLSearchParams`, Clipboard API, `btoa()` / `atob()` |
| Tooling | None required — no bundler, no package manager, no build step |

No frameworks (React, Vue, etc.) and no npm dependencies are used anywhere in this repository by design — the point is to build a solid grip on plain JavaScript and browser APIs before layering tooling on top.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/Code1nception/JS-Mini-Cybersecurity-projects.git
cd JS-Mini-Cybersecurity-projects
```

Open any project by navigating into its folder and opening `index.html` directly in a browser:

```bash
cd JWT-Decoder
# then just open index.html in your browser
```

For live-reload during development, use the **VS Code Live Server** extension. No `npm install`, no build step, no server required for any project.

---

## 📚 Skills Practiced Across This Repository

- DOM manipulation (`getElementById`, `innerHTML`, event listeners)
- Regular Expressions for validation and sanitization
- Native browser APIs: `URL`, `fetch`, Clipboard, `btoa`/`atob`
- Asynchronous JavaScript (`async`/`await`, Promises, `setTimeout`)
- Defensive coding with `try...catch` for malformed/invalid input
- Practical web-security concepts: JWT structure, password policy, CORS/Same-Origin Policy, HTTP security headers, output encoding vs. XSS, Base64 vs. encryption

---

## 🔮 Roadmap

- [ ] Add a landing page (`index.html` at repo root) linking out to all six tools
- [ ] Migrate shared UI styling into a common theme/component set
- [ ] Add a Regex/Payload Cheatsheet tool
- [ ] Add a Hash Generator (MD5 / SHA-1 / SHA-256) tool
- [ ] Add a simple client-side Subnet / CIDR calculator
- [ ] Convert one or more tools into a small Node.js/Express backend version for comparison learning
- [ ] Add unit tests for the parsing/encoding logic

---

## ⚠️ Disclaimer

These are **educational tools** built for learning JavaScript and foundational web-security concepts. They are not production-grade security scanners and should not be treated as a substitute for professional tooling (Burp Suite, OWASP ZAP, etc.).

Any payload-encoding or header-analysis tool in this repository is intended for use only on **systems you own or are explicitly authorized to test**. The author is not responsible for misuse.

---

## 👨‍💻 Author

**Sudharshan R** — [@Code1nception](https://github.com/Code1nception)

Final-year B.Sc. Cybersecurity student building toward penetration testing / VAPT and SOC analyst roles.

- GitHub: [Code1nception](https://github.com/Code1nception)
- LinkedIn: [sudhar-shan-r](https://www.linkedin.com/in/sudhar-shan-r)
- HackerRank: [its_sudharshan_1](https://www.hackerrank.com/its_sudharshan_1)

---

## ⭐ Support

If this repository helped you learn something, consider giving it a star — it helps others discover it too.

More cybersecurity-focused JavaScript projects will be added as this collection grows.
