# UIB – Underrated Indian Businesses

UIB (Underrated Indian Businesses) is a platform designed to help aspiring entrepreneurs discover, understand, and launch profitable Indian businesses that are often overlooked by mainstream startup content.

The platform provides detailed business guides covering investment requirements, profit margins, manufacturing processes, licensing requirements, government registrations, market demand, sourcing information, and scaling opportunities.

## Problem Statement

Most business-related websites focus on highly competitive startup ideas or generic entrepreneurship advice. However, thousands of profitable traditional Indian businesses remain largely undocumented despite generating significant revenue and employment.

UIB solves this problem by creating structured, beginner-friendly business blueprints that help users understand how real businesses operate in the Indian market.

## Features

### Business Discovery

* Curated collection of underrated Indian businesses
* Industry-wise categorization
* Business opportunity analysis
* Market demand insights

### Detailed Business Guides

* Step-by-step startup process
* Investment requirements
* Machinery and equipment information
* Raw material sourcing guidance
* Licensing and registration requirements
* Revenue and profit analysis

### Interactive User Experience

* Modern responsive UI
* Swiper-powered business showcase carousel
* Smooth navigation and animations
* Mobile-first design

### Authentication & Security

* Clerk authentication integration
* Protected routes
* User account management
* Secure access control

## Business Categories

Current business guides include:

* Okra Processing Business
* Refined Oil Business
* Fox Nuts (Makhana) Business
* Tragacanth Gum (Gond Katira) Business

More business categories are continuously being added.

## Tech Stack

### Frontend

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS

### UI & Animations

* Swiper.js
* GSAP
* Responsive Design Principles

### Authentication

* Clerk Authentication

### Deployment

* Vercel

## Project Architecture

/app
/components
/public
/lib
/middleware.ts

### Core Components

* Business Showcase Carousel
* Business Detail Pages
* Authentication System
* Dynamic Route Management
* Protected Dashboard

## Key Learnings

This project involved solving real-world challenges such as:

* Authentication and authorization
* Dynamic routing
* Route protection using Clerk middleware
* Responsive UI development
* State management
* SEO optimization
* User experience design
* Business content structuring

## Future Roadmap

* Business investment calculator
* Profit forecasting tools
* Business comparison system
* AI-powered business recommendation engine
* User dashboard and bookmarking
* Community discussions
* Multi-language support

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Create environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Vision

UIB aims to become the largest open platform for discovering and learning about profitable Indian businesses by making entrepreneurship knowledge accessible to everyone.

Built with the goal of empowering future entrepreneurs through practical, actionable business education.
