# 🔑 Password Strength Checker

A lightweight client-side password strength assessment tool built with **HTML, CSS, and Vanilla JavaScript**.

The project evaluates password input against a set of basic security requirements and provides real-time feedback through a score, strength classification, requirement checks, and a visual progress indicator.

This project was developed as part of my practical JavaScript and cybersecurity learning journey, with a focus on understanding **input validation, Regular Expressions, DOM manipulation, event-driven programming, and basic password security concepts**.



<img width="554" height="460" alt="Image" src="https://github.com/user-attachments/assets/932c10bf-62da-4765-b409-ac70e94b4a8e" />

---

## ✨ Features

* Analyze passwords in real time
* Check for:

  * Minimum 8 characters
  * Uppercase letters
  * Lowercase letters
  * Numbers
  * Special characters
* Calculate password strength using a scoring system
* Display password strength:

  * 🔴 Weak Password
  * 🟡 Fair Password Strength
  * 🟢 Strong Password
* Dynamic password requirements output
* Visual password strength progress bar
* Progress bar changes based on password strength
* Handle empty input fields
* Clean and simple interface
* Built using only HTML, CSS, and Vanilla JavaScript

---

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Regular Expressions (Regex)
* DOM Manipulation
* JavaScript Event Listeners

---

## 📂 Project Structure

```text
Password-Strength-Checker/
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

### Open the project

Navigate to the `Password-Strength-Checker` folder and open `index.html` in your browser.

No installation or dependencies are required.

---

## 💡 How It Works

The password is evaluated against five basic requirements:

```text
1. Password length is at least 8 characters
2. Contains an uppercase letter
3. Contains a lowercase letter
4. Contains a number
5. Contains a special character
```

Each satisfied requirement adds **1 point** to the password score.

### Strength Levels

```text
Score 0-2  → 🔴 Weak Password
Score 3    → 🟡 Fair Password Strength
Score 4-5  → 🟢 Strong Password
```

---

## 💡 Example

### Input

```text
Password@123
```

### Output

```text
🟢 Strong Password :)

✔ Length of The Password
✔ Uppercase Letter
✔ Lowercase Letter
✔ Numbers
✔ Special Characters
```

### Strength Bar

```text
████████████████████ 100%
```

---

## 📚 What I Learned

- Using the `input` event to analyze user input in real time
- Working with `.value` and `.length`
- Using Regular Expressions to detect:

  * Uppercase letters
  * Lowercase letters
  * Numbers
  * Special characters
- Understanding the `.test()` method
- Using `let` and `const` correctly
- Creating a password scoring system
- Using conditional statements to determine password strength
- Dynamically updating HTML using DOM manipulation
- Creating and updating a progress bar using JavaScript
- Changing CSS properties dynamically with JavaScript
- Handling empty input fields with validation and `return`
- Building a simple security-focused web application using Vanilla JavaScript

---

## 👨‍💻 Author

**Sudharshan** — [@Code1nception](https://github.com/Code1nception)

Cybersecurity student building toward red team / penetration testing work.

---

## ⭐ If you found this project useful, consider giving it a star!
