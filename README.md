# Project Setup

This project consists of a frontend and backend application. Follow the instructions below to set up each part of the project locally.

**Table of Contents**
Frontend Setup
Backend Setup
Common Tasks
Additional Information
Frontend Setup
The frontend is built using React and Tailwind CSS.

Prerequisites
Node.js (v18 or later)
npm or yarn
Installation
Clone the repository:

```bash
 git clone https://github.com/hardiksinghh18/Future-Skills-Assignment.git
cd Future-Skills-Assignment/frontend
```
Install dependencies:

```bash
 npm install
```
or if using yarn:

```bash
 yarn install
```
Start the development server:

```bash
 npm start
```
or if using yarn:

```bash
 
yarn start
```
This will start the frontend application on http://localhost:3000.

Build for Production
To build the frontend application for production:

```bash
 
npm run build
```
or if using yarn:

```bash
 
yarn build
```


**Backend Setup**

The backend is built using Node.js with Express and MongoDB.

Prerequisites
Node.js (v18 or later)
MongoDB (either locally installed or a cloud service like MongoDB Atlas)
Installation
Clone the repository:

```bash
 
git clone https://github.com/hardiksinghh18/Future-Skills-Assignment.git
cd Future-Skills-Assignment/backend
```
Install dependencies:

```bash
 
npm install
```
or if using yarn:

```bash
 
yarn install
```


Set up environment variables:

Create a .env file in the backend directory and add the necessary environment variables. For example:

env

MONGODB_URI=mongodb://localhost:27017/mydatabase
PORT=5000

Start the development server:

```bash
 
npm run dev
```
or if using yarn:

```bash
 
yarn dev
```
This will start the backend server on http://localhost:5000.

Common Tasks
Running Tests
For the frontend:

```bash
 
npm test
```
or if using yarn:

``````bash
 
yarn test
```
For the backend, the provided package.json does not have a test script. You may need to add test scripts based on your testing framework.

Ejecting React App
If you need to customize the configuration of the React app:

```bash
 
npm run eject
```
Note: This action is irreversible.

**Additional Information** 

Frontend Dependencies:

React 18
Tailwind CSS
Axios
Testing libraries
Backend Dependencies:

Express
Mongoose
CORS
dotenv
nodemon
Database:

Make sure MongoDB is running and accessible at the URI specified in the .env file.
For further customization and configuration, refer to the documentation of the respective libraries and frameworks used.

