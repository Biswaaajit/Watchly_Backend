# Watchly Backend  

The **Watchly Backend** is a Node.js and Express.js server that powers the video streaming platform Watchly. It manages user authentication, video management, comment handling, and channel operations, providing a robust and scalable API for the frontend.  

## 🚀 Features  

- 🔐 **User Authentication**:  
  - Secure user registration and login using **JWT (JSON Web Token)**.  

- 📺 **Video Management**:  
  - Upload, update, and delete videos.  
  - Retrieve all videos and video details by ID.  

- 💬 **Comment Handling**:  
  - Add, edit, and delete comments on videos.  
  - Store user interactions efficiently.  

- 📡 **Channel Management**:  
  - Users can only create one channel (if not already created).   
  - Manage videos within a channel.  

- 🛠️ **Middleware Support**:  
  - Uses authentication and validation middleware with `express.Router()` for a secure and modular API.  

- 🗄️ **MongoDB Integration**:  
  - Efficiently stores user data, video details, channel information, and comments using MongoDB.  

## 🌍 API Base URL  

The Watchly backend is deployed on **Render**. The base URL for API requests:  

**[https://watchly-backend-1.onrender.com](https://watchly-backend-1.onrender.com)**  


### 🔐 User API  

| Method | Endpoint               | Description                |
|--------|------------------------|----------------------------|
| GET    | `/user`                | Get all users              |
| POST   | `/user/register`       | Register a new user        |
| POST   | `/user/login`          | Log in a user              |


### 📡 Channel API  

| Method | Endpoint                 | Description                  |
|--------|--------------------------|------------------------------|
| POST   | `/channel/email`         | Get channel by user email    |
| POST   | `/channel/createChannel` | Create a new channel         

### 📺 Video API  

| Method  | Endpoint                    | Description                                      |
|---------|-----------------------------|--------------------------------------------------|
| GET     | `/videos/`                   | Get all videos                                  |
| GET     | `/videos/:id`                | Get video by its ID                             |
| GET     | `/videos/userId/:id`         | Get videos belonging to a particular user ID   |
| POST    | `/videos/`                   | Add a new video                                |
| POST    | `/videos/comment/:id`        | Add a comment using video ID                   |
| PUT     | `/videos/addComment`         | Edit a comment                                 |
| DELETE  | `/videos/deleteComment`      | Delete a comment                               |
| DELETE  | `/videos/:id`                | Delete a video by its ID 



## Tech Stack

- Node.js
- Express.js
- MongoDB and Mongoose
- JWT (JSON Web Token)



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

