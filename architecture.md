# Application Architecture Document
## Overview
This document outlines the architecture of a Node.js application designed to manage collections and records in a lightweight data storage format (JSON or YAML). The application features a RESTful API for interacting with the data, providing endpoints for creating, updating, deleting, and retrieving collections and records.

## Architecture Diagram

### Components
### 1. Server Layer
* **Express.js:** The application is built using the Express framework, which simplifies the server setup and routing for the API.
* **HTTP Server:** The application listens for incoming HTTP requests and responds based on the defined routes.
### 2. API Layer
* **Routes:** The application defines various endpoints for interacting with collections and records:
   * **Collection Management:**
     * Create Collection: `POST /api/create`
     * Delete Collection: `DELETE /api/table`
   * **Record Management:**
     * Add Record: `POST /api/record/:tableName`
     * Update Record: `PUT /api/record/:tableName/:recordBaz`
     * Delete Record: `DELETE /api/record/:tableName/:recordBaz`
     * Get Records: `GET /api/records/:tableName`
### 3. Application Logic Layer
   * **Application Module:** Encapsulates the business logic for the application, interacting with the database service to perform operations. This layer includes:
     * Methods for creating and deleting collections.
     * Methods for adding, updating, deleting, and retrieving records.
     * Input validation and error handling.
### 4. Database Layer
   * **DatabaseService:** Manages data storage and retrieval. It interacts with files (JSON or YAML) to store collections and records. Key functionalities include:
     * **Data Persistence:**
       * Reading from and writing to the data storage files.
     * **CRUD Operations:**
       * Creating collections and records.
       * Deleting collections and records.
       * Updating records.
       * Fetching records with pagination support.
### 5. Error Handling Layer
   * **Middleware:** Handles errors that occur within the application. This includes:
     * Logging errors.
     * Sending standardized error responses to the client.
### 6. Configuration Layer
   * **Environment Variables:** The application uses a `.env` file to manage configuration variables, such as the listening port and storage type (JSON/YAML).
### 7. Testing Layer
   * **Postman Collection:** A set of predefined requests for testing the API endpoints. It helps validate the functionality of the application and ensures that it behaves as expected.

## Workflow
   1. **Client Requests:** A client (e.g., Postman or frontend application) sends an HTTP request to one of the defined API endpoints.
   2. **Routing:** Express routes the request to the appropriate handler based on the request method and URL.
   3. **Business Logic Execution:** The request handler invokes methods from the application module to perform the requested operation (create, read, update, delete).
   4. **Database Interaction:** The application module calls the DatabaseService to interact with the data files.
   5. **Response Handling:** The result of the database operation is returned to the request handler, which formats it as a JSON response and sends it back to the client.
   6. **Error Handling:** Any errors encountered during processing are caught and managed through middleware, ensuring that the client receives a meaningful error response.

## Conclusion
   This Node.js application is structured to provide a clean and efficient API for managing collections and records. By separating concerns into distinct layers (server, API, application logic, database, error handling, and configuration), the application promotes maintainability and scalability. Future enhancements can be easily integrated into this architecture, such as implementing a user authentication system or expanding the database capabilities to support other storage solutions.

### Note : 
This document was created with the assistance of `ChatGPT`

### By regards
Milad Aslani