# Manual Transmission Simulator

## Overview

This is a full-stack web application that simulates manual transmission behavior, providing an educational tool for understanding gear ratios, RPM calculations, and transmission mechanics. The application features an interactive RPM gauge, gear ratio controls, and educational content to help users learn about manual transmissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom automotive-themed color variables
- **State Management**: React useState hooks for local component state
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-based sessions with connect-pg-simple
- **API Design**: RESTful endpoints with /api prefix

### Build and Development
- **Build Tool**: Vite for frontend bundling and development server
- **Backend Bundling**: esbuild for production server builds
- **Development**: Hot module replacement and error overlay in development
- **TypeScript**: Strict configuration with path mapping for clean imports

## Key Components

### Frontend Components
1. **RPM Gauge** (`rpm-gauge.tsx`): Interactive circular gauge displaying engine RPM with color-coded zones
2. **Input Panel** (`input-panel.tsx`): Controls for gear ratios, vehicle speed, axle ratio, and tire diameter
3. **Educational Panel** (`educational-panel.tsx`): Learning modules and scenario loading functionality
4. **UI Components**: Complete shadcn/ui component library for consistent design

### Backend Components
1. **Route Handler** (`routes.ts`): Express route registration and HTTP server setup
2. **Storage Interface** (`storage.ts`): Abstracted storage layer with in-memory and database implementations
3. **Vite Integration** (`vite.ts`): Development server integration with SSR capabilities

### Shared Components
1. **Database Schema** (`schema.ts`): Drizzle ORM schema definitions with Zod validation
2. **Type Definitions**: Shared TypeScript types between frontend and backend

## Data Flow

### RPM Calculation Flow
1. User adjusts vehicle parameters (speed, gear ratios, axle ratio, tire diameter)
2. Frontend calculates RPM using transmission formula: `(axle ratio × speed × gear ratio × 336.13) / tire diameter`
3. RPM value updates gauge visualization and color coding
4. Educational content provides contextual information based on RPM ranges

### State Management
- Local component state for simulation parameters
- React Query for any future API interactions
- No global state management needed due to simple application scope

### Session Management
- PostgreSQL-based session storage configured but not currently utilized
- User schema prepared for future authentication features

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **UI Components**: Extensive Radix UI component library
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Data Fetching**: TanStack React Query
- **Forms**: React Hook Form with Hookform resolvers
- **Utilities**: date-fns, nanoid, wouter

### Backend Dependencies
- **Web Framework**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session Management**: express-session, connect-pg-simple
- **Development**: tsx for TypeScript execution, esbuild for bundling

### Development Dependencies
- **Build Tools**: Vite, TypeScript, esbuild
- **Database Tools**: Drizzle Kit for migrations
- **Replit Integration**: Specialized Vite plugins for Replit environment

## Deployment Strategy

### Production Build Process
1. Frontend: Vite builds React application to `dist/public` directory
2. Backend: esbuild bundles Express server to `dist/index.js`
3. Static files served from built frontend directory

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Development**: NODE_ENV-based configuration switching
- **Replit**: Special handling for Replit development environment

### Database Management
- **Migrations**: Drizzle Kit handles schema migrations in `./migrations` directory
- **Schema**: PostgreSQL dialect with programmatic schema definition
- **Connection**: Serverless-compatible connection pooling via Neon

### Development Workflow
- Hot reloading for both frontend and backend changes
- Integrated development server with proxy configuration
- TypeScript compilation checking without emission
- Database schema push command for development iterations

The application is designed for educational use with a focus on automotive transmission concepts, featuring real-time calculations and interactive visualizations to enhance learning about manual transmission mechanics.