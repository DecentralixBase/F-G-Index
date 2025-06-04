# Fear & Greed Index Dashboard

A futuristic, responsive dashboard for visualizing Fear & Greed Index data for cryptocurrency and stock markets.

## Features

- Modern, futuristic UI with glassmorphism and glowing effects
- Responsive design that works on all device sizes
- Interactive components with hover animations
- Fear & Greed gauge with color indicators
- Line and bar charts for data visualization
- Toggle between Crypto and Stock market data
- Mini calendar widget

## Tech Stack

- React
- TailwindCSS
- Framer Motion for animations
- Custom SVG charts
- Orbitron & Exo fonts

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment

This project is ready for deployment on Vercel:

1. Push the code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the React configuration and deploy it

## Project Structure

- `src/Dashboard.jsx` - Main dashboard component
- `src/components/` - Reusable UI components:
  - `InfoCard.jsx` - Statistics cards with mini charts
  - `Gauge.jsx` - Circular gauge for Fear & Greed Index
  - `TogglePanel.jsx` - Data source toggle (Crypto/Stock)
  - `MiniChart.jsx` - Small sparkline charts
  - `LineChart.jsx` - Time-series line chart
  - `BarChart.jsx` - Comparative bar chart
  - `CalendarWidget.jsx` - Mini calendar component

## Customization

- Color scheme can be modified in `tailwind.config.js` and `src/index.css`
- Data is currently mocked in `src/Dashboard.jsx` and can be replaced with API calls
- Fonts can be changed in `src/index.css`

## License

MIT

## Author

Created with ❤️ for a futuristic Fear & Greed Index visualization. 