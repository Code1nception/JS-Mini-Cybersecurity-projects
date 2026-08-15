# 🔐 Base64 Encoder & Decoder

A lightweight browser-based cybersecurity utility built with **HTML, CSS, and Vanilla JavaScript** to encode and decode text using Base64.

This project was created as part of my JavaScript learning journey, with a focus on understanding **data encoding, DOM manipulation, browser APIs, input validation, error handling, and asynchronous JavaScript** from a cybersecurity perspective.

---

## 📸 Preview

<img width="727" height="595" alt="Image" src="https://github.com/user-attachments/assets/d1f54c34-830d-47fd-b0ce-ebc82d73b660" />

---

## ✨ Features

* Encode plain text into Base64
* Decode Base64 data into readable text
* Validate empty input
* Handle invalid Base64 data
* Copy encoded/decoded output to clipboard
* Clear input and output
* Responsive interface
* Simple cybersecurity-themed UI
* Built without external JavaScript frameworks

---

## 🔄 Encoding & Decoding

The project supports two main operations.

### Encode

Converts normal text into Base64 format.

```text
Input:
Hello World

Encoded:
SGVsbG8gV29ybGQ=
```

The application uses JavaScript's built-in `btoa()` function:

```javascript
const encoded = btoa(text);
```

### Decode

Converts Base64 data back into readable text.

```text
Input:
SGVsbG8gV29ybGQ=

Decoded:
Hello World
```

The application uses JavaScript's built-in `atob()` function:

```javascript
const decoded = atob(input.value);
```

---

## 🧠 How It Works

The basic application flow is:

```text
User enters text
       ↓
JavaScript reads input
       ↓
User selects Encode / Decode
       ↓
Process the input
       ↓
Generate result
       ↓
Display result
       ↓
User can copy or clear the result
```

---

## 📋 Copy Function

The application uses the browser's **Clipboard API** to copy the generated result.

```javascript
await navigator.clipboard.writeText(output.value);
```

After copying, the button temporarily changes:

```text
Copy
 ↓
Copied!
 ↓
1.5 seconds
 ↓
Copy
```

This helped me understand asynchronous JavaScript using `async` and `await`.

---

## ⚠️ Error Handling

The decoder uses `try...catch` to handle invalid Base64 input.

```javascript
try {

    const decoded = atob(input.value);

    output.value = decoded;

} catch (error) {

    output.value = "Invalid Base64 data.";

}
```

If invalid Base64 data is provided, the application displays an error instead of allowing the JavaScript operation to fail unexpectedly.

---

## 🔐 Cybersecurity Relevance

Base64 is frequently encountered during cybersecurity and web application security testing.

It can appear in:

* HTTP requests and responses
* API data
* JWT components
* Authentication-related data
* Configuration data
* Web application traffic
* CTF challenges
* Encoded parameters

Understanding Base64 is useful when analyzing data during **web application security testing and cybersecurity research**.

### Important

**Base64 is encoding, not encryption.**

It does not provide confidentiality or password protection.

```text
Hello World
     ↓
Base64 Encoding
     ↓
SGVsbG8gV29ybGQ=
```

Anyone who understands Base64 can decode it.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* DOM Manipulation
* Browser Clipboard API
* `btoa()`
* `atob()`
* Async/Await
* Try/Catch Error Handling
* `setTimeout()`

---

## 📂 Project Structure

```text
Base64-Encoder-Decoder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Code1nception/JS-Mini-Cybersecurity-projects.git
```

### Navigate to the Project

```bash
cd JS-Mini-Cybersecurity-projects
```

Open the Base64 Encoder & Decoder project folder.

```bash
cd Base64 Encoder∕Decoder
```

### Run the Project

Open `index.html` directly in a browser.

For the best development experience, use **VS Code Live Server**.

No external dependencies or package installation are required.

---

## 💡 Example

### Encoding

Enter:

```text
Cybersecurity
```

The application generates:

```text
Q3liZXJzZWN1cml0eQ==
```

### Decoding

Enter:

```text
Q3liZXJzZWN1cml0eQ==
```

The application generates:

```text
Cybersecurity
```

---

## 📚 What I Learned

Through this project, I practiced:

* DOM manipulation
* `document.getElementById()`
* Event listeners
* JavaScript functions
* Conditional statements
* Reading `.value`
* Updating `.value`
* `btoa()`
* `atob()`
* `try...catch`
* Clipboard API
* `navigator.clipboard.writeText()`
* `async` / `await`
* Promises
* `setTimeout()`
* Basic data encoding concepts

---

## 🚧 Current Limitations

* The implementation uses JavaScript's built-in `btoa()` and `atob()` functions
* Unicode characters such as some emojis and non-ASCII text may require additional handling
* The project only handles text input
* It does not provide encryption
* It does not provide secure storage
* It does not analyze cryptographic security

---

## 🎯 Learning Goal

The main goal of this project was not to build a complex encoding platform.

It was to strengthen my understanding of **JavaScript fundamentals and browser APIs** while connecting those concepts with practical cybersecurity use cases.

This project is part of my ongoing journey of learning **JavaScript for cybersecurity and web application security**.

---

## 👨‍💻 Author

**Sudharshan** — [@Code1nception](https://github.com/Code1nception)

Cybersecurity student focused on developing practical skills in **web application security, penetration testing, and cybersecurity research**.

---

## ⭐ Support

If you find this project useful for learning, consider giving the repository a ⭐.

More cybersecurity-focused JavaScript projects will be added as I continue learning.
