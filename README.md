Laboratory Activity: CRUD API Implementation

> Project Overview

This project is a simple REST API built with Node.js, Express, and MySQL. It manages students and courses, allowing basic operations like adding, viewing, updating, and deleting records. The goal was to practice backend development, work with databases, and handle common API tasks like routing, validation, and error handling. CORS is enabled so it can easily connect to front-end apps.

> How to Set Up

1. Clone the repository:
Install dependencies:
npm install

Set up your MySQL database:

Create a database named lab_crud.
Create the students and courses tables with the proper columns.
Create a dedicated MySQL user and give it privileges for security.
Configure environment variables:

Create a .env file in the root directory and add:

DB_HOST=localhost
DB_USER=lab_user
DB_PASS=password
DB_NAME=lab_crud
PORT=3000

Run the server:
npm run dev
This starts the server on http://localhost:3000.

> How to Run:

Use npm run dev to start the server with nodemon.
Use node server.js to run normally without watching for changes.

API Endpoints
Students
Method	Endpoint	Description
GET	/api/students	Get all students
GET	/api/students/:id	Get student by ID
POST	/api/students	Add a new student
PUT	/api/students/:id	Update an existing student
DELETE	/api/students/:id	Delete a student

Courses
Method	Endpoint	Description
GET	/api/courses	Get all courses
GET	/api/courses/:id	Get course by ID
POST	/api/courses	Add a new course
PUT	/api/courses/:id	Update an existing course
DELETE	/api/courses/:id	Delete a course

Thank you! :*
