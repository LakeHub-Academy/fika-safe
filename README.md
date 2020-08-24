# Fika-safe

A boda boda (motorbike) taxi safety app for registering the boda boda operators for detail and roadworthiness of the motorbike verification.

![code3](https://user-images.githubusercontent.com/48393059/85285798-31b30300-b49a-11ea-8016-a571d2ab2668.png)

# Build with

- Node.js
- JavaScript
- ejs
- Africastalking
- MongoDB
- Bootstrap
- Sendgrid
- Express

# live Link

http://fikasafe.herokuapp.com

# Get Started

- You first need to clone the repository
- create sendgrid account and generate your email API key
- create `.env` file in project's root folder add `API_KEY` and assign it your mongodb db url,
  add `SG_KEY` and assign it your sendgrid email API.
- create Africastalking account to get your sms API.
- change directory to sacco create `.env` file in sacco root folder add `API_KEY` and assign it
  your mongodb url, add `AT_KEY` and assign it your Africastalking sms API
- install the dependencies by running `npm install` in your terminal
- Run `npm start`start your express server. You can now view the app by navigating
  to `http://localhost:5000` in your browser.
- use postman to register as Application's Admin to enable you to login to the Appliction
- in postman send a post request to localhost:5000/users/admin either send the data using x-www-form-urlencoded or in form of JSON data

# Contributors

👤 Patrick Nyatindo

- Github: [nyatindopatrick](https://github.com/nyatindopatrick)
- Twitter: [@nyatindopatrick](https://twitter.com/nyatindopatrick)
- Linkedln: [Patrick Nyatindo](https://www.linkedin.com/in/nyatindopatrick)

👤 Cyrus Kiprop

- Github: [Cyrus-Kiprop](https://github.com/Cyrus-Kiprop)
- Twitter: [@kipropjs](https://twitter.com)
- Linkedln: [Cyrus Kiprop](https://www.linkedin.com/in/)
