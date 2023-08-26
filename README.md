# Task To-Do List Application

This project is a task To-Do List application built with React and Express. It allows users to create, update, and delete tasks.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js (version 16.20.0)
- npm (version 8.19.4)

## Technologies Used

- React.js
- Tailwind CSS
- JavaScript
- Typescript
- Node.js
- Express.js

### Installation

1. Clone the repository
2. Install dependencies in both client and server directories using `npm install`
3. Start the server from the server directory with `npm start`
4. Start the client from the client directory with `npm start`

## Client

The client is built with React and TypeScript. It uses the Context API for state management and Tailwind CSS for styling.

### Directory Structure

- `src/components`: Contains all the React components.
  - `TaskInput.tsx`: Handles the creation and updating of tasks.
  - `TaskList.tsx`: Displays a list of tasks.
  - `TaskButton.tsx`: Contains the edit and delete buttons for each task.
- `src/contexts`: Contains the context for state management.
- `src/constants`: Contains the action types for the reducer.
- `src/interface`: Contains the TypeScript interfaces used in the project.
- `src/utils`: Contains utility functions, such as notifications.

## Server

The server is built with Express and Node. It provides a REST API for managing tasks.

### Directory Structure

- `src/routes`: Contains the routes for the API.
- `src/controllers`: Contains the controllers for handling requests.
- `src/models`: Contains the data models.

## API Design

The API is designed to handle the following endpoints:

- `GET /api/v1/tasks`: Retrieve a list of all tasks.
- `POST /api/v1/tasks/create`: Create a new task.
- `PATCH /api/v1/tasks/update/:id`: Update a task.
- `DELETE /api/v1/tasks/:id`: Delete a task.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.
