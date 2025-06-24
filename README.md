# 🎓 CareerConnect – Smart Campus Placement Portal

[![GitHub license](https://img.shields.io/github/license/xHarshit/CareerConnect-Smart-Campus-Placement-Porta)](https://github.com/xHarshit/CareerConnect-Smart-Campus-Placement-Porta/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/xHarshit/CareerConnect-Smart-Campus-Placement-Porta)](https://github.com/xHarshit/CareerConnect-Smart-Campus-Placement-Porta/issues)
[![GitHub stars](https://img.shields.io/github/stars/xHarshit/CareerConnect-Smart-Campus-Placement-Porta)](https://github.com/xHarshit/CareerConnect-Smart-Campus-Placement-Porta/stargazers)


CareerConnect is an integrated **AI-powered platform** designed to streamline and elevate the campus placement experience for **students**, **training and placement officers (TPOs)**, and **recruiters**.

It features advanced modules for **resume building**, **aptitude & technical tests**, **AI-proctored interviews**, and **performance analytics**, making students industry-ready and boosting placement outcomes.

> ⚠️ Note: The repository structure may seem a bit disorganized, but running each component step-by-step as shown below will successfully launch the full project.

---

## 🚀 Features

### 👨‍🎓 Student Portal

- **📊 Aptitude Test**  
  Timed logical reasoning tests with automatic scoring and face recognition-based proctoring.

- **📈 Aptitude Analysis Dashboard**  
  Topic-wise performance visualizations including accuracy, speed, and strength analysis.

- **💻 DSA Coding Test**  
  Real-time coding environment with question tracking and attempt logging.

- **📉 DSA Performance Dashboard**  
  Monitor scores, improvement history, and accuracy for each coding attempt.

- **🎙️ AI-Proctored Mock Interviews**  
  Real-time webcam-based interviews with attention tracking and expression monitoring.

- **🧾 Resume Builder**  
  Create and download structured, professional resumes.

- **📄 Resume ATS Scoring**  
  Get resume scores based on ATS keyword compatibility.

- **📢 Announcements**  
  View placement updates and notifications from TPOs.

- **🙍 Student Profile**  
  Manage academic/personal info and view individual test/interview performance.

---

### 🧑‍🏫 TPO & Company Dashboard

- 📊 Monitor student readiness with analytics  
- 📋 Post jobs, internships, or announcements  
- 📈 Export reports on aptitude, coding, and interview performance

---

## 🧠 Tech Stack

| Layer         | Technologies                                           |
|---------------|--------------------------------------------------------|
| **Frontend**  | HTML, CSS, Streamlit                                  |
| **Backend**   | Node.js, Python                                       |
| **ML/AI**     | OpenCV, TensorFlow, scikit-learn, face_recognition    |
| **Database**  | MongoDB                                               |

---

## 🛡️ AI Face Recognition Proctoring

- Real-time webcam face detection and tracking  
- Alerts for multiple faces or user looking away  
- Facial expression analysis during mock interviews  

---

## 🖼️ Screenshots

| Screenshot | Description                        |
|------------|------------------------------------|
| ![Screenshot 1](screenshots/homepage.png) | 1. Website Homepage                |
| ![Screenshot 2](screenshots/studentdashboard.png) | 2. Student Dashboard               |
| ![Screenshot 3](screenshots/aptitudetest.png) | 3. Aptitude Test with Face Recognition |
| ![Screenshot 4](screenshots/aptitudeanalysis.png) | 4. Aptitude Analysis               |
| ![Screenshot 5](screenshots/dsatest.png) | 5. Technical Coding Test           |
| ![Screenshot 6](screenshots/mockinterview.png) | 6. Proctored Mock Interview     |
| ![Screenshot 7](screenshots/resumebuilder.png) | 7. Resume Builder                  |
| ![Screenshot 8](screenshots/resumescanner.png) | 8. Resume ATS Result               |
| ![Screenshot 9](screenshots/admindashboard.png) | 9. Company / Admin Dashboard         |

---

## 🛠️ How to Run Locally

### Prerequisites

- [MongoDB](https://www.mongodb.com/try/download/community) installed and running  
- [Node.js](https://nodejs.org/en/download/) installed

---

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/your-username/CareerConnect.git
cd CareerConnect
```

2. **Start the Node.js server**

```bash
node server.js
```

3. **Run each Streamlit module in a new terminal:**

```bash
# Aptitude Test
cd Aptitude
streamlit run AptiApp.py

# Aptitude Dashboard
streamlit run InteractiveDashboard.py

# DSA Test
cd ../CodingPract
streamlit run DSA_app_db.py

# DSA Dashboard
streamlit run DSA_dash.py

# Mock Interview
cd ../MockInter
streamlit run app.py

# Resume Builder & ATS
cd ../ResumeATS
streamlit run app.py
```

4. **Launch the frontend**

Open `index.html` in a browser.

---

## 📈 Future Enhancements

- Add support for regional languages  
- Gamified tests with leaderboards  
- Real-time placement drive tracking  
- Admin dashboard with downloadable reports  
- SMS/Email notification integration  
- Mobile-friendly responsive design  

---

## 🪪 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

