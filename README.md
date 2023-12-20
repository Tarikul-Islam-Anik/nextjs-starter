# Next.js Starter Template

This is a simple starter template for a Next.js project with TypeScript, ESLint, Prettier, and Tailwind CSS.

## Getting Started

To get started with this template, clone the repository and install the dependencies with `npm install`. Then, you can start the development server with `npm run dev`.

Please note that this is a starter template and you may need to adjust the configuration and scripts according to your project's needs.

## Project Structure

- `app/`: Contains the global CSS file and the main layout component for your Next.js application.
- `.vscode/`: Contains settings for Visual Studio Code, such as enabling ESLint and Prettier on save.
- `next.config.js`: Configuration file for Next.js.
- `package.json`: Lists the project dependencies and scripts.
- `postcss.config.js`: Configuration file for PostCSS.
- `tailwind.config.ts`: Configuration file for Tailwind CSS.
- `tsconfig.json`: Configuration file for TypeScript.

## Scripts

In the `package.json` file, there are several scripts that you can run:

- `npm run dev`: Starts the development server.
- `npm run turbo`: Starts the development server with Turbo Mode enabled.
- `npm run build`: Builds the application for production.
- `npm run build:analyze`: Builds the application for production and analyzes the bundle.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs the linter (ESLint).
- `npm run format`: Formats the code using Prettier.
- `npm run format:check`: Checks if the code is formatted correctly.
- `npm run typecheck`: Checks if the code is typed correctly (TypeScript).

## Configuration

- ESLint is configured to extend from `next/core-web-vitals` and `prettier`.
- Prettier is configured with a trailing comma of `es5`, a tab width of 2, and single quotes.
- Tailwind CSS is configured to scan JS, TS, JSX, TSX, and MDX files in the `pages/`, `components/`, and `app/` directories.

## Components

- `app/layout.tsx`: This is the main layout component for your Next.js application. It includes the `Inter` font from Google Fonts and a `RootLayout` component that wraps around the children components.

## Styling

- `app/globals.css`: This is where you can add global styles. It includes the base, components, and utilities styles from Tailwind CSS.

## TypeScript

- The `tsconfig.json` file is configured to target `es5`, allow JavaScript files, skip library checks, and more.
