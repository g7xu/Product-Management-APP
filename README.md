# Product Management App - Building the wheel

This repository demonstrates my learning journey with React frontend development. It's a simple web application (WAP) frontend interface powered by React that performs basic product management operations.

## Thinking Process

I chose to use **class components** to deeply understand React's lifecycle methods and state management. The main `ProductTable` component encapsulates all the product management logic, demonstrating how React components can be self-contained units that manage their own state.

The result of the render function is where we need to return a single component. I think another important thing I realized is that when passing functions into the component returned by the render, it is important that we either use arrow functions or have `this` bound so that the JavaScript `this` statement can have the right context.

In addition, I also tried to implement the entire React lifecycle in this product where we have the constructor, the component mount, and render that represent the initial state, middle state, and final rendering state.

## Data Flow
- Initial Props flow down from parent (`App.jsx`) to child (`ProductTable`)
- State is initialized in constructor() and managed throughout the component
- User interactions with `add` and `delete` buttons trigger state updates via `setState()`

## Key Learnings
- **Lifecycle Methods**: Using `constructor` for initialization and `componentDidMount` to understand when components are ready
- **Immutable Updates**: Always creating new arrays/objects when updating state, never mutating directly

This project helped me understand the fundamental patterns of React development and how to build interactive user interfaces with proper state management.

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/g7xu/Product-Management-APP.git
cd Product-Management-APP
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## File Structure

```
Product-Management-APP/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for deployment
├── public/
│   └── vite.svg                # Public assets
├── src/
│   ├── compoents/
│   │   └── productTable_component.jsx  # Main ProductTable class component
│   ├── App.jsx                 # Root component, passes initial products
│   ├── App.css                 # App-specific styles
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration (includes base path for GitHub Pages)
├── package.json                # Project dependencies and scripts
└── README.md                   # This file
```
