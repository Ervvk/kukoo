# Kukoo

It is a dashboard application used to manage multiple warehouses of your company.

## Run locally

```bash
npm install
npm run dev
```

## Demo

[https://kukoo-woad.vercel.app/](https://kukoo-woad.vercel.app/)

## Run locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

## Environmental Variables

The project uses the Supabase Api Client. Contact the owner of the repo to get access variables.

env.local. file should contain:

```bash
VITE_SUPABASE_URL='api url'

VITE_SUPABASE_ANON_KEY='api key'
```

## Backend

The backend part of the project was created with Supabase and PostgresSQL. The application uses supabaseClient to communicate with the supabase api

## Linting

The project uses eslint custom config.
You can automatically fix linting errors:

```bash
npm run lint
```

## Git hooks

The project uses Husky to make a 'pre-commit' hook that runs the eslint check before each commit.

## Deployment

The site is deployed on the Vercel Platform
