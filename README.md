Flipkart Clone – Angular Project
This project is a frontend e-commerce application built using Angular. It replicates the core flow of Flipkart, including product listing, cart management, search functionality, and a responsive user interface. The project is structured using Angular components, services, and routing to keep everything modular and easy to maintain.
Angular Structure

Component-based architecture for better reusability.

Separate components for header, navbar, product listing, product details, search, cart, and categories.

Organized folder structure to maintain clean code.

Routing and Navigation

Angular Router is used for smooth navigation.

Includes routes such as home, product details page, and cart page.

Navigation works without page reload.

Product Handling

Product list displayed through reusable components.

Product details route with dynamic IDs.

JSON used for mock data, which can be replaced later with an actual backend API.

Add to Cart Functionality

Add, remove, and update items in the cart.

Cart saved in localStorage to preserve data on refresh.

Cart item count shown in the navbar.

Search Feature

Search bar with instant suggestions.

Suggestions display both product name and image.

Filtered search results shown dynamically.

Services

ProductService for loading product data.

CartService for managing cart actions.

Shared services used for communication across components.

Responsive UI

Works on desktop, tablet, and mobile screens.

Uses Bootstrap / NgBootstrap for styling and carousel.

Clean and simple layout similar to real e-commerce websites.
Tech Stack

Angular 9

TypeScript

Bootstrap / NgBootstrap

RxJS

LocalStorage for cart persistence
