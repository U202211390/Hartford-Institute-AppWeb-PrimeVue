# Hartford Institute for Geriatric Nursing (HIGN) Application

This application is developed using Vue 3 and Vite. It is designed to manage and analyze mental state exams for patients, providing a comprehensive overview of examiner performance.

## Features

- **Examiner Performance Overview**: Provides a detailed view of each examiner's performance, including the number of exams assigned and the average score of the assigned exams.
- **Mental State Exam Analytics**: Offers a comprehensive analysis of mental state exams, including the total number of exams, highest score, lowest score, and average score.
- **Language Switcher**: Allows users to switch the application language between English and Spanish.
- **Page Not Found Handling**: Displays a user-friendly error message when a user navigates to a route that does not exist.

## Author
`Alexander Jair Castillo Castillo`
`U202211390`
## Setup

To get started with the HIGN application, you need to install the necessary dependencies. You can do this by running the following command in your terminal:

```bash
npm install
npm run dev
npm i primevue primeicons primeflex vue-router axios
cd server 
json-server --watch db.json --routes routes.json   

