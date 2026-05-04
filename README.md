# Tiles Gallery

Tiles Gallery is a single page application that showcases curated tile designs, styles, and materials with private detail pages for logged-in users.

Live URL: https://your-deployed-url.vercel.app

## Key Features

- Responsive layout with hero banner, marquee, and featured tiles
- All Tiles gallery with search by title and detailed tile cards
- Private tile detail pages with creator, style, and tag metadata
- Authentication with email/password and Google via Better Auth
- My Profile and Update Information flows powered by Better Auth `updateUser`
- Custom loader and not-found experiences

## Tech Stack and Packages

- Next.js (App Router)
- Tailwind CSS
- better-auth, @better-auth/mongo-adapter, mongodb
- animate.css

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `NEXT_PUBLIC_BETTER_AUTH_URL`
- `MONGODB_URI`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

## Route Access

- Public: `/`, `/all-tiles`, `/login`, `/register`
- Private: `/tile/[id]`, `/my-profile`, `/my-profile/update`

## Development

```bash
npm install
npm run dev
```

## Deployment

Deploy with Vercel or Render and ensure all environment variables are set. Next.js handles client-side routing for reload-safe navigation.
# B13-A8
