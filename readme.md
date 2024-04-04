# Social Network API 

## Description

This project is an API built for a Social Media startup, which uses Mongoose as a NoSQL database, so their website can handle a large amount of unstructured data. The Social Network API will be able to hold data on a User and their Thoughts. The User will contain a username, email, thoughts array and friends array and the Thoughts will have the thought text, date which it was created, username and reactions. The functionality of the API will allow All Users and Thoughts to be found, Users and Thoughts to be found by ID, Users and Thoughts to be created, updated and deleted and Users to add and remove friends and Thoughts to add and remove reactions.

## Installation

To install all the dependencies and dev dependencies type in the integrated terminal:

- npm install

For specific versions of the dependencies install by typing in the integrated terminal:

- npm install express@4.17.1
- npm install mongoose@7.0.2

## Usage

Before testing the routes in the API, ensure you have installed dependencies and connected to MongoDB. To ensure that you're connected to the API by opening MongoDB, you may be prompted to connect when opening.

To start the server, type in the integrated terminal:

- npm start

You can see in the MongoDB compass the name of the Database with folders for Users and Thoughts.

Next, navigate to insomnia. Using insomnia, you can view all the data as a JSON. Fill in the Method, URL and Body (if needed) with the below details to use the functions of the API:

To Get All Users:

- `GET` http://localhost:3001/api/users/

To Get User By ID:

- `GET` http://localhost:3001/api/users/:userId

To Create New User

- `POST` http://localhost:3001/api/users/
- JSON BODY: 
-  { 
-    "username": "userName",
-    "email": "username@email.com"
-  }

To Update User:

- `PUT` http://localhost:3001/api/users/:userId
- JSON BODY: 
-  {
-    "username": "updatedUserName"    
-  }

To Delete User:

- `DEL` http://localhost:3001/api/users/:userId

To Add Friend:

- `POST` http://localhost:3001/api/users/:userId/friends/:friendId

To Remove Friend:

- `DEL` http://localhost:3001/api/users/:userId/friends/:friendId

To Get All Thoughts:

- `GET` http://localhost:3001/api/thoughts/

To Get Thought By ID:

- `GET` http://localhost:3001/api/thoughts/:thoughtId

To Create Thought:

- `POST` http://localhost:3001/api/thoughts/
- JSON BODY:
-  {
-    "thoughtText": "The text for thought",
-    "username": "userName",
-    "userId": "userId"    
-  }

To Update Thought:

- `PUT` http://localhost:3001/api/thoughts/:thoughtId
-  {
-    "thoughtText": "Updated text"
-  } 

To Delete Thought:

- `DEL` http://localhost:3001/api/thoughts/:thoughtId

To Add Reaction:

- `POST` http://localhost:3001/api/thoughts/:thoughtId/reactions
-  {
-    "reactionBody": "reaction",
-    "username": "userName"    
-  }

To Remove Reaction:

- `DEL` http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId

Using the `POST` methods you fill the database by creating a new user, adding a friend, creating a new thought and adding reactions to thoughts. Then using the remaining methods, `GET`, `PUT` and `DEL` to get the data, update the data and delete the data. 

## Credits
- Many Internet Resources 
- Teachers/Class Material
- [Mongoose Email Validation](https://masteringjs.io/tutorials/mongoose/mongoose-validate-unique-email)

## License
N/A

## GitHub Repository

[GitHub Repository](https://github.com/HarryP-GitHub/Social-Network-API)

## Video Demo

[Video Demo](https://drive.google.com/file/d/1OqfGs6YsI_ZI2M-H-n_G_jn13ULx9zYy/view?usp=sharing)