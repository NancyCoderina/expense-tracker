# Expense Tracker

## Project Description

Expense Tracker is a full-stack web application that allows users to manage their daily expenses.

Users can add, view, update, delete, search, and filter expenses by category.

The project uses Express.js and MongoDB for the backend and HTML, CSS, and JavaScript for the frontend.

## Features

- Add new expenses
- View all expenses
- Update existing expenses
- Delete expenses
- Search expenses by title
- Filter expenses by category
- Calculate total expenses
- Store expense data in MongoDB
- REST API using Express.js
- Responsive and user-friendly interface

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Tools
- VS Code
- Git
- GitHub

## Project Structure

ExpenseTracker/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── expenseController.js
│   ├── models/
│   │   └── expenseModel.js
│   ├── routes/
│   │   └── expenseRoutes.js
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expenses` | Get all expenses |
| POST | `/api/expenses` | Add a new expense |
| PUT | `/api/expenses/:id` | Update an expense |
| DELETE | `/api/expenses/:id` | Delete an expense |