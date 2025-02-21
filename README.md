# Watchly Backend

The **Watchly Backend** is a **Node.js and Express.js** server that powers the video streaming platform **Watchly**. It manages **user authentication, video management, comment handling, and channel operations**, providing a robust and scalable API for the frontend.

## 🚀 Features

- 🔐 **User Authentication**: Secure user registration and login using **JWT (JSON Web Token)**.
- 📺 **Video Management**:
  - Upload, update, and delete videos.
  - Retrieve all videos and video details by ID.
- 💬 **Comment Handling**:
  - Add, edit, and delete comments on videos.
  - Store user interactions efficiently.
- 📡 **Channel Management**:
  - Create, update, and delete channels.
  - Manage videos within a channel.
- 🛠️ **Middleware Support**: Uses **authentication and validation middleware** with `express.Router()` for a secure and modular API.
- 🗄️ **MongoDB Integration**: Efficiently stores **user data, video details, channel information, and comments** using **MongoDB**.

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Middleware**: Express Router, Validation Libraries
## Deployment
To downlode all node packages

```bash
  npm install
```

To deploy this project run

```bash
  npm start
```

