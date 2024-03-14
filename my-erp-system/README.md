
## MY-ERP-SYSTEM
Project Overview:

The goal of this project is to create a simplified interface for an ERP (Enterprise Resource Planning) system, designed to manage basic business operations efficiently. The system will consist of the following pages:

## ERP System
## Overview
This is an ERP (Enterprise Resource Planning) system built with React and Vite. It includes features such as a dashboard, calendar view for managing orders, navbar for navigation, orders management, and products management.

## Features
- Navbar: Provides navigation to different sections of the application.
- Dashboard: Provides an overview of key metrics and data.
- Products Management: Present a list of products with details such as name, category, price, and stock quantity, using mock data.
Enable functionalities to add, edit, and delete products.
- Orders Management: Allows users to manage orders, view details, and track their status.
- Calendar View: Allows users to view orders on their expected delivery dates and click on a date to view all orders due for delivery that day.

## Deployment
To deploy this project run
   ```bash
    npm create vite@latest
```
Give the project name and choose React as the framework.

## Run Locally
Go to the project directory

```bash
  cd my-erp-system
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
React Router DOM provides components like BrowserRouter, Routes, Route,Switch and Link to define routes in your application. You can specify different URLs (paths) and associate them with specific components.
```bash
  npm install react-router-dom
```
## http://localhost:5173/
Working flow of the project
![1000149581-01](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/592c4ac0-d436-4863-9de9-1ec67a356e7c)
![1000149580-01](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/1572b8fd-7cd1-41bd-9645-c48e85c29dc2)


## Dependencies 
The following dependencies are used in this project:

- React: A JavaScript library for building user interfaces.
- React Big Calendar: A flexible and customizable calendar component for React.
- Moment.js: A JavaScript date library for parsing, validating, manipulating, and formatting dates.
- React DOM: The entry point to the React library for the web.
- Charts.js: A JavaScript charting library for creating interactive and responsive charts.

```bash
   npm install react react-dom react-big-calendar moment react-chartjs-2
```
## Landing Page : Provides navigation to different sections of the application.

The navigation bar serves as a central hub for accessing key sections of the ERP system:

Dashboard: Provides an overview of financial metrics, sales data, and order status.

Products Management: Allows administrators to add, edit, and manage product information.

Orders Management: Facilitates the management of customer orders, including processing, tracking, and fulfillment.

Orders Calendar View: Displays orders on their expected delivery dates and allows users to view all orders due for delivery on a selected date.

## Dashboard : Provides an overview of key metrics and data.
To set up the dashboard component and create charts, we need to install the react-chartjs-2 library. Follow the steps below:
Steps:
1 . Install react-chartjs-2:
```bash
  npm install react-chartjs-2
```
This will install the necessary dependencies for creating various types of charts, including bar charts, pie charts, and line graphs.
## Financial Overview :
The Financial Overview section of the dashboard provides a comprehensive summary of the financial performance of the business. It includes key metrics related to revenue, expenses, profitability, and other financial indicators.

## Sales by Category :
The Sales by Category section provides a breakdown of sales performance across different product categories or product lines. It helps users understand which product categories contribute the most to overall sales and identify areas for growth or optimization.

## Sales Trend :
The Sales Trend section presents a visual representation of sales performance over time. It helps users track sales trends, identify seasonal patterns, and forecast future sales based on historical data.

## Order Status :
The Order Status section provides an overview of the current status of orders within the system. It helps users monitor order fulfillment, track order progress, and identify any issues or delays in the order processing workflow.
## Screenshots for Dashboard
![Screenshot (542)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/69aeb7ec-c07e-495f-8e5b-f160d0a5949f)
![Screenshot (543)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/2f47ad22-799e-4c3d-be09-ef659caf39fd)
![Screenshot (544)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/4619ada7-2945-4930-bdb0-52a58f44897b)

## ProductsManagement : Present a list of products with details such as name, category, price, and stock quantity,
Steps:
- Display product details: name, category, price, and stock quantity using mock data.
- Enable adding, editing, and deleting products.
- Ensure user-friendly interfaces for managing products.
- Implement responsive design for various devices.
- Apply appropriate styling for visual appeal.
## Screenshots for Products
![Screenshot (545)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/8245fc72-aff1-4a6c-9c6b-93861d86cf7f)
![Screenshot (546)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/c5aeb14e-f834-4b12-9f82-d190c033fbde)
![Screenshot (547)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/9ff1981b-cedf-47b6-b872-afe0b67a2672)

## OrdersManagement : Allows users to manage orders, view details, and track their status.
Steps:
- Display a list of orders with essential details: order ID, customer name, order date, and status, utilizing mock data.
- Provide functionality to view individual order details, including items purchased and total cost.
- Implement options to update the order status, such as marking orders as shipped or delivered.
- Enable users to delete orders if necessary, with confirmation prompts to prevent accidental deletion.
- Ensure a user-friendly interface for managing orders, including clear navigation and intuitive controls.
## Screenshots for OrdersManagement
![Screenshot (548)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/29b33ad0-6ad4-424d-84b1-52244add7b5b)

## OrdersCalendarsView : Allows users to view orders on their expected delivery dates and click on a date to view all orders due for delivery that day.
Steps:
To implement the Orders Calendar View, follow these steps:
```bash
  npm install react-big-calendar
```
- Implemented a calendar interface to visualize orders based on their expected delivery dates.
- Developed a custom calendar view that dynamically displays orders with their respective delivery dates.
- Enabled users to click on specific dates to view all orders scheduled for delivery on that day.
- Utilized React and the react-big-calendar library to create the interactive calendar component.
- Integrated moment.js for efficient date manipulation and formatting within the calendar.

## Screenshots for OrdersViewCalendars
![Screenshot (549)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/f994e6da-d071-480c-9c9f-fae1fbcb4181)
![Screenshot (550)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/51dd5fe8-6a25-4b74-992d-7e87931335f5)


## Summary: ERP System
Overview
This project is an ERP (Enterprise Resource Planning) system developed using React.js. It provides various features for managing orders, products, and a dashboard for monitoring key metrics.

## Features
- Dashboard: Provides an overview of key metrics such as financial overview, sales by category, sales trend, and order status.

- Navbar: Navigation bar for easy access to different sections of the application.

- Products Management: Allows users to view, add, edit, and delete products. Displays details such as name, category, price, and stock quantity.

- Orders Management: Enables users to view, update, and delete orders. Shows order details including order ID, customer name, order date, and status.

- Orders Calendar View: Presents a calendar interface displaying orders based on their expected delivery dates. Allows users to click on a date to view orders due for delivery that day.

## Technologies Used
- React.js: Front-end library for building user interfaces.
- React Router DOM: Library for handling routing in React applications.
- React Big Calendar: Library for displaying and managing calendar views.
- Chart.js: Library for creating interactive charts and graphs.
- Moment.js: Library for parsing, validating, manipulating, and formatting dates.

## Conclusion 
This ERP system offers a comprehensive solution for managing orders and products, along with insightful dashboard metrics and a user-friendly interface. It can be further extended and customized to meet specific business requirements.

## 🚀 About Me
As an aspiring software engineer, I am eager to secure an entry-level position where Ican leverage my academic background in Electronics and Communication Engineering(ECE). My enthusiasm for programming languages and passion for problem-solving hasled me to transition into Information Technology !!


## Contact Me!

 ![3621435](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/582c20ce-364c-4f05-a768-e24f67aec1f4)   
 
 - https://www.instagram.com/stephen._ambrose?igsh=aXZmdTRrMmd6aHRp


    ![img icons8](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/9035cd79-0dfe-48ee-abb8-e49f4def4c56)           



- https://x.com/dir_stephen?t=_wMT6Es_3ef4zlO3G_7pEQ&s=08



![4423676](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/84b55a4f-eeba-4577-92fc-c83fe19df40b)


 - https://www.linkedin.com/in/stephen-a-155497234/