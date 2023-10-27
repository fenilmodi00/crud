# Movie Review CRUD App

This is a basic CRUD (Create, Read, Update, Delete) application for managing movie reviews built using React for the frontend, Express and Node.js for the backend, and MySQL as the database. With this application, you can add movies along with their reviews, delete movies, and update existing movie reviews.

## Table of Contents

- [Movie Review CRUD App](#movie-review-crud-app)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Application Structure](#application-structure)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Working Screenshots](#working-screenshots)

## Prerequisites

Before you get started, make sure you have the following prerequisites installed on your system:

- Node.js and npm (Node Package Manager)
- MySQL database server
- Git (optional, for cloning the repository)

## Getting Started

1. Clone the repository to your local machine or download and extract the ZIP file.

   ```
   git clone https://github.com/sheikhsuhail19/movie-review-crud-app.git
   ```

2. Navigate to the project folder using the terminal or command prompt.

   ```
   cd Movie-Review-Crud-App
   ```

3. Install the dependencies for both the frontend and backend. Run the following commands in separate terminal windows:

   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

4. Create a MySQL database and update the database configuration in the `server/index.js` file. You can set the database credentials and the database name:

   ```javascript
   const db = mysql.createPool({
     host: "your-database-host",
     user: "your-username",
     password: "your-password",
     database: "your-database-name",
   });
   ```

5. Set up the necessary DB tables.

6. Start the server and the frontend separately using the following commands:

   ```bash
   # Inside the server directory
   npm start

   # Inside the client directory
   npm start
   ```

The application will be accessible at `http://localhost:3000`.

## Application Structure

The project is organized into two main directories:

- `client`: Contains the React frontend.
- `server`: Contains the Express.js backend.

## Frontend

The frontend of the application is built using React. You can access the user interface in a web browser at `http://localhost:3000`. It provides a simple user interface for adding movies with reviews, updating reviews, and deleting movies.

## Backend

The backend is implemented using Express.js and Node.js. It provides the necessary API endpoints for CRUD operations on movies and reviews. The API endpoints are defined in the `server/index.js` file.

## Database

The MySQL database stores information about movies and their reviews.

## Usage

1. Access the application at `http://localhost:3000`.

2. Use the web interface to add new movies with reviews, update existing reviews, or delete movies.

3. You can also use the provided API endpoints for programmatic access. Refer to the [API Endpoints](#api-endpoints) section for more details.

## API Endpoints

The following API endpoints are available:

- **GET /api/get**: Retrieve a list of all movies with their reviews.
- **POST /api/insert**: Add a new movie with a review.
- **PUT /api/delete/:movieName**: Update the review of a specific movie.
- **DELETE /api/update**: Delete a movie and its associated review.

For more information about how to use these endpoints, refer to the API documentation in the `server/index.js` file.

## Working Screenshots

Here are some working screenshots of the application:

![operation1](https://github.com/SheikhSuhail19/Movie-Review-Crud-App/assets/70643928/28ff9c1e-e23a-4a1e-a4f8-b9fda1d95896)
![operation11](https://github.com/SheikhSuhail19/Movie-Review-Crud-App/assets/70643928/eeaa0f2c-75ee-4666-a3fa-c94eec98cb02)
![operation2](https://github.com/SheikhSuhail19/Movie-Review-Crud-App/assets/70643928/bfe8e885-e2ce-4ed6-882b-a60a03f1a3fb)
![operation22](https://github.com/SheikhSuhail19/Movie-Review-Crud-App/assets/70643928/ca4984fe-e709-41c1-98ff-f39c412884c0)
![operation3](https://github.com/SheikhSuhail19/Movie-Review-Crud-App/assets/70643928/64eef2fe-b35f-4c67-9823-e08e4013486e)
![operation33](https://github.com/SheikhSuhail19/Movie-Review-Crud-App/assets/70643928/3c86f109-4579-4272-90ee-96cbd443c8c0)
![operation7](https://github.com/SheikhSuhail19/Movie-Review-Crud-App/assets/70643928/958c2b91-6147-4049-8ebc-fb615a977cd5)
![operation6](https://github.com/SheikhSuhail19/Movie-Review-Crud-App/assets/70643928/70e294d5-3b92-4d82-92f2-30625671b805)
![operation4](https://github.com/SheikhSuhail19/Movie-Review-Crud-App/assets/70643928/9561b31d-eb60-422f-8893-90b5cc9e0daf)


Feel free to modify and extend this basic CRUD application to suit your specific needs or use it as a starting point for more complex projects. Happy coding!
