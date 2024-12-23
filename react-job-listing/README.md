# React Job Listing App

This project is a React-based Job Listing app that allows users to view, create, update, and delete job listings. The app interacts with a local JSON server to manage the job data, providing a simple and effective full-stack solution for listing jobs.

## Features
* Create Job: Add new job listings.
* Read Job: View a list of available jobs.
* Update Job: Edit job listings.
* Delete Job: Remove job listings.

## Installation and Setup
To get started with this project, follow the steps below:
1. Clone the Repository
    Clone this repository to your local machine using the following command:
    ```
    git clone https://github.com/Alotab/react-job-listing.git
    ``
2. Install Dependencies
    Navigate to the project folder and install the required dependencies:
    ```
    cd job-listing-app
    npm install
    ```
    This will install all necessary dependencies, including json-server for simulating the backend.
3. Configure the Backend Server
    The project uses `json-server` as the backend to simulate a REST API for job listings. The server reads job data from a local `jobs.json` file.
    Open a new terminal and run the server:
    ```
    npm run server
    ```
    The app will be accessible at `http://localhost:8000/jobs`.

4. Run the Development Server
    Once the backend is running, start the development server for the React app:
    ```
    npm run dev
    ```
    The app will be accessible at `http://localhost:5173`.

5.  Proxy Setup
    The app uses Vite's proxy feature to simplify API requests. The proxy configuration is defined in `vite.config.js`, which ensures that all API calls made to `/api` will be forwarded to the backend server running on `http://localhost:8000`.

    This setup eliminates the need to hardcode the backend URL throughout the project.

    #### Proxy Setup in vite.config.js
    In the `vite.config.js`, the proxy configuration allows for seamless communication with the backend server:
    ```
        export default defineConfig({
            plugins: [react()],
            server: {
                port: 5173,
                proxy: {
                '/api': {
                    target: 'http://localhost:8000',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/\api/, ''),
                },
                },
            },
        });
    ```
    With this configuration, any request to /api is forwarded to http://localhost:8000, simplifying API calls and eliminating the need for repetitive URLs.