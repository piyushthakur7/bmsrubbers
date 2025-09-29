# Overview

BM Scrubber is a React-based web application for a cleaning equipment manufacturer. The application serves as a corporate website showcasing the company's industrial cleaning solutions with features like product catalogs, company information, and contact forms. It's built as a full-stack application with a React frontend, Express backend, and PostgreSQL database integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Features, Products, FAQ, and Contact
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **Component Structure**: Modular component architecture with reusable UI components in `/components/ui/`

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with routes prefixed under `/api`
- **Development Setup**: Hot reloading with Vite in development mode, esbuild for production builds
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Logging**: Request/response logging with performance metrics for API endpoints

## Data Storage
- **Database**: PostgreSQL with connection via Neon Database serverless driver
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: Defined in shared schema file with Zod validation integration
- **Migrations**: Drizzle Kit for database schema migrations and version control
- **Fallback Storage**: In-memory storage implementation for development/testing

## Authentication & Session Management
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **User Management**: Basic user schema with username/password authentication structure
- **Type Safety**: Shared TypeScript types between frontend and backend for user entities

## Build & Deployment
- **Development**: Concurrent frontend (Vite) and backend (tsx) development servers
- **Production Build**: Vite builds frontend to `/dist/public`, esbuild bundles backend to `/dist`
- **Static Assets**: Frontend assets served by Express in production mode
- **Environment Configuration**: Environment-based configuration for database connections and API endpoints

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database provider
- **Connection**: Uses `@neondatabase/serverless` driver for database connectivity

## UI & Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI components
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Web fonts (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)

## Development Tools
- **Replit Integration**: Development banner and cartographer plugins for Replit environment
- **TypeScript**: Static type checking across the entire application
- **Vite Plugins**: Runtime error overlay and development tooling

## Form & Validation
- **React Hook Form**: Form state management with `@hookform/resolvers`
- **Zod**: Schema validation library integrated with Drizzle ORM
- **Form Components**: Custom form components built on Radix UI primitives

## Utility Libraries
- **Date-fns**: Date manipulation and formatting
- **Class Variance Authority**: Utility for managing component variants
- **CLSX & Tailwind Merge**: Conditional CSS class composition
- **Nanoid**: Unique ID generation for various application needs