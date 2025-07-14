# URL Shortener

This is a Node.js-based URL shortener application that converts long URLs into short, shareable links. It includes features like link generation, redirection, and basic analytics (e.g., click tracking).
The project is designed for easy setup and customization, making it ideal for developers and businesses looking to create branded short links.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- **URL Shortening**: Convert long URLs into short, unique links.
- **Redirection**: Redirect users from short URLs to their original destinations.
- **Analytics**: Track the number of clicks for each short URL.
- **Secure**: Includes basic security features like input validation and HTTPS support.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16.x or higher recommended)
- [npm](https://www.npmjs.com/) (version 8.x or higher)
- A database like MongoDB

## Install dependencies
Run the following command to install all dependencies, including development dependencies listed in package.json
- npm install

## Usage
Start the application
- npm start

## API endpoints
- POST http://localhost:8000/url: Create a short URL.Body: { "url": "https://example.com" }
Response: { "shortId": "abcd1234" }


- GET http://localhost:8000/url/:shortId: Redirect to the original URL.
- GET http://localhost:8000/url/analytics/:shortId: Retrieve click statistics for a short URL




