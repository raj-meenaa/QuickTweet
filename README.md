# Twitter Clone - MERN Stack

Welcome to the Twitter Clone project! This repository contains the code for a fully functional Twitter-like application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The app features a complete interface for posting tweets, following users, and engaging with content, with a responsive design optimized for both desktop and mobile devices.

## Project Overview

This Twitter clone aims to replicate the core features of Twitter, providing users with a seamless social media experience. The project is designed to be scalable, performant, and user-friendly, making it a great example of a full-stack web application.

### Live Demo

The project is deployed and live! You can check it out [here](https://twitter-clone-ynk4.onrender.com/).

### Features

- **User Authentication:** Secure sign-up and login using JWT tokens.
- **Tweet Posting:** Create, edit, and delete tweets.
- **User Following:** Follow and unfollow other users to see their tweets in your feed.
- **Like & Retweet:** Engage with content through likes and retweets.
- **Commenting:** Interact with tweets by adding comments.
- **Responsive Design:** Enjoy a seamless experience on both desktop and mobile devices.
- **Real-Time Updates:** Instant updates to tweets and interactions using WebSockets.

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** [Render] 

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/RajMeena01/twitter-clone.git
2. **Navigate to the Project Directory:**
    ```bash
   cd twitter-clone
3. **Install Backend Dependencies:**
    ```bash
   cd backend
   npm install

4. **Install Frontend Dependencies:**
    ```bash
   cd ../frontend
   npm install


5. **Set Up Environment Variables:**
    ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
    NODE_ENV=development
   CLOUDINARY_CLOUD_NAME=your_CLOUDINARY_CLOUD_NAME
    CLOUDINARY_API_KEY=your_CLOUDINARY_API_KEY
    CLOUDINARY_API_SECRET=your_CLOUDINARY_API_SECRET



6. **Run the Backend:**
    ```bash
   cd backend
   npm run dev

7. **Run the Frontend:**
    ```bash
   cd ../frontend
   npm run dev


