# Web Server with Hapi.js

This project is a continuation and enhancement of my previous basic backend project, where I initially built a web server using Node.js native modules. In this version, I have implemented the Hapi.js framework to simplify backend development while maintaining similar functionality. 

🔗 Previous project: [Basic Web Server with Node.js](https://github.com/ai-azz/web-server-nodejs)

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Installation & Setup](#installation--setup)
6. [API Endpoints](#api-endpoints)
7. [Conclusion](#conclusion)
8. [License](#license)

## Introduction
This project demonstrates how to build a basic web server using Hapi.js, a powerful and flexible framework for Node.js. It covers fundamental backend development concepts such as routing, handling requests, query parameters, and response handling.

## Features
- Serves different routes (`/`, `/about`, `/hello/{name?}`, etc.).
- Handles different HTTP methods (GET, POST, etc.).
- Supports query parameters (e.g., `/hello/{name}?lang=id`).
- Returns appropriate response messages.
- Implements wildcard routes for undefined paths.

## Technologies Used
- **Node.js** - Runtime environment for executing JavaScript on the server.
- **Hapi.js** - Backend framework for building scalable applications.

## Project Structure
```
web-server-hapi/
│── .gitignore
│── package-lock.json
│── package.json   # Project metadata and dependencies
│── README.md      # Project documentation
│── routes.js      # Contains API route definitions
└── server.js      # Entry point for the Hapi.js server
```

## Installation & Setup
### Prerequisites
- Install [Node.js](https://nodejs.org/) (v14 or higher recommended)
- Install npm (comes with Node.js)

### Steps
1. Clone this repository:
   ```sh
   git clone https://github.com/ai-azz/web-server-hapi.git
   ```
2. Navigate to the project folder:
   ```sh
   cd web-server-hapi
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. The server should be running at `http://localhost:5000`

## API Endpoints
| Method | Endpoint         | Description                           |
|--------|-----------------|---------------------------------------|
| GET    | `/`             | Returns the homepage message         |
| GET    | `/about`        | Returns the about page message       |
| GET    | `/hello/{name}` | Greets the user by name              |
| GET    | `/hello/{name}?lang=id` | Greets the user in Indonesian |
| *      | `/{any*}`       | Handles undefined routes             |

## Conclusion
This project serves as a learning exercise to explore backend development with Hapi.js. By using a framework, the development process becomes more efficient, structured, and maintainable compared to using Node.js native modules.