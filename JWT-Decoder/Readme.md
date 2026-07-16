# 🔐 JWT Token Decoder

A lightweight JavaScript-based JWT Token Decoder that decodes JSON Web Tokens (JWTs) and displays the **Header**, **Payload**, and **Signature** in a clean and easy-to-read interface. This project was built to practice JavaScript fundamentals while learning about authentication tokens commonly used in web application security.

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
jwt-decoder/
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
git clone https://github.com/Code1nception/JS-Mini-Cybersecurity-projects/JWT-Decoder.git
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

- Understanding the structure of a JWT (Header, Payload, Signature)
- Using `atob()` to decode Base64-encoded JWT components
- Parsing JSON data using `JSON.parse()`
- Using `Object.entries()` to dynamically display key-value pairs
- Building dynamic HTML with template literals
- Handling invalid tokens using `try...catch`
- Implementing copy-to-clipboard functionality with the Clipboard API
- Creating a responsive card-based UI using HTML and CSS

---

## 🚀 Future Improvements

- Support Base64URL decoding (JWT standard)
- Verify JWT signatures
- Convert `exp`, `iat`, and `nbf` timestamps into readable dates
- Display token expiration status (Valid / Expired)
- Copy entire decoded token as JSON
- Export decoded data as JSON
- Mobile-responsive layout
- Dark/Light theme toggle

---

## 👨‍💻 Author

**Sudharshan** — [@Code1nception](https://github.com/Code1nception)

Cybersecurity student building toward red team / penetration testing work.

---

## ⭐ If you found this project useful, consider giving it a star!
