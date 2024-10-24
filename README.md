                              Gamma Fleet
Gamma Fleet is a comprehensive fleet management system designed to provide real-time vehicle tracking, maintenance management, user management, reporting, and analytics for businesses that manage fleets of vehicles. It offers features such as driver tracking, vehicle status, trip management, and customizable settings to streamline fleet operations.

<p>#Table of Contents</p>
<ul>
<li>Project Overview</li>
<li>Features</li>
<li>Tech Stack</li>
<li>Libraries Used</li>
<li>Getting Started</li>
<li>Installation</li>
<li>Usage</li>
<li>API Integration</li>
<li>Contributing</li>
<li>License</li></ul>
<p>Project Overview</p>


<p>#Gamma Fleet is a full-stack web application for managing fleets of vehicles. It allows fleet managers to:</p>
<ul>
  
<li>Track vehicles in real-time</li>
<li>Manage vehicle maintenance schedules</li>
<li>Track driver activities and trips</li>
<li>Generate reports on fleet performance</li>
<li>Manage user roles and permissions</li>
<li>Customize settings for fleet operations</li>
  
</ul>
<p>#Features</p>
<ul>
  
<li>Real-Time Tracking: Monitor vehicles live on the map</li>
<li>Vehicle Management: Add, update, and maintain vehicle information</li>
<li>Driver Management: Track driver information and performance</li>D
<li>Trip Management: Manage trips and track journey details</li>
<li>Reports and Analytics: Generate detailed reports on trips, fuel usage, and maintenance</li>
<li>>User Management: Administer different user roles and permissions</li
<li>Maintenance Alerts: Get notifications for vehicle maintenance schedules</li>
<li>Settings: Customize the platform according to your organization's needs</li>
</ul>
<p>#Tech Stack</p>
<ul>
  
<li>Frontend: React.js (React Router for navigation) </li>
<li>Backend: Node.js, Express.js (for API)</li>
<li>Database: MongoDB (NoSQL database)</li>
<li>Styling: CSS, SCSS</li>
<li>API Communication: Axios/Fetch</li>
<li>Version Control: Git</li>
 
</ul>

<p>#Libraries Used:</p>
<ul>
  
<li>React Router: For client-side routing </li>
<li>Font Awesome: For icon sets </li>
<li>Axios: For handling API requests </li>
<li>dotenv: For environment variable management </li>
<li>Express.js: Backend framework </li>
<li>MongoDB: Database for storing fleet and user data </li>
 
</ul>
<p>Getting Started</p>
<h2>Prerequisites</h2>

<p>Before you begin, ensure you have the following installed:</p>
<ul>
 
 <li>Node.js (v14 or higher)</li>
 <li>NPM (v6 or higher) or Yarn</li>
 <li>MongoDB</li>
  
</ul>
<p>Installation</p>
<h2>To get a local copy of the Gamma Fleet project up and running, follow these steps:</h2>

<p>Clone the repository:</p>

<p>bash</p>
<h2>git clone https://github.com/olaoluwiv/Gamma-Fleet.git</h2>
<p>Navigate to the project directory:</p>

<p>#bash:</p>
cd Gamma-Fleet
<p>Install the required dependencies:</p>
Using npm:

<p>#bash:</p>
npm install
<p>Set up environment variables:</p>
Create a .env file in the root directory and configure your environment variables such as:

<p>#bash:</p><br>
REACT_APP_API_URL=https://your-api-url
Start the development server:

For the frontend:
#bash
npm start
For the backend:
<p>#bash:</p>
cd backend
npm start
<p>Navigate to your local development environment:</p> <br>

Open your browser and go to http://localhost:3000.

<p>Usage</p> <br>
<h2>Once the application is running, you can:</h2>
<ul>
<li>Register and sign in as an admin or fleet manager</li>
<li>Add vehicles and drivers to the system</li>
<li>Monitor fleet vehicles in real time</li>
<li>Manage user accounts and permissions</li>
<li>View reports on fleet and driver performance</li>
<li>Adjust system settings for maintenance alerts and notifications</li></ul>
<p>API Integration</p>
<h2>Gamma fleet integrates with an API to manage vehicle data, track routes, and more. API endpoints include:</h2>
<ul>
<li>GET /api/get-client: Fetch client data</li>
<li>POST /api/add-vehicle: Add a vehicle to the system</li>
<li>PUT /api/update-vehicle/:id: Update vehicle details</li>
<li>DELETE /api/delete-vehicle/:id: Remove a vehicle</li>
  </ul>
<p>More routes can be found in the API documentation.</p>
<h2>Contributing</h2>
<p>Contributions are welcome! If you'd like to contribute to the development of Gamma Fleet, please follow the steps below:</p>

<p>Fork the repository</p>
<ul>
<li>Create a new branch (git checkout -b feature/your-feature)</li>
<li>Commit your changes (git commit -m 'Add some feature')</li>
<li>Push to the branch (git push origin feature/your-feature)</li>
  </ul>
<p>Open a pull request</p>
<h2>License</h2>
<p>#This project is licensed under the MIT License - see the LICENSE file for details.</p>

///////////////////////////////////////////////////////////////////////

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
