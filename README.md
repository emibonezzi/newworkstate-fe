# New York State Jobs Frontend

This project is a frontend application built with React, TypeScript, Chakra UI, React Query, and React Router. It provides a user-friendly interface for exploring job listings scraped from the New York State jobs website.

## Project Structure

- **main.tsx**: Entry point for the React application. It sets up providers for Chakra UI, React Query, and React Router.
- **routes.tsx**: Defines the routes for the application, including the homepage and job board.
- **components/Layout.tsx**: Layout component that includes the navigation, main content area, and footer.
- **hooks/useJobs.ts**: Custom hook that fetches job data using React Query.
- **pages/Homepage.tsx**: Homepage component with a welcome message and a link to the job board.
- **pages/JobBoard.tsx**: Job board component that displays job listings with filters and search functionality.
- **services/api-client.ts**: API client for making HTTP requests to the backend.
- **state-management/query/store.ts**: State management for query parameters using Zustand.

## Getting Started

### Prerequisites

- Node.js (18.x or higher)
- npm or yarn

### Installing

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/newworkstate-fe.git
   cd newworkstate-fe
   ```
