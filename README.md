## MY-ERP-SYSTEM
Project Overview:

The goal of this project is to create a simplified interface for an ERP (Enterprise Resource Planning) system, designed to manage basic business operations efficiently. The system will consist of the following pages:

## ERP System
## Overview (No Backend part is Added)
This is an ERP (Enterprise Resource Planning) system built with React and Vite. It includes features such as a dashboard, calendar view for managing orders, navbar for navigation, orders management, and products management.

## Schema of the project

![1000149581-01 (1)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/e546727a-7d29-4f11-8b1d-2a8eeb2130c4)
![1000149580-01 (1)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/1dc574ec-6bce-4860-b898-f12a48b8514f)

## Features

- Dashboard: Provides an overview of key metrics such as financial overview, sales by category, sales trend, and order status.

- Navbar: Navigation bar for easy access to different sections of the application.

- Products Management: Allows users to view, add, edit, and delete products. Displays details such as name, category, price, and stock quantity.

- Orders Management: Enables users to view, update, and delete orders. Shows order details including order ID, customer name, order date, and status.

- Orders Calendar View: Presents a calendar interface displaying orders based on their expected delivery dates. Allows users to click on a date to view orders due for delivery that day.

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
## http://localhost:5173/ - Server Running

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

![Screenshot (570)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/6c7c1c60-676a-4120-949b-ddf5c8ea6cc1)
![Screenshot (571)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/e92a1ad6-3e20-467d-9ae3-e67e532fb1fe)
![Screenshot (573)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/36e87630-de75-4b5c-ade4-d1a2f8afe6c8)

## ProductsManagement : Present a list of products with details such as name, category, price, and stock quantity,
Steps:
- Display product details: name, category, price, and stock quantity using mock data.
- Enable adding, editing, and deleting products.
- Ensure user-friendly interfaces for managing products.
- Implement responsive design for various devices.
- Apply appropriate styling for visual appeal.
## Screenshots for Products

![Screenshot (574)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/50f9dc68-4305-428f-be8d-b696cc28e54d)
![Screenshot (575)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/fbdc7e2f-bb64-4d27-bc75-690bca867325)
![Screenshot (576)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/74683c10-9d57-49c9-ad2b-8fcb621bf3f3)

## OrdersManagement : Allows users to manage orders, view details, and track their status.
Steps:
- Display a list of orders with essential details: order ID, customer name, order date, and status, utilizing mock data.
- Provide functionality to view individual order details, including items purchased and total cost.
- Implement options to update the order status, such as marking orders as shipped or delivered.
- Enable users to delete orders if necessary, with confirmation prompts to prevent accidental deletion.
- Ensure a user-friendly interface for managing orders, including clear navigation and intuitive controls.
  
## Screenshots for OrdersManagement

![Screenshot (578)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/7540e70f-4ecd-4955-b604-fafd1adbb106)
![Screenshot (577)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/1c46cf63-cee4-43d4-b7a1-8312bb5c641d)

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

## Screenshots for OrdersCalendarsView

![Screenshot (579)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/b11f348f-1985-4eb4-8765-8ed3029da670)
![Screenshot (580)](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/3b02a8d3-6d1e-4981-88a0-d757b8dd44c4)


## Summary: ERP System

The ERP (Enterprise Resource Planning) site created above is a comprehensive management platform designed to streamline various aspects of business operations. Here's a summary of its key components and features:

## 1. Dashboard:
The dashboard provides an overview of financial performance, sales trends, and order statuses through visually appealing charts and graphs. Users can quickly assess key metrics such as profits, revenue, sales distribution by category, and order statuses.

## 2. Navigation Bar: 
The navigation bar offers easy access to different sections of the ERP system, including the dashboard, product management, order management, and calendar view. Each section is represented by an icon and labeled for clarity.

## 3. Product Management: 
The product management section allows users to efficiently manage their product inventory, including adding, editing, and deleting products. It provides a user-friendly interface for maintaining accurate and up-to-date product information.

## 4. Order Management: 
The order management feature enables users to track and manage orders throughout the order lifecycle. It displays a list of orders with relevant details such as customer name, order date, and status. Users can view order details, update order statuses, and delete orders as needed.

## 5. Calendar View: 
The calendar view offers a visual representation of order schedules and timelines. Users can view orders scheduled on specific dates and easily plan and manage their order fulfillment process.

## 6. Responsive Design: 
The site is designed with responsive layouts and styles, ensuring optimal viewing and usability across various devices and screen sizes. Whether accessed on desktop or mobile devices, users can navigate the ERP system seamlessly.

## 7. Animations and Styling:
The site incorporates animations and styling enhancements to improve user engagement and visual appeal. Buttons and navigation elements feature colorful designs and hover effects, enhancing the overall user experience.

## 8. Bottom Navigation (Without Backend part): 
A bottom navigation bar provides quick access to essential features like returning to the homepage, accessing analytics, managing orders, and adjusting settings. It remains fixed at the bottom of the screen for easy access.

Overall, the ERP site offers a comprehensive solution for businesses to manage their operations efficiently, track key metrics, and make informed decisions to drive growth and success. With its intuitive interface, robust features, and responsive design, it caters to the diverse needs of modern enterprises.

## Conclusion 
This ERP system offers a comprehensive solution for managing orders and products, along with insightful dashboard metrics and a user-friendly interface. It can be further extended and customized to meet specific business requirements.

## 🚀 About Me
As an aspiring software engineer, I am eager to secure an entry-level position where Ican leverage my academic background in Electronics and Communication Engineering(ECE). My enthusiasm for programming languages and passion for problem-solving hasled me to transition into Information Technology !!


## Contact Me!

![3621435](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/5a8a7a52-1eef-4c05-aded-bb12a6230456)
   
 - https://www.instagram.com/stephen._ambrose?igsh=aXZmdTRrMmd6aHRp

 ![15059885](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/69b35c05-74ff-49a0-b696-a137ed03b596)  

- https://x.com/dir_stephen?t=_wMT6Es_3ef4zlO3G_7pEQ&s=08

 ![4423676](https://github.com/StephenAmbrose/My-Erp-System/assets/111897588/491b934b-2ced-4f75-91a0-fd3819a4583e)

 - https://www.linkedin.com/in/stephen-a-155497234/

