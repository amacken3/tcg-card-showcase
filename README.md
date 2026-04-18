# Stack & Shuffle

Stack & Shuffle is a React-based single page application for a trading card shop. Users can browse inventory, search for cards, and view card details, while the admin side allows inventory to be added, updated, and removed.

## Features

- Client-side routing with React Router
- Home page with branded store banner
- Shop page with searchable card inventory
- Admin page with inventory management tools
- Full CRUD with `json-server`
- Shared inventory state through a custom hook and React context
- Controlled forms for adding and editing cards
- Component and page test coverage with Vitest and React Testing Library

## Hooks Used

This project uses both standard and custom React hooks.

### Standard hooks
- `useState` for form state and search state
- `useEffect` for fetching card data
- `useContext` for shared inventory data/functions
- `useRef` for refocusing the form input after submission
- `useId` for accessible label/input pairing

### Custom hook
- `useCards` for fetching cards and handling create, update, and delete logic

## Routes

- `/` → Home page
- `/shop` → Shop inventory page
- `/admin` → Admin inventory management page

## How the App Works

### Home page
The home page displays the store banner and branding for Stack & Shuffle.

### Shop page
The shop page reads inventory data and displays all available cards. Users can search by card name using the search bar, and the list updates as they type.

### Admin page
The admin page allows inventory management. New cards can be added through a controlled form, existing cards can be deleted, and card price/stock values can be updated.

## Tech Stack

- React
- React Router
- Vite
- CSS Modules
- `json-server`
- Vitest
- React Testing Library

## Project Setup

### 1. Clone the repository

You will need three terminals open to allow for running the local json server, running the dev server, and running the tests

```bash
git clone https://github.com/amacken3/tcg-card-showcase.git

cd tcg-card-showcase

npm install

npm run server 

npm run dev

npm run test