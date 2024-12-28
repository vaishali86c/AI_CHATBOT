# AI-Chatbot    

## Introduction :

This is an AI Chatbot application, inspired by ChatGPT, by using MERN Stack and OpenAI.
It's a customized chatbot where each message of the user is stored in DB and can be retrieved and deleted.
It's a completely secure application using JWT Tokens, HTTP-Only Cookies, Signed Cookies, Password Encryption, and Middleware Chains.

## Key features:

- based on mern stack
- Create user authentication and authorization system
- Implementing express-validators middleware to validate data
- Storing user's chats in MongoDB
- Generating custom and our own authentication system
- Using JWT authorization tokens, HTTP only cookies
- Protecting user routes with verification checks
- Modern React app with Vite
- Creating beautiful chat UI with Material UI library
- Complete responsive design
- Modern design
- Integrating OpenAI with Node, Express MERN stack app
- A full stack ChatGPT like clone
- Storing user sessions



Steps to Build:

1. Setup Node, Express App with Typescript
2. Integrate MongoDB Database Connection
3. Register/Login On OpenAi Portal, Get API Keys
4. Build A Secure Authentication With Tokens and HTTP-only singed cookies

 * npm i morgan -  It helps developers monitor and debug their applications by providing detailed information about incoming requests and responses.
 * Routes -  a router in the backend acts as a traffic controller, directing HTTP requests to the right logic based on the URL and method.
 * controllers folder: handle the incoming request for the user
 * models folder : for the database schema

 User : name 
        email
        password
        chats: chat[]

* hash password through bcrypt lib
* validations middleware: express-validator 