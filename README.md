## <img src="./client/public/images/logo.png" alt="logo" width="100">

**Dome** has undergone significant improvements to become a user-friendly task manager web application with added security measures. Now equipped with a database, users can easily create, modify, view, and remove tasks. The application ensures secure storage of user data, employing bcrypt.js for password hashing and implementing JSON Web Token (JWT) for enhanced authentication during signup and login.

## Teach Stack

- **Node.js :** A JavaScript runtime environment used for server-side development.
- **Express.js :** A backend web application framework for building RESTful APIs with Node.js.
- **EJS :** A simple templating language that lets you generate HTML markup with plain JavaScript.
- **Bootstrap and css :** A css framework used for styling the user interface.
- **MongoDB :** A NoSQL database used for storing tasks and users data.

## Getting Started

To run the application locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/<your-username>/dome.git
```

### 2. Navigate to the project directory:

```bash
cd dome
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Create an environment file:

Create a file named .env in the root of your project and add the following configuration:

```
PORT=3000
MONGODB_URL=mongodb://localhost:27017/<your-database-name>
JWT_SECRET=<your-secret-key>
```

Replace `<your-database-name>` with the desired name for your MongoDB database and set a secure value for `<your-secret-key>` as the JWT secret.

### 5. Run the application:

```bash
npm start
```

For development (using nodemon for automatic restart on file changes):

```bash
npm run dev
```

The application will be accessible at http://localhost:3000 by default. Adjust the port number if needed.

## Screenshots

![Screenshot](https://github.com/Mayank-Sharma17/dome/assets/113251342/c5301c16-63f8-46bd-af67-57b2cb14d612)

![Screenshot](https://github.com/Mayank-Sharma17/dome/assets/113251342/366fd533-7d6b-45c9-ae57-73dfae449ed1)
