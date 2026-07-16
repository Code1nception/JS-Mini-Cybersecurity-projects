# 🔐 JWT Token Decoder

A lightweight JavaScript-based JWT Token Decoder that decodes JSON Web Tokens (JWTs) and displays the **Header**, **Payload**, and **Signature** in a clean, user-friendly interface. This project was built to practice JavaScript fundamentals while learning how JWT authentication works in modern web applications and web security.

<img width="782" height="542" alt="Image" src="https://github.com/user-attachments/assets/8953b9a0-5b85-4630-9664-93e99af9dbf1" />

---

## ✨ Features

* Decode valid JWT tokens
* Display:

  * Header
  * Payload
  * Signature
* Copy decoded:

  * Header
  * Payload
  * Signature
* Detect invalid JWT tokens
* Handle empty input
* Clean card-based interface
* Built using only HTML, CSS, and Vanilla JavaScript

---

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Browser Clipboard API
* Base64 Decoding (`atob()`)

---

## 📂 Project Structure

```text
JWT-Decoder/
│
├── index.html
├── style.css
├── index.js
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/Code1nception/JS-Mini-Cybersecurity-projects.git
```

### Navigate to the project

```bash
cd JS-Mini-Cybersecurity-projects/JWT-Decoder
```

### Open the project

Simply open `index.html` in your browser.

No installation or dependencies are required.

---

## 💡 Example

### Input

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqIp-QV30
```

### Output

```text
Header
alg : HS256
typ : JWT

Payload
sub   : 1234567890
name  : John Doe
admin : true
iat   : 1516239022

Signature
KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqIp-QV30
```

---

## 📚 What I Learned

- Understanding the structure of a JWT (Header, Payload, and Signature)
- Decoding Base64-encoded data using the browser's `atob()` function
- Parsing JSON objects with `JSON.parse()`
- Iterating through objects dynamically using `Object.entries()`
- Creating dynamic HTML with template literals
- Updating the DOM using `innerHTML`
- Handling invalid input with `try...catch`
- Implementing Copy-to-Clipboard functionality using the Clipboard API
- Building a clean card-based UI with HTML and CSS

---

## 🚀 Future Improvements

- Support Base64URL decoding (JWT standard)
- Convert `exp`, `iat`, and `nbf` timestamps into readable dates
- Display token expiration status (Valid / Expired)
- JWT Signature verification
- Export decoded data as JSON
- Dark / Light theme
- Mobile-responsive layout
- Drag & Drop JWT input

---


## 👨‍💻 Author

**Sudharshan** — [@Code1nception](https://github.com/Code1nception)

Cybersecurity student building toward red team / penetration testing work.

---

## ⭐ If you found this project useful, consider giving it a star!
