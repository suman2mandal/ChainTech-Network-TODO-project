# To-Do List Application

This is a simple To-Do List application with the following features:

## Task Management

1. **Create Tasks**: Users can create tasks with a title and description.

2. **View Tasks**: Users can view a list of all tasks.

3. **Mark as Completed**: Users can mark tasks as completed.

4. **Edit Task Details**: Users can edit task details.

5. **Delete Tasks**: Users can delete tasks.

## Persistence

Tasks are stored and retrieved from a simple database. Currently, we use MySQL/MongoDB for data persistence.

## Validation

1. **Task Title Validation**: Validation is implemented to ensure that task titles are not empty and the password is abc.

2. **Mark as Completed Validation**: Users can't mark a task as complete if it's already marked as such.

3. **Error Handling**: Errors are handled gracefully, and meaningful error messages are provided.

## Documentation

### Setup

1. **Navigate to the `backend` directory**: `cd server`

2. **Install Dependencies**: Run `npm install` to install the required dependencies.

3. **Run the Application**: Execute `npm start` to start the application. Password is abc.

### Frontend Setup

I also have completed a frontend in React:

1. **Navigate to the `frontend` directory**: `cd client`
2. **Install Frontend Dependencies**: Run `npm install` in the frontend directory.
3. **Run the Frontend**: Execute `npm run dev` to start the React application.

### Backend Usage

1. **Creating a Task**: Use the provided endpoint to create a new task with a title and description.  
   `POST /todos`

2. **Viewing Tasks**: Retrieve a list of all tasks using the following endpoint.  
   `GET /todos`

   The response will be in a JSON format, providing a clear list of all tasks.

3. **Editing Task Details**: Modify the task details using the following endpoint.  
   `PUT /todos/:id`

4. **Deleting Tasks**: Remove a task by using the delete endpoint.  
   `DELETE /todos/:id`

5. **Authentication**: Login to start editing password is abc.  
   `POST /login`

## Code Structure

The code is organized as follows:

- **`app.js`**: Entry point of the application.
- **`routes/tasks.js`**: Handles the CRUD operations for tasks.
- **`models/taskModel.js`**: Defines the task schema and interacts with the database.
- **`config.js`**: Contains the database configuration.

## Bonus (Optional)

### Categorizing Tasks

Tasks can be categorized by introducing a "category" field in the task schema.

Feel free to explore and extend the application based on your needs!

**Note**: This is a basic To-Do List application, and further improvements and optimizations can be made based on specific requirements.
