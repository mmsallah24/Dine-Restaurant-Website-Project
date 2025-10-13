# Frontend Mentor - Dine Website Challenge solution

This is a solution to the [Dine Website Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dine-restaurant-website-yAt7Vvxt7).  
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

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

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size (Desktop, Tablet, and Mobile)
- See hover states for all interactive elements throughout the site
- View and interact with active states and booking form validation
- Receive error messages when the booking form is submitted if:
  - The `Name` or `Email Address` fields are empty → “This field is required”
  - The `Email Address` is not formatted correctly → “Please use a valid email address”
  - The `Pick a date` or `Pick a time` fields are incomplete → “This field is incomplete”

---

### Screenshot

#### 💻 Desktop Views
| Page | Preview |
|:--|:--|
| Home | ![Desktop Home](./design/Desktop/Desktop%20-%20Home.png) |
| Booking | ![Desktop Booking](./design/Desktop/Desktop-Booking.png) |
| Active States | ![Active](./design/Active-state/Desktop-Home-Active.jpg) |

#### 📱 Tablet & Mobile
| Device | Preview |
|:--|:--|
| Tablet Home | ![Tablet Home](./design/Tablet/Tablet-Home.jpg) |
| Mobile Home | ![Mobile Home](./design/Mobile/Mobile-Home.jpg) |

#### 🎨 Design System Reference
| Design | Preview |
|:--|:--|
| Typography, Colors, Spacing | ![Design System](./design/Design%20System.jpg) |

---

### Links

- Solution URL: [Add your solution URL here](https://your-solution-url.com)
- Live Site URL: [Add your live site URL here](https://your-live-site-url.com)

---

## My process

### Built with

- Semantic **HTML5**
- **Tailwind CSS** (utility-first responsive styling)
- **Vanilla JavaScript (ES6+)**
- **Vite** (for local development)
- **Git & GitHub** for version control
- **Mobile-first workflow**

---

### What I learned

Working on this project helped reinforce:
- Structuring semantic and accessible HTML
- Using **Tailwind CSS** for spacing, colors, and responsive design without writing custom CSS
- Managing state and form validation logic using pure **Vanilla JS**
- Handling responsive breakpoints and alignment with **Flexbox** and **Grid**

Example JavaScript snippet for form validation:

```js
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('Form submitted 🎉');
});


Continued development

In future projects, I plan to:

Add backend form submission using Firebase or Node.js

Improve accessibility with ARIA attributes

Integrate animations for smoother UI transitions

Useful resources

Tailwind CSS Documentation
 - Helped with responsive classes and layout structure.

Vite Official Docs
 - Great for quick project setup and dev server.

Frontend Mentor Slack Community
 - Helpful discussions and tips.

Author

Name: Muhammad Mustapha Sallah

Frontend Mentor: @mmsallah24

GitHub: @mmsallah24

Location: The Gambia

Acknowledgments

Special thanks to Frontend Mentor for providing this challenge and design files, and to my HTML & CSS instructor for guiding us through responsive design principles and best practices.