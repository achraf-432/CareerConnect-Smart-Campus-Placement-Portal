
# 🎓 CareerConnect – Smart Campus Placement Portal

CareerConnect is a smart, AI-driven platform built to streamline and modernize the campus placement process. It provides students with personalized skill assessments, resume feedback, proctored aptitude and technical tests, and mock interviews. Designed for both students and Training & Placement Officers (TPOs), this portal enables end-to-end placement management.

[![GitHub license](https://img.shields.io/github/license/your-username/CareerConnect)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/your-username/CareerConnect)](https://github.com/your-username/CareerConnect/issues)
[![GitHub stars](https://img.shields.io/github/stars/your-username/CareerConnect)](https://github.com/your-username/CareerConnect/stargazers)

---

## 🚀 Features

### 👨‍🎓 Student Portal

- 📊 Aptitude Test & Analysis  
  Take AI-proctored aptitude tests and visualize your results in a dynamic dashboard.

- 💻 DSA Practice & Analysis  
  Solve coding questions and review performance across time using charts and metrics.

- 🎙️ Mock Interviews  
  Get real-time facial analysis and AI-powered feedback during simulated interview sessions.

- 🧾 Resume Builder  
  Build resumes with modern templates and export PDFs.

- 📑 Resume ATS Scoring  
  Receive insights on resume formatting, keyword relevance, and ATS compatibility.

- 📢 Announcements  
  Stay informed with updates from your TPO or placement cell.

- 🙍‍♂️ Profile Management  
  Edit, view, and update your student profile and test history.

---

### 🧑‍🏫 TPO & Company Dashboard

- 🔍 View Student Performance  
  Easily monitor aptitude, DSA, and mock interview metrics per student.

- 💼 Post Jobs  
  Add job/internship listings visible to eligible students.

---

## 🖼️ Screenshots

1. Homepage  
2. Student Dashboard  
3. Aptitude Test with Face Recognition  
4. Aptitude Analysis  
5. Technical Test  
6. Mock Interview  
7. Resume Builder  
8. Resume ATS  
9. TPO/Company Dashboard  

Screenshots should be placed in the /screenshots directory and referenced as needed.

---

## ⚙️ How to Run

⚠️ While the directory structure may seem a bit cluttered, simply follow the instructions below step-by-step to run the complete project successfully.

Make sure MongoDB is connected and Node.js is installed.

1. Start backend server:
```bash
node server.js
```

2. Start Aptitude Module:
```bash
cd Aptitude
streamlit run AptiApp.py
```

3. Aptitude Analysis Dashboard:
```bash
cd Aptitude
streamlit run InteractiveDashboard.py
```

4. DSA Practice:
```bash
cd CodingPract
streamlit run DSA_app_db.py
```

5. DSA Performance Dashboard:
```bash
cd CodingPract
streamlit run DSA_dash.py
```

6. Mock Interview:
```bash
cd MockInter
streamlit run app.py
```

7. Resume Analysis (Builder and ATS):
```bash
cd ResumeATS
streamlit run app.py
```

8. Launch frontend:
```bash
start index.html
```

---

## 🪪 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
