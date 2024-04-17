# Rob's Recipes (WIP)

#### A simple full-stack application exploring the AstroJS framework

_screenshot_

## Requirements / Purpose

This project focuses on two objectives: building a first project using the AstroJS full-stack framework, and styling a website that I would actually use to upload my favourite recipes for reference later in my culinary adventures (there are not many currently).

I wanted to investigate Astro because of the allure of building vanilla HTML/CSS pages where necessary, while only adding JavaScript functionality where it's needed. ReactJS is my chosen library for interactivity, so only hydrating the pages/components that require it helps reduce the heaviness of having just a React application when only certain 'islands' require the functionality that it serves. The result is a smaller load-size and a quicker paint, with less technicality in the development environment.

I have included [Nanostores](https://www.npmjs.com/package/nanostores) as a lightweight replacement for React Context, to help with persistent server data on the frontend and to reduce the amount of API calls being made to the Turso database.

**Tech Stack:** HTML, Tailwind CSS, TypeScript, ReactJS, AstroJS, TursoDB

## Build Steps

To get this project running in your local environment, paste this into your terminal:

```bash
git clone git@github.com:encodexed/astro-recipes.git
cd astro-recipes
npm install
npm run dev
```

## Design Goals / Approach

- Given that PC players of ESO have third party mods that can give a more integrated benefit to aspiring alchemists, this app's audience involves those not willing to install third party mods, or Xbox/Playstation users.
- With that in mind, the app was designed to fit a small screen device first, with some consideration given to those who used larger screens secondarily.
- The app boasts a very high degree of accuracy but not 100%, as far as I can tell. This is due to some unknowns regarding the in-game system. The entire logic system to emulate the game was written from scratch by me.
- Data is kept locally and in-memory storage is used extensively as React's `useContext` serves the project well (compared to the previous iteration that featured plenty of messy prop drilling)

## Known issues

No known issues apart from the website _not being finished yet_.

Feel free to [raise an issue]('https://github.com/encodexed/astro-recipes/issues') if you discover a bug or anything else.

## Future Goals

- Complete the project
- Add responsiveness for different media sizes
