# TravelCo - Travel Booking Application

A modern, responsive travel booking platform built with React, TypeScript, and Tailwind CSS. This application allows users to browse destinations, make bookings, and process payments securely.

![TravelCo Screenshot](https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800)

## Features

-  🌍 Browse popular travel destinations
-  🔍 Search and filter destinations
-  📅 Book trips with date selection
-  👥 User authentication system
-  💳 Secure payment processing with Stripe
-  🌓 Dark/Light theme support
-  📱 Fully responsive design
-  🗺️ Interactive location maps
-  ✨ Smooth animations with Framer Motion

## Tech Stack

-  **Frontend Framework:** React with TypeScript
-  **Styling:** Tailwind CSS
-  **Routing:** React Router
-  **Icons:** Lucide React
-  **Testing:** Jest
-  **Animations:** Framer Motion
-  **Payment Processing:** Stripe
-  **Build Tool:** Vite
-  **Deployment:** Netlify

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_GEOAPIFY_API_KEY=your_geoapify_api_key
```

## Project Structure

```
src/
├── components/     # React components
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── lib/           # Third-party library configurations
└── config/        # Application configuration
```

## Key Components

-  **Hero:** Landing page hero section with search functionality
-  **Destinations:** Grid display of available travel destinations
-  **BookingPage:** Detailed view of destinations with booking form
-  **PaymentForm:** Secure payment processing with Stripe integration
-  **UserDashboard:** User profile and booking management
-  **ThemeToggle:** Dark/light mode switcher

## Authentication

The application includes a complete authentication system with:

-  User registration
-  Login/logout functionality
-  Protected routes
-  User profile management

## Booking System

Users can:

-  View destination details
-  Select travel dates
-  Choose number of guests
-  View pricing information
-  Process payments securely

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Live Demo

Visit the live application: [TravelCo Demo](https://travel-website-b4e86d.netlify.app/)

## Acknowledgments

-  Images from [Unsplash](https://unsplash.com)
-  Icons from [Lucide](https://lucide.dev)
-  Maps integration using [OpenStreetMap](https://www.openstreetmap.org)
