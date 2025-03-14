**Pramuditha Nadun - CV**

Welcome to my personal CV website! This project showcases my skills, experience, education, and projects as a Software Engineering student and Associate Software Engineer. The CV is built using React and TypeScript, and it is deployed on GitHub Pages.

**Getting Started** ->

Before you begin, ensure you have the following installed:
Node.js (v16 or higher recommended)
npm (usually comes with Node.js)
Git

**Installation** ->

Clone the repository: git clone https://github.com/PramudithaN/portfolio.git
Navigate to the project directory: cd portfolio
Install dependencies: npm install

**Development** -> 

Start the Local Development Server
To start the development server and view the app in your browser: npm start

The app will be available at http://localhost:3000.

The development server supports hot reloading, so changes will automatically reflect in the browser.

**Build the Project**->

To create an optimized production build: npm run build

The build files will be generated in the build folder.
This folder contains the static files (HTML, CSS, JS) ready for deployment.

**Deployment**->

Deploy to GitHub Pages
To deploy the app to GitHub Pages:
Ensure the homepage field in package.json is set to your GitHub Pages URL: "homepage": "https://pramudithan.github.io/portfolio"
Run the deployment command: npm run deploy
This will build the project and push the build folder contents to the gh-pages branch.

**Enable GitHub Pages:**->

Go to your repository's Settings > Pages.
Select the gh-pages branch as the source.
Your app will be live at: https://pramudithan.github.io/portfolio

**Folder Structure**->

Here’s an overview of the project structure:

portfolio/
├── public/                  # Static assets (e.g., index.html, favicon)
├── src/                     # Source code
│   ├── components/          # Reusable components
│   ├── App.tsx              # Main application component
│   ├── index.tsx            # Entry point
│   └── styles/              # CSS or SCSS files
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── README.md                # Project documentation
└── build/                   # Production build (generated after `npm run build`)

**Technologies Used**->

React - Frontend library
TypeScript - Static typing
GitHub Pages - Deployment
npm - Package management
Lucide Icons - Icon library

**Features**->

Personal Information: Displays my name, title, and a brief introduction.
Contact Details: Includes phone, email, GitHub, LinkedIn, and address.
Education: Lists my academic qualifications.
Experience: Highlights my professional experience and key responsibilities.
Technical Skills: Showcases my expertise in various technologies.
Downloadable CV: Allows users to download my CV in PDF format.
Responsive Design: Ensures the portfolio looks great on all devices.

**Contributing**->

Contributions are welcome! Follow these steps:
Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name
Commit your changes: git commit -m "Add your feature"
Push to the branch: git push origin feature/your-feature-name
Open a pull request.

**License**->

This project is licensed under the MIT License. See the LICENSE file for details.

**Live Demo**->

Check out the live version of my portfolio:
👉 https://pramudithan.github.io/portfolio
