# Gmail Clone Backend Server

This is the backend server for the Gmail Clone application. It is built using Node.js and Express, with MongoDB as the database. The backend handles user authentication, email management (inbox, sent, starred, etc.), and JWT-based token authentication.

## Features

- User Authentication (Login, Register)
- Email Management:
  - Inbox
  - Sent Emails
  - Starred Emails
  - Drafts
  - Trash
- JWT-based Authentication
- MongoDB Database

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- dotenv for environment variables

## Setup Instructions

### Prerequisites

To run this project, you need to have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (for database)
- [Postman](https://www.postman.com/downloads/) (for API testing)

### 1. Clone the Repository

```bash
git clone https://github.com/bharat1608/gmail-clone-capstone-backend.git
cd gmail-clone-backend

### 2. Folder Structure

/gmail-clone-backend
│
├── /controllers          # Controller logic for handling requests
│   ├── emailController.js
│   └── userController.js
│
├── /models               # Mongoose models for MongoDB collections
│   ├── Email.js
│   └── User.js
│
├── /routes               # Route definitions for users and emails
│   ├── emailRoutes.js
│   └── userRoutes.js
│
├── .env                  # Environment variables (not included in repo)
├── .gitignore            # Files and directories to be ignored by git
├── package.json          # Project dependencies and scripts
├── server.js             # Main server file
└── README.md             # Project documentation

