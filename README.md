# 📊 ResultPulse – Result Publishing & Analysis Platform

**ResultPulse** is a web-based academic result management system that simplifies and digitizes the entire process of publishing results and analyzing student performance. Designed with both administrative and student perspectives in mind, this full-stack application ensures efficient result handling and enhances transparency and accessibility.

---

## 🧠 Project Purpose

The primary goal of ResultPulse is to **strengthen backend development skills using Spring Boot**, while implementing a structured and functional frontend with React.js. The project also introduces secure OTP verification, dynamic data flow across entities like students, departments, and courses, and visual performance analysis.

---

## 🛠 Tech Stack

| Layer        | Technology            |
|--------------|------------------------|
| Frontend     | React.js, Tailwind CSS |
| Backend      | Spring Boot (Java)     |
| Database     | MySQL                  |
| Visualization| Lucid Charts           |
| API Testing  | Postman                |
| Mail Service | JavaMail (SMTP)        |

---

## 🔁 Complete Workflow Overview

### 🔐 Admin Flow
1. **Admin Registration**  
   - Inputs: Name, Email, Password  
   - Registers and stores admin securely in the database.

2. **Admin Login**
   - Step 1: Enter Email & Password  
   - Step 2: On correct credentials, system generates an OTP and sends it to registered email.

3. **OTP Verification**
   - Admin enters the OTP.
   - If correct, navigation proceeds to Admin Dashboard.

4. **Admin Dashboard Functionalities**
   - All the below modules are accessible only after successful authentication:

---

## 🧩 Core Modules

### 1️⃣ Department Management
- Add Department Name.
- Department ID is generated automatically.
- Department data acts as a backbone for student and course mappings.

### 2️⃣ Student Management
- Add Student with:
  - Name
  - Roll Number
  - Email
  - Password
  - Joining Year
  - Department ID (dropdown fetched from DB)

### 3️⃣ Course Management
- Add Courses with:
  - Course Name
  - Course Code
  - Credit Points
  - Semester

### 4️⃣ Topic Creation
- Admin creates Topics (used to group semester data).
- Each topic acts as an identifier to associate sets of course results.

### 5️⃣ Entering Student Marks
- Admin manually enters:
  - Roll No, Name, Joining Year
  - GPA, Course ID, Course Name, Credits, Acquired Credits
  - Course Remarks, Overall Remarks

---

## 🎓 Student Portal

### 1. Student Login
- Students log in using **Email** and **Password**.

### 2. Fetch Academic Records
- After login, students input their **Roll No** and **Name** to fetch their academic records.

### 3. View Marks & Performance Analytics
- All marks are displayed in tabular format.
- Lucid Charts visualize GPA, credits, and course performance across semesters.

### 4. PDF Report Download
- Option to **download a complete report** of student performance as a PDF.

---

## 🧠 Features Highlight

- 🔐 **Two-Step Authentication** for Admins via Email OTP
- 📂 Modular Entity Creation: Departments, Courses, Topics, Students
- 📈 Real-Time Result Visualization with Lucid Charts
- 📥 One-Click **PDF Export** for Students
- 🔄 Frontend-Backend API Integration using Axios
- ✨ Clean, functional UI built with React
- 📧 Email Service Integration for OTP

---

## 📦 Postman API Documentation

- All endpoints are tested and exported using Postman.
- The complete `.json` collection file is attached in the repo.
- You can import it into Postman and try out:
  - Admin registration
  - Login & OTP endpoints
  - CRUD operations for students, departments, topics, and courses
  - Student result endpoints
 
### My Postman Collections EndPoints
--- - 🔄 [Postman API Collection (JSON)](./Result%20Pulse.postman_collection.json)

## 🚧 Planned Improvements

| Area             | Goal                                                                 |
|------------------|----------------------------------------------------------------------|
| 🔐 Security       | Integrate **JWT Token Authentication** and **Spring Security**       |
| 🧩 Architecture   | Migrate from monolithic to **microservices**                         |
| 💅 Frontend       | Improve UI/UX with enhanced **design patterns** and **libraries**    |
| ⚙️ State Handling | Use tools like Redux or React Context for efficient state management |
| 📄 Reports        | Generate dynamic PDF reports using advanced reporting libraries      |

---

## Screenshots

### Admin Register
![WhatsApp Image 2025-05-16 at 08 07 11_8d970cf9](https://github.com/user-attachments/assets/a845850f-f50a-4e48-a70f-da33ffd013ae)
---
### Admin Login
![WhatsApp Image 2025-05-16 at 08 07 41_0ee20053](https://github.com/user-attachments/assets/b5fb4c5f-f7eb-477b-b8b3-f32e85959ea3)
---
### OTP Verification
![WhatsApp Image 2025-05-16 at 08 08 57_542446e7](https://github.com/user-attachments/assets/cdf676cf-bc50-421c-b014-a26b10dc7d4e)
---
### Admin Dashboard
![WhatsApp Image 2025-05-16 at 08 09 22_37510325](https://github.com/user-attachments/assets/e910fe47-05cd-44dc-8cb9-c83f8d0c2494)
---
### Adding Department
![WhatsApp Image 2025-05-16 at 08 10 03_0a3e0155](https://github.com/user-attachments/assets/619d4c0f-ba05-448a-b4af-5d65f4219d00)
---
### Adding Semester
![WhatsApp Image 2025-05-16 at 08 11 11_7338abc9](https://github.com/user-attachments/assets/4b1eded3-90f6-44ef-8927-09c1566b2049)
---
### Adding Student
![WhatsApp Image 2025-05-16 at 08 12 47_5b3d5150](https://github.com/user-attachments/assets/73eaa191-7e0e-43a4-8862-68c95dea2feb)
---
### Adding Course
![WhatsApp Image 2025-05-16 at 08 13 21_a0ed57cd](https://github.com/user-attachments/assets/f6d94909-a708-4be7-aa59-8924b58ec02a)
---
### Topic Creation
![WhatsApp Image 2025-05-16 at 08 14 37_c6286ebb](https://github.com/user-attachments/assets/59d68fab-5402-416a-9acf-b932b32bc735)
---
### Entering Mark Details
![WhatsApp Image 2025-05-16 at 08 16 38_24d854b4](https://github.com/user-attachments/assets/36b9ed58-c0d4-4991-a180-1523cc87912a)
---
### Student Login
![WhatsApp Image 2025-05-16 at 08 17 19_2092d85e](https://github.com/user-attachments/assets/ef7e5152-bb05-4867-90e6-ce3cfd6b4d10)
---
### Result Fetching and Analysis
![WhatsApp Image 2025-05-16 at 08 17 50_a8ab8858](https://github.com/user-attachments/assets/4df775fb-b9c5-4714-b925-8ebddf2ef0b2)
![WhatsApp Image 2025-05-16 at 08 18 08_1ece91de](https://github.com/user-attachments/assets/84a30749-bd96-4028-aef6-38f89fbbed1f)
![WhatsApp Image 2025-05-16 at 08 18 23_404bbb48](https://github.com/user-attachments/assets/38c040d2-d7f3-47b6-931e-332cf9398c1b)

### PDF Export 
- 📄 [View/Download](https://drive.google.com/file/d/16t4B4e_WzwR0oSdcyAzzLEg23AmJ9YPA/view?usp=sharing)



---

## 🎯 What I Learned

- ✔ Deep understanding of **Spring Boot operations**, data flow, and controller-service-repository design
- ✔ Implemented **OTP-based email verification system**
- ✔ Learned how to structure **multi-entity relationships** (Student → Department → Courses)
- ✔ Gained working knowledge of **React** and API integration
- ✔ Understood backend-driven project development with frontend support

---

## ⚠️ Disclaimer

> This project is primarily backend-focused and was built to **enhance Spring Boot skills**. The frontend is basic but fully functional to test and showcase backend functionality. UI/UX improvements are planned in future iterations.

---

## 📌 Getting Started

### 🔧 Installation Steps

```bash
# Clone the repo
git clone https://github.com/your-username/resultpulse.git

# Backend Setup
cd backend
Import the project into your favorite Java IDE (IntelliJ, Eclipse)
Configure MySQL in `application.properties`
Run the Spring Boot app

# Frontend Setup
cd frontend
npm install
npm start
