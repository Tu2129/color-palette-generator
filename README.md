Color Palette Generator

A small, responsive web app that generates a palette of six random colors every time you click a button. Each color shows its hex code, so you can use it straight in your own projects.

Built with plain HTML, CSS and JavaScript, with no frameworks or libraries.

Features
Generates 6 random colors per click
Shows the hex code under every color
Generates a fresh palette automatically when the page loads
Fully responsive: one row on large screens, a 3×2 grid on phones
No dependencies, just open index.html

Tech Stack
Area	What I used
Structure	HTML5
Styling	CSS Grid, Flexbox, clamp(), media queries
Logic	Vanilla JavaScript (DOM manipulation, template literals)

Responsive Design

The palette uses CSS Grid with repeat(auto-fit, minmax(100px, 1fr)), so the number of columns adapts to the screen width without extra media queries. Text sizes use clamp() to scale smoothly between a minimum and maximum size.

I tested the layout in Chrome DevTools device mode on Surface Pro and Pixel 9 sizes.

Author

Tunmise Front-end developer in training

GitHub: @tu2129

If you find this useful, feel free to star the repo.