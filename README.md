
# Healthcare Services API

A simple RESTful API built with Node.js and Express to manage a list of healthcare services. The API allows you to add, view, update, and delete healthcare services, with MongoDB as the database for persistent storage.



## Features

- Add a Service: Create a new healthcare service with fields like name, description, and price.
- Get All Services: Retrieve a list of all available healthcare services.
- Update a Service: Modify the details of an existing service
- Delete a Service: Remove a service from the database.

## Getting Started
Follow these instructions to set up and run the project locally.
Make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

## Installation
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/Basic-HealthService-api.git
cd healthcare-api
Install Dependencies

Run the following command to install the required npm packages:

bash
Copy code
npm install
Set Up MongoDB

Option 1: Local MongoDB
Ensure MongoDB is running locally on your machine. The default connection string in the code is mongodb://localhost:27017/healthcare.

Option 2: MongoDB Atlas
If you're using MongoDB Atlas, update the MongoDB URI in app.js with your Atlas connection string:

javascript
Copy code
mongoose.connect('your-mongodb-atlas-uri', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
Start the Server

Run the following command to start the server:

bash
Copy code
node app.js
The server will start on http://localhost:3000

## Api Endpoint

1. Add a New Service
POST /api/services

Request Body:

json
Copy code
{
  "name": "Service Name",
  "description": "Service Description",
  "price": 100
}
Response:

json
Copy code
{
  "_id": "service_id",
  "name": "Service Name",
  "description": "Service Description",
  "price": 100
}
2. Get All Services
GET /api/allservices

Response:
json
Copy code
[
  {
    "_id": "service_id",
    "name": "Service Name",
    "description": "Service Description",
    "price": 100
  },
  {
    "_id": "another_service_id",
    "name": "Another Service Name",
    "description": "Another Service Description",
    "price": 200
  }
]
3. Update a Service
PUT /api/update/:id

Request Body:

json
Copy code
{
  "price": 150
}
Response:

json
Copy code
{
  "_id": "service_id",
  "name": "Service Name",
  "description": "Service Description",
  "price": 150
}
4. Delete a Service
DELETE /api/services/:id

Response:
json
Copy code
{
  "message": "Service deleted"
}




