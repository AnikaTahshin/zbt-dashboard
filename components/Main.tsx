"use client";
import React from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";

// Line chart
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

// Pie chart
const Pie = dynamic(() => import("react-chartjs-2").then((mod) => mod.Pie), {
  ssr: false,
});

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const datasets = [12, 45, 67, 43, 89, 34, 67, 43];

// Line chart data
const data = {
  labels,
  datasets: [
    {
      label: "Year Dataset",
      data: datasets,
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.4)",
      tension: 0.4,
    },
  ],
};

// Line chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  animations: {
    tension: {
      duration: 1500,
      easing: "easeInOutQuart" as const,
      from: 1,
      to: 0,
      loop: true,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
    },
  },
};

// Pie chart data
const data2 = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const Main = () => {
  return (
    <div className="flex gap-6 w-full justify-around items-center">
      <div style={{ width: "400px", height: "250px" }}>
        <Line data={data} options={options} />
      </div>
      <div style={{ width: "300px", height: "300px" }}>
        <Pie data={data2} />
      </div>
    </div>
  );
};

export default Main;
