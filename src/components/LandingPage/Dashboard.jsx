// Dashboard.jsx
import React from 'react';
import { Bar, Pie, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './Dashboard.css'; // Import CSS file

const Dashboard = () => {
  // Sample data for the charts
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Profits',
        backgroundColor: 'rgba(75,192,192,0.8)',
        borderWidth: 2,
        data: [10000, 12000, 15000, 18000, 20000, 22000, 25000],
      },
      {
        label: 'Revenue',
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderWidth: 2,
        data: [20000, 22000, 25000, 28000, 30000, 32000, 35000],
      },
      {
        label: 'Loss',
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderWidth: 2,
        data: [5000, 6000, 7000, 8000, 9000, 10000, 11000],
      },
    ],
  };

  const pieChartData = {
    labels: ['Electronics', 'Clothing', 'Books', 'Furniture'],
    datasets: [
      {
        label: 'Sales by Category',
        data: [30, 25, 20, 25],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Trend',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.8)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Pending', 'Shipped', 'Delivered'],
    datasets: [
      {
        label: 'Order Status',
        data: [20, 40, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(75, 192, 192, 0.8)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <div className="chart-row">
        <div className="chart-container">
          <h2>Financial Overview</h2>
          <div className="chart">
            <Bar
              data={barChartData}
              options={{
                scales: {
                  x: { stacked: true },
                  y: { stacked: true },
                },
              }}
            />
          </div>
          <div className="chart-info">
            <br /><br />
            <p>Financial Overview for the past 7 months</p><br/>
            <p>Profits, Revenue, and Loss data are represented in the chart.</p><br/>
            <p>"I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful." — Warren Buffett</p>
            <br />
            <p>Play by the rules, but be ferocious!</p>
            <br />
            <p>Unlocking Your Financial Potential. Smart Solutions for Brighter Finances</p>
            <br />
            <p>Finance with a Twist of Innovation.</p>
          </div>
        </div>
        <div className="chart-container">
          <h2>Sales by Category</h2>
          <div className="chartpie">
            <Pie data={pieChartData} options={pieChartOptions} />
          </div>
          <div className="chart-info piechart">
            <p>Sales distribution across different product categories</p>
            <br/>
            <p>Electronics, Clothing, Books, and Furniture are the categories.</p>
            <br />
            <p>Manage the Sales !</p>
          </div>
        </div>
      </div>
      <div className="chart-row">
        <div className="chart-container">
          <h2>Sales Trend</h2>
          <div className="chart">
            <Line data={lineChartData} />
          </div>
          <div className="chart-info">
            <br /><br />
            <p>Sales trend over the past 7 months</p>
            <br />
            <p>Visual representation of sales performance over time.</p>
            <br />
            <p>This line chart shows the trend of sales over the past seven months.</p>
            <br />
            <p>"​​Great salespeople are relationship builders who provide value and help their customers win." - Jeffrey Gitomer.</p>
          </div>
        </div>
        <div className="chart-container">
          <h2>Order Status</h2>
          <div className="chart">
            <Doughnut data={doughnutChartData} />
          </div>
          <div className="chart-info">
            <p>Order status distribution</p>
            <br />
            <p>Pending, Shipped, and Delivered orders are represented.</p>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h2>We Made By You!</h2>
        <blockquote className="quote">
        "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill
        </blockquote>
        <blockquote>
        "If you really look closely, most overnight successes took a long time." – Steve Jobs
        </blockquote>
        <blockquote>
        "There's no shortage of remarkable ideas, what's missing is the will to execute them." – Seth Godin
        </blockquote>
        <blockquote>
        "To be successful, you have to have your heart in your business, and your business in your heart." – Thomas Watson, Sr.
        </blockquote>
      </div>
      <div className="bottom-nav">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Analytics</button>
        <button className="nav-btn">Settings</button>
        <button className="nav-btn">More</button>
      </div>
    </div>
  );
};

export default Dashboard;
