# 🛡️ HTTP Security Header Analyzer

A lightweight browser-based cybersecurity tool built with **HTML, CSS, and Vanilla JavaScript** to inspect HTTP response information and identify commonly used security headers.

This project was created as part of my JavaScript learning journey, with a focus on understanding **HTTP responses, security headers, asynchronous JavaScript, browser APIs, and CORS** from a cybersecurity perspective.

---

## 📸 Preview

<img width="574" height="590" alt="Image" src="https://github.com/user-attachments/assets/dee33a37-026d-4dde-9f4b-c7cefdb3471b" />

---

## ✨ Features

* Analyze a URL using the browser `fetch()` API
* Display HTTP status code
* Display HTTP status message
* Display response `Content-Type`
* Inspect available HTTP response headers
* Check commonly used security headers:

  * Content-Security-Policy
  * Strict-Transport-Security
  * X-Content-Type-Options
  * X-Frame-Options
  * Referrer-Policy
* Calculate a basic security-header score
* Display missing security headers
* Handle HTTP errors
* Handle network/fetch errors
* Responsive interface
* Dark cybersecurity-themed UI
* Built without external JavaScript frameworks

---

## 🔐 Security Headers Checked

The project currently checks **5 security-related HTTP response headers**.

| Security Header           | Purpose                                                    |
| ------------------------- | ---------------------------------------------------------- |
| Content-Security-Policy   | Helps control which resources a browser is allowed to load |
| Strict-Transport-Security | Helps enforce HTTPS connections                            |
| X-Content-Type-Options    | Helps prevent MIME-type sniffing                           |
| X-Frame-Options           | Helps control whether a page can be embedded in frames     |
| Referrer-Policy           | Controls how much referrer information is sent             |

---

## 📊 Security Header Score

The tool calculates a simple score based on whether the five selected headers are present.

```text
Security Header Score = Present Security Headers / 5
```

For example:

```text
Security Header Score: 4 / 5
```

This score is intended for **learning and quick inspection only**. It does not represent a complete security assessment of a website.

---

## 🧠 How It Works

The application uses JavaScript's `fetch()` API to request the URL entered by the user.

The basic flow is:

```text
User enters URL
       ↓
JavaScript reads input
       ↓
fetch() sends HTTP request
       ↓
Browser receives response
       ↓
Read status + response headers
       ↓
Check security headers
       ↓
Calculate score
       ↓
Display results
```

---

## ⚠️ CORS Limitation

Because this project runs entirely inside the browser, it is affected by the browser's **Same-Origin Policy and CORS restrictions**.

Some websites may return:

```text
TypeError: Failed to fetch
```

or:

```text
Access to fetch ... has been blocked by CORS policy
```

This does **not necessarily mean that the target website is down or insecure**.

It means the browser is preventing the frontend JavaScript application from reading the response because the target server has not permitted the cross-origin request.

### Why this matters

Understanding this limitation helped me learn an important web-security concept:

```text
Browser
   ↓
JavaScript fetch()
   ↓
Cross-Origin Request
   ↓
CORS Policy
   ↓
Response may be blocked
```

A production-grade version would require a server-side component or another architecture rather than attempting to bypass browser security controls.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API
* HTTP Response Headers
* Browser APIs
* Async/Await
* Try/Catch Error Handling

---

## 📂 Project Structure

```text
HTTP-Security-Header-Analyzer/
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

Open the HTTP Security Header Analyzer project folder.
```bash
cd HTTP-Security-Header
```

### Run the Project

You can open `index.html` directly in a browser.

For the best development experience, use **VS Code Live Server**.

---

## 💡 Example

Enter a URL:

```text
https://example.com
```

If the browser allows the request, the application displays information such as:

```text
Status Code : 200
Status : OK
Content-type : text/html

Security Headers

Security Header Score : 2 / 5

Content-Security-Policy : ❌ Not Found
Strict-Transport-Security : ✔ Present
X-Content-Type-Options : ✔ Present
X-Frame-Options : ❌ Not Found
Referrer-Policy : ❌ Not Found
```

The exact results depend on the target server's response.

---

## 📚 What I Learned

Through this project, I practiced:

* Using `fetch()` to make HTTP requests
* Working with `async/await`
* Handling asynchronous JavaScript
* Using `try/catch` for error handling
* Reading HTTP status codes
* Reading HTTP response headers
* Using `response.headers.get()`
* Using `response.headers.forEach()`
* Working with template literals
* Updating HTML dynamically using `innerHTML`
* Understanding browser CORS restrictions
* Understanding the Same-Origin Policy
* Learning the purpose of common HTTP security headers
* Building a simple security-oriented scoring system

---

## 🔎 Cybersecurity Relevance

This project helped connect JavaScript fundamentals with practical web-security concepts.

Security headers are an important part of a web application's defensive configuration. Inspecting them can provide useful information during **web application security testing and security research**.

However, this tool is intentionally limited to basic header presence checks and should **not** be considered a vulnerability scanner or complete security assessment tool.

---

## 🚧 Current Limitations

* Browser CORS restrictions can prevent analysis of many websites
* Only five security headers are currently checked
* The scoring system checks header presence rather than configuration quality
* It does not analyze the actual security quality of header values
* It does not crawl websites
* It does not perform vulnerability testing
* It does not replace professional security testing tools

---

## 🔮 Future Improvements

Possible improvements for future versions:

* [ ] Add more security headers
* [ ] Analyze security-header values instead of only checking presence
* [ ] Improve the security scoring system
* [ ] Add severity levels
* [ ] Add detailed explanations for missing headers
* [ ] Add URL validation
* [ ] Add loading indicator
* [ ] Improve result visualization
* [ ] Add exportable security reports
* [ ] Build a backend version to handle server-side requests
* [ ] Add automated security-header recommendations

---

## 🎯 Learning Goal

The main goal of this project was not to build a complete security scanner.

It was to understand how **JavaScript interacts with HTTP responses** and connect that knowledge with practical cybersecurity concepts.

This project is part of my ongoing journey of learning **JavaScript for cybersecurity and web application security**.

---

## 👨‍💻 Author

**Sudharshan** — [@Code1nception](https://github.com/Code1nception)

Cybersecurity student focused on developing practical skills in **web application security, penetration testing, and cybersecurity research**.

---

## ⭐ Support

If you find this project useful for learning, consider giving the repository a ⭐.

More cybersecurity-focused JavaScript projects will be added as I continue learning.
