# 📷 VistaGram

VistaGram is a modern, responsive social media web application built with **React**, **Vite**, and **Tailwind CSS**. Inspired by Instagram, it features a clean dark-themed interface, allowing users to browse feeds, view profiles, and manage authentication.

## ✨ Key Features

- **Interactive Social Feed**: An Instagram-style home feed with support for likes, comments, bookmarks, and sharing capabilities.
- **Detailed User Profiles**: Displays user statistics (posts, followers, following counts), avatar, custom biography, and a responsive post grid categorized by posts and bookmarks.
- **Secure Authentication**: Complete Sign Up and Log In screens with automated redirection and persistent session state.
- **Adaptive Layout**: Fully responsive sidebars for desktop and tablet screens that gracefully transform into a mobile-friendly bottom navigation bar.
- **Robust State Management**: Integrated global state management using Zustand for user credentials, tokens, and layouts.
- **Preconfigured Axios Client**: Built-in Axios instance tailored for direct, effortless communication with the backend API gateway.

## 🚀 Technologies Used

- **Framework**: React 19, Vite (SWC)
- **Styling**: Tailwind CSS (v4), DaisyUI (v5)
- **Routing**: React Router (v7)
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Linting**: ESLint

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js (v18 or higher recommended) and npm (or yarn/pnpm/bun) installed on your machine.

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   git clone https://github.com/liunadirizkyh/medsos.git
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variables. Create a `.env` file in the root of the `frontend` folder and specify the backend API base URL:
   ```env
   VITE_BASE_URL=https://medsos-backend.vercel.app/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to see the application in action.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📝 License

This project is privately owned and developed. All rights reserved.
