# ktracker.gg - Valorant Kill Projection Tracker

ktracker.gg is a simple web application that displays historical kill data for Valorant players and allows users to make over/under projections based on that data. The site is inspired by platforms like PrizePicks and PandaScore and is intended to help users make informed predictions for fantasy or statistical purposes.

## Features
- Responsive layout with Bootstrap
- Dropdown + input form for projections
- Match table with past data
- JavaScript functions to calculate average kills and return prediction

## How it works
1. Select a team
2. Enter a player’s name
3. Enter a kill line (e.g., 15)
4. ktracker.gg checks their last 10 games and shows the projection

## Files
- `index.html` – Layout & UI
- `styles.css` – Optional styling
- `match-data.js` – Manually collected VCT stats
- `script.js` – JS logic for projections

## Notes
- Data sourced manually from https://vlr.gg
- Project is California-safe and does not involve betting
- Educational tool designed for fans and esports analysts
