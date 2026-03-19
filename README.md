# Malik Muhammad Ahmad - Single-Page Developer Portfolio

A responsive single-page portfolio website showcasing my development projects, skills, and contact information. Built with vanilla HTML, CSS, and JavaScript as a solution to the [Frontend Mentor Single-page Developer Portfolio Challenge](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x).

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Built With](#built-with)
- [Project Highlights](#project-highlights)
- [Key Learnings](#key-learnings)
- [Live Site & Repository](#live-site--repository)
- [Author](#author)

## Overview

This portfolio website presents my front-end development work, skills, and professional information in a clean, interactive interface. The site features responsive design across mobile, tablet, and desktop devices, with smooth animations and interactive hover effects. Featured projects include ICoder-Heaven, Weather Web App, XO-Game, E-Commerce Website, Swift Shop, and DocuForge.

## Features

- **Responsive Design**: Mobile-first approach with optimized layouts for mobile (≤768px), tablet (769px-1024px), and desktop (1025px+)
- **Interactive Project Overlays**: Hover effects reveal GitHub and live demo links for each project
- **Typing Animation**: Animated hero description text that types out on page load
- **Contact Form**: Fully functional contact form integrated with FormSubmit to receive messages directly via email
- **Accessible Navigation**: Keyboard-friendly navigation with social media links (GitHub, LinkedIn)
- **Smooth Animations**: CSS transitions and animations for interactive elements
- **Pattern Design Elements**: Decorative SVG pattern rings positioned throughout the page

## Built With

- **Semantic HTML5** - Structured, accessible markup
- **CSS3** - Advanced styling with:
  - CSS Custom Properties (variables) for theming
  - Flexbox for layouts
  - CSS Grid for skill sections and project gallery
  - Media queries for responsive design
  - Transitions and animations
- **Vanilla JavaScript** - Pure JS for:
  - Project overlay interactions (mouseenter/mouseleave events)
  - Character-by-character typing animation
  - DOM manipulation

## Project Highlights

### 1. ICoder-Heaven For Programmers
- HTML
- Programming community platform
- [View Project](#) | [View Code](#)

### 2. Weather Web App
- HTML, CSS, Python
- Real-time weather information application
- [View Project](#) | [View Code](#)

### 3. XO-Game
- JavaScript, CSS, HTML
- Interactive Tic-Tac-Toe game
- [View Project](#) | [View Code](#)

### 4. E-Commerce Website
- HTML, JavaScript, CSS, Python
- Full-featured online shopping platform
- [View Project](#) | [View Code](#)

### 5. Swift Shop
- JavaScript, CSS, HTML
- Modern e-commerce interface
- [View Project](#) | [View Code](#)

### 6. DocuForge
- TypeScript, CSS, HTML
- Document management system
- [View Project](#) | [View Code](#)

## Key Learnings

### CSS Positioning & Stacking Context
- Mastered absolute positioning within relative containers
- Understood z-index layering and positioning context
- Fixed pattern ring visibility issues through proper stacking order

### Responsive Design Architecture
- Implemented mobile-first workflow with media queries
- Created flexible layouts using Flexbox and CSS Grid
- Optimized typography and spacing for different viewport sizes

### JavaScript Interactivity
- Implemented event-driven interactions with addEventListener
- Built typing animation algorithm with character-by-character delays
- Practiced DOM manipulation with classList methods

### Form Integration
- Integrated FormSubmit service for contact form functionality
- Implemented form validation with HTML5 attributes
- Ensured seamless email delivery of contact messages

## Technical Implementation

### Responsive Breakpoints
- **Mobile**: ≤768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px+

### Project Card Overlay Effect
```javascript
const projects = document.querySelectorAll(".project");
projects.forEach((project) => {
  project.addEventListener("mouseenter", () => {
    project.querySelector(".overlay").classList.add("visible");
  });
  project.addEventListener("mouseleave", () => {
    project.querySelector(".overlay").classList.remove("visible");
  });
});
```

### Typing Animation
- Character-by-character animation with 50ms delays
- Executes automatically on page load
- Creates engaging hero section intro

### Skills Showcase
- HTML (Advanced)
- CSS (Advanced)
- JavaScript (Intermediate)
- Bootstrap (Advanced)
- TailwindCSS (Intermediate)
- React (Intermediate)
- TypeScript (Intermediate)
- Python (Intermediate)
- SQL (Intermediate)

## Live Site & Repository

- **GitHub**: [malikmahmad](https://github.com/malikmahmad)
- **LinkedIn**: [Muhammad Ahmad](https://www.linkedin.com/in/muhammad-ahmad-788b62338)
- **Email**: malikmuhammadahmadma@gmail.com

## Author

**Malik Muhammad Ahmad**
- Front-end developer passionate about building accessible web apps
- Experienced in HTML, CSS, JavaScript, and modern frameworks
- Currently expanding expertise in TypeScript, Python, and full-stack development

---

*This portfolio is continuously updated with new projects and skills as I grow as a developer.*