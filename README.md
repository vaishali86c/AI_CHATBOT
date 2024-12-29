# AI-Chatbot    

## Introduction :

This is an AI Chatbot application, inspired by ChatGPT, by using MERN Stack and OpenAI.
It's a customized chatbot where each message of the user is stored in DB and can be retrieved and deleted.
It's a completely secure application using JWT Tokens, HTTP-Only Cookies, Signed Cookies, Password Encryption, and Middleware Chains.

## Key features:

- based on MERN Stack
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
* SignUp and login successfully 

* Authentication:  is  a step in which the user needs to verify their identity. For this application, The user needs to provide the email and password which it created during the registration process.The user will be provided a token after auth process .

 * Authorization: Once the user authenticates, he is provided a token. Now to access a resource, the user needs to show a token that was send during authentication. This ensure that the user is entitled to a resource.

* JWT : JSON WEB TOKEN
       is used to encrypt a payload into a singed token that has the permissions or authorities of the user.
       
This token send via HTTP Only Cookies

* HTTP-Only Cookies: 
* user authentication----->sets http only signed cookies with jwt token ----->user has token--->user send back the cookies---> it maches or not ?

* react app setup
* use material ui lib 
* icons: use react icons 
* router: react router dom for routing 
* notifications: Toast lib (react-hot-toast)
* context api