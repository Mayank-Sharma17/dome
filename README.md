# dome

**Dome** has undergone significant improvements to become a user-friendly task manager web application with added security measures. Now equipped with a database, users can easily create, modify, view, and remove tasks. The application ensures secure storage of user data, employing bcrypt.js for password hashing and implementing JSON Web Token (JWT) for enhanced authentication during signup and login.

## Teach Stack :

- **Node.js :** Runtime for server-side JavaScript.
- **Express.js :** Backend framework for routing and logic.
- **EJS :** Templating engine for dynamic HTML.
- **Bootstrap and css :** Styling for user interface.
- **MongoDB :** A NoSQL database.

## Local Setup

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
