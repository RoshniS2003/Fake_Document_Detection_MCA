# Fake Document Detection System - MCA Project

## Student Details
**Name:** Roshni Sahu  
**ERP:** RU-25-11214  
**Course:** MCA 2nd Semester  
**Subject:** Full Stack Development  
**Year:** 2025-2026

## Abstract
The Fake Documents Detection System is an AI-powered web application designed to analyze uploaded documents and determine their authenticity with high accuracy. The system leverages Claude AI Vision API, enabling users to simply upload a document — such as an ID card, certificate, passport, or official letter — and receive an instant authenticity verdict along with detailed forensic analysis and confidence indicators.

The rise of digitally forged and tampered documents poses serious threats to academic institutions, financial organizations, and government agencies. This project addresses that gap by providing an intelligent, accessible, and easy-to-use document verification tool.

## Objectives
- Allow users to upload document images through a user-friendly web interface
- Integrate Claude AI Vision model to analyze the document and determine authenticity with a confidence score
- Display detailed forensic analysis including tampering indicators and verdict explanation
- Support drag-and-drop and file-picker based document input for convenience
- Provide a real-time, responsive experience with loading states and error handling

## Tech Stack
| Component | Details |
| --- | --- |
| **Frontend** | HTML5, CSS3, JavaScript / React.js |
| **AI API** | Claude AI (Anthropic) Vision API |
| **Domain** | Artificial Intelligence, Computer Vision, Document Forensics |
| **Platform** | Web-based Application |
| **Browser** | Google Chrome, Mozilla Firefox, Edge |

##  How It Works
1. **Document Input:** User uploads document image via drag-and-drop or file-picker. Supported formats: JPG, PNG, PDF, WEBP
2. **Base64 Encoding:** Document file is converted to Base64 format for API
3. **API Call:** Encoded document sent to Claude AI API with forensic prompt to examine layout, font uniformity, seal authenticity, metadata anomalies
4. **Response Parsing:** API returns authenticity verdict, confidence score, red flags detected, forensic breakdown
5. **Result Display:** Parsed result rendered in clean card layout showing REAL/FAKE with color indicators

## Features
- **Login System:** Secure login screen. Only authorized users can access the document checker
- **Document Upload Interface:** Upload JPG, PNG, or PDF for authenticity verification
- **Real-Time Analysis:** Instant AI-based analysis process
- **Output Display:** 
    - Genuine Document → "REAL DOCUMENT" in green color
    - Tampered Document → "FAKE DOCUMENT" in red color
- **Forensic Breakdown:** Shows confidence score, red flags, and recommendations

## System Requirements
**Hardware:** Intel Core i3 or above, 4GB RAM minimum, 500MB storage, Internet connection  
**Software:** Windows 10/11, macOS, or Linux. VS Code, Node.js v18+ for React

## How to Run This Project
1. Clone this repository: `git clone https://github.com/RoshniS2003/Fake_Document_Detection_MCA.git`
2. Open `index.html` in browser
3. Login using: Username: `roshni`, Password: `123`
4. Upload document and click "Check"

## Future Enhancements
- Expand support to passports, visas, financial statements, legal contracts
- Add batch upload functionality for organizations
- Implement camera capture feature for mobile users to scan documents in real time
- Introduce user accounts to save verification history and audit trails
- Add detailed forensic heatmap overlay highlighting tampered regions
- Train custom deep learning model fine-tuned on document forgery datasets

## References
1. Anthropic, "Claude API Documentation" - https://docs.anthropic.com
2. H. Farid, "Image Forgery Detection," IEEE Signal Processing Magazine, 2009
3. React Documentation - https://react.dev

---
**Department of SOIT | MCA 2nd Semester Project**