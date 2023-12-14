# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./Screenshot_no_active.png)
![](./Screenshot_active.png)


### Links

- Solution URL: [https://github.com/cocotiwak/result-summary](https://github.com/cocotiwak/result-summary)
- Live Site URL: [https://result-summary-taupe-phi.vercel.app/](https://result-summary-taupe-phi.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox



### What I learned



```html
<div class="stats">
   <div class="reaction">
        <p class="item"><img src="./assets/images/icon-reaction.svg"> Reaction</p><p class="score">80 <span class="score-max">/ 100</span></p>
   </div>
</div>
```
```css
.circle{
    width: 150px;
    height: 150px;
    border-radius: 50%;

:root{
    --Light-red: hsl(0, 100%, 67%);
    --Orangey-yellow: hsl(39, 100%, 56%);
    --Green-teal: hsl(166, 100%, 37%);
    --Cobalt-blue: hsl(234, 85%, 45%);
    --Light-slate-blue: hsl(252, 100%, 67%);
    --Light-royal-blue: hsl(241, 81%, 54%);
    --Violet-blue: hsla(256, 72%, 46%, 1);
    --Persian-blue: hsla(241, 72%, 46%, 0);
    --White: hsl(0, 0%, 100%);
    --Pale-blue: hsl(221, 100%, 96%);
    --Light-lavender: hsl(241, 100%, 89%);
    --Dark-gray-blue: hsl(224, 30%, 27%);

```

```



### Continued development

- learn Javascript for reading JSON file and update html code.


### Useful resources


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
