# Super App

## Live Demo

**Vercel:** https://super-9pyfbmq0f-pranav-ukey-dev.vercel.app/

## GitHub Repository

Add your GitHub repository link here.

---

## Project Overview

Super App is a React-based entertainment dashboard built as part of the Frontend Challenge. The application allows users to register, select entertainment categories, view a personalized dashboard, and browse movies based on their interests.

---

## Features

### User Registration

* Name, Username, Email and Mobile Number
* Form validation
* User data persistence

### Category Selection

* Entertainment category selection
* Minimum 3 categories required to continue

### Dashboard

* User Profile Card
* Live Weather Widget (OpenWeather API)
* Notes Widget with Local Storage persistence
* Countdown Timer
* Live News Widget
* Browse Movies button

### Movies

* Movie recommendations based on selected categories
* Movie modal with details
* Horizontal scrolling movie lists

---

## Tech Stack

* React
* Vite
* Tailwind CSS
* Zustand
* React Router
* OpenWeather API
* News API
* TMDB API

---

## Project Structure

```
src/
│
├── assets/
├── components/
├── pages/
├── routes/
├── services/
├── store/
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd super-app
```

Install dependencies

```bash
npm install
```

Create a `.env` file and add the following variables

```env
VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
VITE_OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
VITE_NEWS_API_KEY=YOUR_NEWS_API_KEY
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## Notes

* User information, selected categories, and notes are persisted using browser storage.
* The News widget uses a public news API. Depending on the API provider's CORS policy, news may work locally but require a backend proxy or an alternative provider for deployed frontend applications.

---

## Author

Pranav Ukey
