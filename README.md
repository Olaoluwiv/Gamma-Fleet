                             Gamma Fleet
Gamma Fleet is a comprehensive fleet management system designed to provide real-time vehicle tracking, maintenance management, user management, reporting, and analytics for businesses that manage fleets of vehicles. It offers features such as driver tracking, vehicle status, trip management, and customizable settings to streamline fleet operations.

#Table of Contents
Project Overview
Features
Tech Stack
Libraries Used
Getting Started
Installation
Usage
API Integration
Contributing
License
Project Overview

#Gamma Fleet is a full-stack web application for managing fleets of vehicles. It allows fleet managers to:
<ul>
  <li>
Track vehicles in real-time
Manage vehicle maintenance schedules
Track driver activities and trips
Generate reports on fleet performance
Manage user roles and permissions
Customize settings for fleet operations
  </li>
</ul>
#Features
<ul>
  <li>
Real-Time Tracking: Monitor vehicles live on the map
Vehicle Management: Add, update, and maintain vehicle information
Driver Management: Track driver information and performance
Trip Management: Manage trips and track journey details
Reports and Analytics: Generate detailed reports on trips, fuel usage, and maintenance
User Management: Administer different user roles and permissions
Maintenance Alerts: Get notifications for vehicle maintenance schedules
Settings: Customize the platform according to your organization's needs
  </li>
</ul>
#Tech Stack
<ul>
  <li>
Frontend: React.js (React Router for navigation)
Backend: Node.js, Express.js (for API)
Database: MongoDB (NoSQL database)
Styling: CSS, SCSS
API Communication: Axios/Fetch
Version Control: Git
  </li>
</ul>

#Libraries Used:
<ul>
  <li>
React Router: For client-side routing
Font Awesome: For icon sets
Axios: For handling API requests
dotenv: For environment variable management
Express.js: Backend framework
MongoDB: Database for storing fleet and user data
  </li>
</ul>
Getting Started
Prerequisites

Before you begin, ensure you have the following installed:

Node.js (v14 or higher)
NPM (v6 or higher) or Yarn
MongoDB
Installation
To get a local copy of the Gamma Fleet project up and running, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/olaoluwiv/Gamma-Fleet.git
Navigate to the project directory:

#bash:
cd Gamma-Fleet
Install the required dependencies:

Using npm:

bash:
npm install
Set up environment variables:

Create a .env file in the root directory and configure your environment variables such as:

#bash:
REACT_APP_API_URL=https://your-api-url
Start the development server:

For the frontend:
#bash
npm start
For the backend:
#bash
cd backend
npm start
Navigate to your local development environment:

Open your browser and go to http://localhost:3000.

Usage
Once the application is running, you can:

Register and sign in as an admin or fleet manager
Add vehicles and drivers to the system
Monitor fleet vehicles in real time
Manage user accounts and permissions
View reports on fleet and driver performance
Adjust system settings for maintenance alerts and notifications
API Integration
Gamma Fleet integrates with an API to manage vehicle data, track routes, and more. API endpoints include:

GET /api/get-client: Fetch client data
POST /api/add-vehicle: Add a vehicle to the system
PUT /api/update-vehicle/:id: Update vehicle details
DELETE /api/delete-vehicle/:id: Remove a vehicle
More routes can be found in the API documentation.
Contributing
Contributions are welcome! If you'd like to contribute to the development of Gamma Fleet, please follow the steps below:

Fork the repository
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature/your-feature)
Open a pull request
License
#This project is licensed under the MIT License - see the LICENSE file for details.

///////////////////////////////////////////////////////////////////////

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
