# Portfolio Project
- Link [Portfolio](https://inquisitive-croissant-516f39.netlify.app)

This is a portfolio project that showcases your work (as a web developer for example). It uses various technologies to implement different features, including:

- Google Oauth2 for user authentication
- Sanity Studio for content management
- React.js with Vite for building the user interface
- Custom CSS for styling

## Table of Contents

- [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Configuration](#configuration)
  * [Running the App](#running-the-app)
  * [Building the App](#building-the-app)
- [Features](#features)
  * [User Authentication](#user-authentication)
  * [Content Management](#content-management)
  * [User Interface](#user-interface)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

To get started with this project, you will need to have the following installed on your machine:

- Node.js
- npm or yarn package manager

### Installation

To install the project dependencies, run the following command in your terminal:
npm install

### Configuration

You will need to set up a Google Oauth2 client ID to enable user authentication. To do this, follow these steps:

1. Go to the [Google Developers Console](https://console.developers.google.com/).
2. Create a new project or select an existing one.
3. Go to the "Credentials" tab.
4. Click "Create credentials" and select "OAuth client ID".
5. Select "Web application" as the application type.
6. Enter a name for your client ID.
7. Add "http://localhost:3000" as an authorized JavaScript origin.
8. Add "http://localhost:3000" as an authorized redirect URI.
9. Click "Create".
10. Copy the client ID and paste it into the `.example.env` file in the root of the project, like this:

REACT_APP_GOOGLE_CLIENT_ID=your-client-id-here

### Running the App

To run the app in development mode, run the following command in your terminal:
npm run build


This will create a production-ready build of the app in the `dist` directory.

## Features

This portfolio project has the following features:

### User Authentication

This project uses Google Oauth2 for user authentication. Users can log in using their Google account.

### Content Management

This project uses Sanity Studio for content management. The studio can be accessed by navigating to `http://localhost:3333`.

### User Interface

This project is built with React.js using Vite as the build tool. The user interface is styled with custom CSS.

## Contributing

This project is open to contributions. If you would like to contribute, please create a pull request with your changes.

## License

This project is licensed under the MIT license. See the `LICENSE` file for more information.

## Acknowledgments

- Thanks to Google, Sanity, React.js, and Vite for providing the technologies used in this project.



