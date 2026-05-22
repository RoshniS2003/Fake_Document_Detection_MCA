# Software Requirements Specification (SRS)

## Fake News & Document Detection System

**Prepared By:** Roshni Sahu  
**ERP No.:** RU-25-11214  
**Date:** 21.05.2026  

---

# 1. Introduction

This document describes the software requirements for the **Fake News & Document Detection System**, a browser-based web application. The application allows authenticated users to upload documents and instantly receive a verdict indicating whether the document is real or fake.

The system is developed using **HTML5, CSS3, and JavaScript (ES6)** and operates entirely on the client side without requiring a backend server or database.

---

# 2. Purpose and Scope

The purpose of this project is to demonstrate a simple prototype for document authenticity detection through a secure login-based interface.

### Scope of the System

- User authentication using predefined credentials
- File upload functionality
- Simulated fake/real document detection
- Browser-based execution without installation
- Academic demonstration project only

---

# 3. Functional Requirements

| FR ID | Feature | Description |
|-------|---------|-------------|
| FR-01 | User Login | Users must enter valid credentials (`roshni` / `123`) to access the system |
| FR-02 | Login Validation | Invalid credentials display an error message without refreshing the page |
| FR-03 | File Upload | Logged-in users can browse and upload files from their device |
| FR-04 | Upload Validation | If no file is selected, the system displays a warning message |
| FR-05 | Detection Result | The system displays either **REAL DOCUMENT** or **FAKE DOCUMENT** after checking |

---

# 4. Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| Performance | Detection results should appear instantly (under 200ms) |
| Usability | Simple and user-friendly interface |
| Compatibility | Supports Chrome, Firefox, Edge, and Safari browsers |
| Portability | Runs directly in browser without installation |
| Security | Upload panel remains hidden until successful login |

---

# 5. Software and Hardware Requirements

| Type | Requirement |
|------|-------------|
| Operating System | Windows, macOS, Linux, Android, iOS |
| Browser | Chrome 90+, Firefox 88+, Edge 90+, Safari 14+ |
| Frontend Technology | HTML5, CSS3, JavaScript (ES6) |
| Backend | Not Required |
| Database | Not Required |
| Storage Space | Approximately 5 KB |
| RAM | Minimum 512 MB |
| Processor | 1 GHz or faster |

---

# 6. Project Files

| File Name | Purpose |
|-----------|---------|
| `index.html` | Contains the structure of login and upload forms |
| `style.css` | Handles UI styling, layout, and visual design |
| `script.js` | Implements authentication and detection logic |

---

# 7. System Constraints

- Login credentials are hardcoded inside the JavaScript file.
- Detection results are randomly generated using `Math.random()`.
- No actual AI or document analysis engine is implemented.
- Application data is not stored permanently.
- Refreshing the page resets the application state.
- Only one user account is supported.

---

# 8. Conclusion

The Fake News & Document Detection System is a lightweight frontend-based academic project designed to simulate document authenticity detection. The project demonstrates basic web development concepts such as authentication, file handling, and dynamic UI updates using HTML, CSS, and JavaScript.