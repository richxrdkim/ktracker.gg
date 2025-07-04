# ktracker.gg

A stat projection web app for Valorant VCT matches that helps you predict whether a player will go over or under a kill threshold in the first two maps.

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
