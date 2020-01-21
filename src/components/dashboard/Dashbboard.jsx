import React from "react";
import Chart from "chart.js";
export default class Dashbboard extends React.Component {
  componentDidMount() {
    const node = this.node;
    new Chart(node, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Number of Vehicle Hires This Year",
            data: [86, 89, 45, 85],
            backgroundColor: [
              "rgba(205, 199, 132, 0.8)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 106, 186, 0.6)"
            ]
          }
        ]
      },
      options: {
        title: {
          display: false
        },
        scales: {
          yAxes: [
            {
              beginAtZero: true
            }
          ]
        }
      }
    });
    const node1 = this.node1;
    new Chart(node1, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Number of Recorded Accidents This Year",
            data: [86, 89, 76, 84],
            backgroundColor: [
              "rgba(205, 199, 132, 0.8)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 106, 186, 0.6)"
            ]
          }
        ]
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    });

    const node2 = this.node2;
    new Chart(node2, {
      type: "doughnut",
      data: {
        labels: [
          "Overspeeding",
          "Careless Driving",
          "Poor Mechanical Condition",
          "Careless Pedestrians"
        ],
        datasets: [
          {
            label: "Common Causes of Accidents",
            data: [86, 89, 76, 80],
            backgroundColor: [
              "rgba(205, 199, 132, 0.8)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 106, 186, 0.6)"
            ]
          }
        ]
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    });
  }
  render() {
    return (
      <div className='add-vehicle'>
        <div className='graphs'>
          <canvas
            style={{ width: 800, height: 300 }}
            ref={node => (this.node = node)}
          />
          <canvas
            style={{ width: 800, height: 300 }}
            ref={node1 => (this.node1 = node1)}
          />

          <canvas
            style={{ width: 800, height: 300 }}
            ref={node2 => (this.node2 = node2)}
          />
        </div>
      </div>
    );
  }
}
