# 🔗 Simple URL Parser
A lightweight JavaScript-based URL Parser that extracts useful information from a URL using the browser's built-in URL API. This project was built to practice JavaScript fundamentals while creating a practical tool useful for web application security and bug bounty learning.

<img width="440" height="397" alt="Image" src="https://github.com/user-attachments/assets/35a1d66c-92c6-4089-a556-918d6eb238a2" />

---

## ✨ Features

* Parse valid URLs
* Display:

  * Protocol
  * Hostname
  * Pathname
  * Query Parameters
* Extract specific query parameter values

  * Username
  * Role
  * ID
* Detect invalid URLs
* Handle empty input
* Simple and responsive interface
* Built using only HTML, CSS, and Vanilla JavaScript

---

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Browser URL API

---

## 📂 Project Structure

```
url-parser/
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
git clone https://github.com/Code1nception/url-parser.git
```

### Open the project

Simply open `index.html` in your browser.

No installation or dependencies are required.

---

## 💡 Example

### Input

```
https://example.com/login?username=admin&id=5&role=user
```

### Output

```
Protocol  : https:
Hostname  : example.com
Pathname  : /login
Query      : username=admin&id=5&role=user
Username   : admin
Role       : user
ID Number  : 5
```

---

## What I Learned

- How the native `URL` constructor parses a string into usable components
- Using `URLSearchParams` to pull specific values instead of splitting strings manually with regex
- Handling bad input gracefully with `try...catch`
- DOM manipulation and event listeners for a simple interactive UI
- Small UI decisions (hover states, spacing, layout) that make a tiny project feel finished

---

## Future Improvements

- Parse *all* query parameters dynamically instead of only three hardcoded ones
- Copy parsed output to clipboard
- Display each URL component as a separate card
- Export results as JSON
- Mobile-responsive layout
- History of recently parsed URLs

---

## Author

**Sudharshan** — [@Code1nception](https://github.com/Code1nception)

Cybersecurity student building toward red team / penetration testing work.

---

## ⭐ If you found this project useful, consider giving it a star!


