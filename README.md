# IGAP - API Management System

**IGAP** is a simple API management system built with Node.js, Express, and TypeScript. It allows users to manage collections (tables) and records with CRUD operations.

## Features

- Create, Read, Update, and Delete (CRUD) operations on collections and records
- TypeScript for type-safe API development
- Express.js for handling API requests
- Integrated with a JSON-based mock database
- Error handling with custom responses
- Configurable via `.env`

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (version 6.x or higher)
- [TypeScript](https://www.typescriptlang.org/) (version 4.x or higher)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/milad145/igap-assignment.git
cd igap
```
### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Copy the `.env-sample` to `.env` and configure your environment variables:
```bash
cp .env-sample .env
```
You can modify the environment variables to suit your local setup.

### 4. Compile TypeScript
Since the project is written in TypeScript, it needs to be compiled into JavaScript before running:
```bash
npm run build
```

### 5. Run the project
To run the project in development mode:
```bash
npm run dev
```

The server will start at http://localhost:3000.

### Project Structure
```
.
├── src
│   ├── core            # Core application logic
│   ├── data            # Mock database service
│   ├── routes          # API route handlers
│   ├── utils           # Utility functions
├── igap.postman_collection.json # Postman collection for API testing
├── LICENSE             # License file
├── package.json        # npm configuration
├── tsconfig.json       # TypeScript configuration
├── .env-sample         # Example environment variables
└── README.md           # Project documentation
```

### Testing
Use the provided Postman collection (`igap.postman_collection.json`) to test the API endpoints.



