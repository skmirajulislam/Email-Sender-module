# Simple MERN Email Sender

This MERN app allows users to send emails to single or multiple users, featuring functionalities for adding attachments, texts or paragraphs, and saving every single email sent in MongoDB. It uses MongoDB as the database to store email data, Express.js for handling server-side logic, React.js for building the user interface, and Node.js for the server-side runtime environment. The app provides a seamless experience for users to send emails and save time.

## Running the Project Locally

To run this project on your local machine, follow these steps:

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone <repository_url>
```

### 2. Navigate to Project Directory
Move into the project directory:
```bash
cd <project_directory>
```

### 3. Install Dependencies
Install the necessary dependencies using npm or yarn:
```bash
npm install
```
or
```bash
yarn
```

<div style="display: flex; align-items: center;">
    <div style="flex: 1; padding: 5px;">
        <img src="https://github.com/skmirajulislam/JourneySupport/blob/master/support.png" alt="Image 1" style="width: 800px; height: 500px; border-radius: 10px;">
    </div>
</div>

### 4. Setup Environment Variables
Create a `.env` file in the root of your project directory and add the following variables:
```
MONGODB_URI=your_mongodb_uri
PORT=5000
CLIENT_PORT=3000
```
Replace `your_mongodb_uri` with your MongoDB connection URI. Customize the `PORT` and `CLIENT_PORT` variables if needed.

### 5. Start the Development Server
Run the following command to start the development server:
```bash
npm start
```

### 6. Access the App
Open your web browser and navigate to `http://localhost:3000` to access the app. You can now use the app locally on your machine, connected to your MongoDB database using the URI specified in the `.env` file.

### 7. Note
The project may not work if you do not install dependencies in both the front end and backend. So you will have to apply steps 2 and 3 twice, once in the frontend and once in the backend.

---

Feel free to reach out if you have any questions or run into any issues! Happy coding!
