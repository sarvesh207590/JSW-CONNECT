# 🚌 JSWConnect: JSW Bus Management System

> A smart MERN-based web application developed during my internship at **JSW Steel Ltd., Dolvi** in December 2024, designed to efficiently manage JSW’s electric bus fleet — featuring real-time tracking and timetable management for employees and admins.

---

## 📌 Project Overview

**JSWConnect** is a full-stack web platform that enables:

- ✅ **Real-time tracking** of electric buses across the JSW Dolvi plant.
- ✅ **Admin dashboard** to manage and update bus schedules.
- ✅ **Responsive interface** for users to view bus timings.
- ✅ **Database integration** to store all route, schedule, and location data securely.

---

## 💻 Tech Stack (MERN)

| Component        | Technology Used             |
|------------------|--------------------------   |   
| Frontend         | React.js (Vite) + Bootstrap |
| Backend          | Node.js, Express.js         |
| Database         | MongoDB (with Mongoose)     |
| Realtime Data    | WebSocket / REST API        |
| Map Integration  | Leaflet.js / Google Maps API |
| Deployment       | (Optional) Render / Vercel / Heroku |

---

## 🚀 Features

### 👨‍💼 Admin Side
- Add/update/delete **bus schedules**.
- View **live location** of buses.
- Monitor **fleet status**.

### 🧑‍💻 User Side
- View upcoming bus timings.
- Live track bus on a map interface.
- Check route & ETA.

---

## 🌐 Real-Time Tracking

- Each EV bus is equipped with a **GPS device** that transmits location data via 4G.
- The backend server receives the coordinates using **Express APIs** or **WebSockets**.
- React frontend fetches this and displays it using **Google Maps API** or **Leaflet.js**.

---


