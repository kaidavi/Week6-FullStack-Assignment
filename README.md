# MERN Bug Tracker

## 📌 Project Overview
The **MERN Bug Tracker** is a full-stack web application that allows users to report, track, and manage bugs in a project. It includes CRUD functionality for bug management and integrates testing and debugging best practices.

## 🚀 Features
- **Create a Bug**: Users can submit bug reports with a title and description.
- **View Bugs**: A list of all reported bugs with their current statuses.
- **Update Bug Status**: Change bug status (Open, In-Progress, Resolved).
- **Delete Bugs**: Remove resolved or unnecessary bugs.
- **Testing & Debugging**: Implemented unit and integration tests for backend and frontend.
- **Error Handling**: Backend middleware and React error boundaries.

---

## 🏗️ Project Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/kaidavi/Week6-FullStack-Assignment.git
cd mern-bug-tracker
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```

#### Create a **.env** file and add:
```env
MONGO_URI=mongodb+srv://davidkai:<db_password>@cluster0.mtg4w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
```

#### Start Backend Server
```sh
npm run dev
```

### 3️⃣ Frontend Setup
```sh
cd ../frontend
npm install
npm start
```

---

## 📌 API Endpoints (Backend)
| Method | Endpoint       | Description         |
|--------|--------------|---------------------|
| GET    | /api/bugs    | Get all bugs        |
| POST   | /api/bugs    | Create a new bug    |
| PUT    | /api/bugs/:id | Update bug status  |
| DELETE | /api/bugs/:id | Delete a bug       |

---

## 🧪 Testing

### 🛠 Backend Tests (Jest & Supertest)
```sh
cd backend
npm test
```

### 🛠 Frontend Tests (React Testing Library)
```sh
cd frontend
npm test
```

---

## 🐞 Debugging Guide
- **Console Logs**: Track values in frontend/backend.
- **Chrome DevTools**: Inspect API requests and UI updates.
- **Node.js Inspector**: Debug backend with `node --inspect`.
- **Error Boundaries**: Handle React component crashes.

---

## 📜 Technologies Used
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js, Axios, React Router
- **Testing**: Jest, Supertest, React Testing Library

---