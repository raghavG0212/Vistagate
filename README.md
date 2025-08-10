# Vistagate

> A full-stack web application for listing and managing properties. Built with React, Firebase, and Tailwind CSS.

[![Version](https://img.shields.io/npm/v/client?style=for-the-badge)](https://www.npmjs.com/package/client)


## 📚 Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [File Structure](#file-structure)
- [Features](#features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Usage](#usage)
  - [Execution Options](#execution-options)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)


## Description

Vistagate is a full-stack web application built using React for the frontend and Firebase for the backend.  It allows users to create, edit, and view property listings.  Key features include user authentication, property listing management, and a user-friendly interface. The application utilizes React components like `ListingItem`, `CreateListing`, and `EditListing` to manage property data.  The `firebase.jsx` file handles interaction with the Firebase backend.

## Tech Stack

[![React](https://img.shields.io/badge/React-20B2CA?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://en.wikipedia.org/wiki/HTML5)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
[![✨ Made with ReadME Wiz](https://img.shields.io/badge/✨%20Made%20with-ReadME%20Wiz-blueviolet?style=for-the-badge&logo=markdown&logoColor=white)](https://github.com/PIYUSH1SAINI/ReadMe-wiz.git)


## Architecture Overview

```mermaid
graph TD
    A[User] --> B(Frontend);
    B --> C(React Components);
    C --> D(Firebase API);
    D --> E(Firebase Database);
    
```

## File Structure

```mermaid
graph TD
    A[index.html] --> B(src);
    B --> C(App.jsx);
    B --> D(components);
    B --> E(pages);
    B --> F(hooks);
    B --> G(firebase.jsx);
    B --> H(index.css);
    D --> I(ListingItem.jsx);
    E --> J(Home.jsx);
    
```

## Features

*   User authentication via OAuth.
*   Creation and editing of property listings.
*   Detailed property listing pages.
*   User profile management.
*   Search and filtering of listings by category.
*   Responsive design for various screen sizes.


## Installation

### Prerequisites

> [!NOTE]
> Node.js >=14 and npm are required.


### Setup

1.  **Clone Repository**: Clone the repository from GitHub and set up the project locally.
    ```bash
    git clone https://github.com/raghavG0212/Vistagate.git
    cd Vistagate
    npm install
    ```

> [!TIP]
> Use the `git clone` method for the quickest setup.


## Usage

### Execution Options

#### Frontend Execution

To start the development server, run:

```bash
npm run dev
```

This will open the application in your browser and begin watching for changes.

> [!IMPORTANT]
> Ensure you have a Firebase project set up and configured correctly before running the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contributors

<a href="https://github.com/raghavG0212" target="_blank"><img src="https://avatars.githubusercontent.com/raghavG0212?s=60&v=4" width="60" height="60" alt="@raghavG0212" title="@raghavG0212" style="border-radius: 50%; margin-right: 10px;" onerror="this.src='https://github.com/identicons/raghavG0212.png'" /></a>

## License

MIT License


<a href="https://github.com/PIYUSH1SAINI/ReadMe-wiz.git" target="_blank">
      <img src="https://res.cloudinary.com/dy1znaiby/image/upload/v1754320207/ReadMe-wiz-logo_k3uq6w.png" alt="ReadMe Wiz Logo" width="300"/>
    </a>
