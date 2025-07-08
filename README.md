Internship Project - EVENT SUPPORT TICKET SYSTEM
Overview: This repository contains the source code for the Internship Project - Event Scheduling and Ticketing System (ESTS). 
It is a full-stack application with both backend and frontend components.

File Structure:

Backend
controllers/
  → authController.js
  → bookingController.js
  → eventController.js
middleware/
  → authMiddleware.js
models/
  → Booking.js
  → Event.js
  → User.js
routes/
  → authRoutes.js
  → bookingRoutes.js
  → eventRoutes.js
→ .env
→ db.js
→ package-lock.json
→ package.json
→ server.js

Frontend:
node_modules/
public/
  → index.html
src/
  context/
    → AuthContext.js
  pages/
    → Admin.js
    → Dashboard.js
    → Events.js
    → Login.js
    → Register.js
  → api.js
  → App.js
  → index.css
  → index.js
  → .env
→ package-lock.json
→ package.json
→ postcss.config.js
→ tailwind.config.js

→ .gitignore



MySQL (Database configuration files or scripts)

Installation
→ Clone the repository: git clone <repository-url>
→ Navigate to the project directory: cd internship-project-ests
→ Install backend dependencies: cd backend && npm install
→ Install frontend dependencies: cd ../frontend && npm install
→ Set up environment variables in .env files.
→ Start the backend server: cd ../backend && npm start
→ Start the frontend: cd ../frontend && npm start

Usage
→ Access the application via http://localhost:3000 (or the port specified in your .env).
→ Use the admin, dashboard, events, login, and register pages as needed.

Contributing
→ Feel free to fork this repository and submit pull requests.
→ Please follow the existing code style and include tests where applicable.

License
→ This project is licensed under the MIT License - Copyright (c) [2025] [LLP].
