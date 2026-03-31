# TravelSphere

TravelSphere is a full-stack travel booking platform that allows users to explore, book, and customize travel packages from around the world. The platform features a modern React frontend and a robust Node.js/Express backend, with secure authentication, payment integration, and admin management.

## Features

### User Features
- Browse curated and custom travel packages
- User authentication (register, login, password reset)
- Book packages and make secure payments via Stripe
- View upcoming packages and detailed itineraries
- Submit feedback and subscribe to offers
- Request custom tours with personalized preferences

### Admin Features
- Manage travel packages (CRUD)
- Manage bookings and update statuses
- View all user feedback and subscriptions

## Tech Stack

- **Frontend:** React, React Router, TailwindCSS, Stripe.js, Vite
- **Backend:** Node.js, Express, MongoDB (Mongoose), Stripe, JWT, Nodemailer
- **Other:** Vercel (deployment), dotenv, bcryptjs, axios

## Project Structure

```
TravelSphere/
├── backend/      # Express API, MongoDB models, routes, controllers
├── frontend/     # React app, components, pages, context
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)
- Stripe account (for payments)

### Backend Setup
1. `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file with:
   - `PORT=5000`
   - `MONGO_URI=your_mongodb_connection_string`
   - `JWT_SECRET=your_jwt_secret`
   - `STRIPE_SECRET_KEY=your_stripe_secret`
   - `EMAIL_USER=your_email@example.com`
   - `EMAIL_PASS=your_email_password`
   - `FRONTEND_URL=http://localhost:5173`
4. Start the server: `npm start`

### Frontend Setup
1. `cd frontend`
2. Install dependencies: `npm install`
3. Create a `.env` or use Vite env variables for backend URL:
   - `VITE_BACKEND_URL=http://localhost:5000`
4. Start the dev server: `npm run dev`

## API Overview

### Auth
- `POST /register` — Register user
- `POST /login` — Login user
- `POST /resetPassword/:token` — Reset password
- `POST /resetPasswordLink` — Request password reset link

### Packages & Data
- `GET /api/packages` — List all packages
- `GET /api/packages/:title` — Get package by title
- `GET /api/reviews` — Get reviews
- `GET /api/images` — Get gallery images

### Payment
- `POST /api/create-checkout-session` — Create Stripe checkout session
- `POST /api/confirm-payment` — Confirm payment and booking

### Mail & Feedback
- `POST /api/subscribe` — Subscribe to offers
- `POST /api/customTour` — Request a custom tour
- `POST /api/feedback` — Submit feedback

### Admin
- `GET/POST/PUT/DELETE /admin/packages` — Manage packages
- `GET/PUT/DELETE /admin/bookings` — Manage bookings

## Main Pages (Frontend)
- `/` — Home: Hero, reviews, highlights
- `/about` — About TravelSphere, gallery, stats
- `/packages` — Browse and create custom packages
- `/upcomingpackages` — Upcoming trips
- `/login`, `/signup`, `/resetpassword` — Auth pages
- `/help` — Help and chatbot
- `/admin` — Admin dashboard

## Customization & Extending
- Add new packages via the admin dashboard or backend scripts
- Extend frontend pages/components in `frontend/src/`
- Add new API endpoints in `backend/routes/`

## License

This project is licensed under the ISC License.

---

*TravelSphere — Explore the world, your way!* 