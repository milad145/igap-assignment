# IGAP - API Management System

**IGAP** is a simple API management system built with Node.js, Express, and TypeScript. It allows users to manage collections (tables) and records with CRUD operations.

you can have access to [Application Architecture Document](./architecture.md) 

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
You can modify the environment variables to suit your local setup. The key variable options are:

* **SDD_STORE_TYPE:** Determines the format of data storage (e.g., `json`, `yaml`).
* **LISTENING_PORT:** The port on which the server will run (default is `3000`).
* **BINARY_DATA_STORAGE:** Set to `true` to enable binary data storage using MessagePack.


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

## CLI Usage
The project includes a Command-Line Interface (CLI) for interacting with the database. You can perform the following operations:

### 1. Add a Record
To add a record to a table:
```bash
node build/cli.js add --table table-name --record '{ "foo": "bar", "baz": 1 }'
```

### 2. Delete a Record
To delete a record from a table by its `baz` value:
```bash
node build/cli.js del --table table-name --baz 1
```

### 3. Get Records
To retrieve all records from a specified table:
```bash
node build/cli.js get --table table-name
```

### Command Descriptions
* **add:** Adds a new record to the specified table. Requires the `--table` option for the table name and `--record` option for the record in JSON format.
* **del:** Deletes a record from the specified table based on the `baz` value. Requires the `--table` option for the table name and `--baz` option for the record's baz value.
* **get:** Retrieves all records from the specified table. Requires the `--table` option for the table name.


## Project Structure
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

## Testing
Use the provided Postman collection (`igap.postman_collection.json`) to test the API endpoints.



