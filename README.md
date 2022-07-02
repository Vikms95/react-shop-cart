# VGKeys

# 👉 [LIVE PREVIEW](https://vikms95.github.io/react-shop-cart/) 👈

![alt text](/src/assets/VGKeys-showcase.gif "gif of shop cart demo")

## Description
Videogame digital key webpage where you can filter videogames with the various options provided. You can later modify the amount of items of each unit and check-out to proceed with the payment. 

## Getting started

```
git clone https://github.com/Vikms95/react-shop-cart.git
cd react-shop-cart
npm install
npm start
```

## Project Objectives

1. Do my first project which incorporates React, Typescript, TDD and react-router
2. Establish an ESLint config for future use
3. Be able to spend my time to make this project portfolio worthy
4. Use different git tools to solidify what I've learnt on previous lessons
5. Establish a good testing architecture combining unit and UI tests

## What I've learnt with this project

1. Using react-router
2. Passing setState as props to change state from parent component
3. Check library documentation to look up the code logic and get to use its functions in a better manner
4. Typing props and function parameters with Typescript

## Technologies used

1. React
2. Jest / Testing-Library
3. react-router
4. Typescript
5. ESLint

## Challenges I faced 

1. Make app aware of what is being rendered and what is not
2. Figuring out what to test on my components
3. Setting up Typescript strict mode

## Room for improvement

- [x] After further reading, saw that passing setState directly as props
  is not good practice. Refactor to encapsulate setState within a function and then pass that function as props

- Set loading animation upon loading (after further reading, I should try doing it with a HOC https://www.smashingmagazine.com/2020/06/higher-order-components-react/)

- [ ] Set "No results found" message when no results from the API are given

- Fix ImageSlider animation to be smoother

- Fix video scaling or use another one with better aspect ratio

- Add infinite scroll by making a bigger request while scrolling down the page

- Apply light forms background like in : https://filext.com/file-extension/RULES

- Add more tests to make sure some components have certain elements rendered

- Clean CSS using variables or add styles-components/MUI

- Use the context API or HOC's

. I've seen that using setInterval inside a function is bad idea..https://www.youtube.com/watch?v=5KvlQDYDZwY&list=WL&index=51&t=263s

- White squares on the bottom of Homepage

-Alternative to video?

-Buttons nav too big, in some screens, the hamburguer menu gets placed below

-Add hover styles to shopping cart button + hamburguer + search + adjust padding

-Game items look missaligned in some cases

- Work on checkout, allow users to decrement and increment items from there, use sticky for the checkout element?

-Find a way to make images load on lower resolution, add a background so the white gap cannot be seen while loading

-Add genre and platform filters

-Add infinite scrolling

-Zooming breaks the layout

-Add to cart Item button shows up from below the dropdown whenever its opened

-Check if any state can be avoided by calculating it out of the merging of other states

-Pull out the component any reusable constants (put them above the component)

- Use typeof operator insteaf of booleans to type check

- Use unique keys for my mapped elements (assign id or href)

- Use tip 5 for the exports/modules (he calls it barrel) https://www.youtube.com/watch?v=5KvlQDYDZwY&list=WL&index=51&t=263s
