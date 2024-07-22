# Food Explorer

Digital menu application for a fictional restaurant, designed to showcase a React-based front end integrated with a Node.js backend.

## About

Food Explorer is a digital menu app developed as a showcase project. It employs React for frontend interactions and Node.js for backend processes. Key features include user authentication, search functionality, responsive design, and full CRUD operations for dishes and ingredients.

## Features

- Clean and organized folder structure for better maintainability.
- User authentication system.
- Search functionality for dishes based on name or ingredients.
- Ability to upload images for dishes and ingredients.
- Responsive design following Mobile First principles.
- Accessible and semantic HTML for enhanced SEO and usability.
- Animations and transitions for a better user experience.

## How to Run

### Prerequisites

Ensure the following tools are installed on your machine:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) with npm
- [Vite](https://vitejs.dev/guide/), which serves and builds the application.

A code editor like [VSCode](https://code.visualstudio.com/) is recommended for editing the project files.

### Backend Setup

```bash
git clone https://github.com/giovannivicentin/explorer-back-tcc
cd explorer-back-tcc
npm install
npm run migrate
npm run seed
npm run dev
# The server starts at http://localhost:3333
```

### Frontend Setup

```bash
git clone https://github.com/giovannivicentin/explorer-front-tcc
cd explorer-front-tcc
npm install
npm run dev
# The application will be available at http://127.0.0.1:5173/
```

## Tech Stack

- **Frontend**: React, styled-components, react-icons
- **Backend**: Node.js
- **Database**: Assume a SQL database is used for storage (specifics depend on backend setup)

## Layout

Access the project layout [here on Figma](https://www.figma.com/community/file/1196874589259687769).


## Author

[Giovanni Vicentin](https://github.com/giovannivicentin)

## License

This project is licensed under the [MIT License](https://github.com/giovannivicentin/explorer-front-tcc/blob/main/LICENSE).