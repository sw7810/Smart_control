// src/Analysis.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "./Analysis.css";

// Chart.js 모듈 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Analysis() {
    // 가상 데이터 (시간별 에어컨과 전등 사용량)
    const data = {
        labels: ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00"],
        datasets: [
            {
                label: "Light Usage (kWh)",
                data: [2, 1, 1.5, 2, 2.5, 3, 1, 0.5, 1, 1.5, 2, 1],
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
            {
                label: "Air Conditioner Usage (kWh)",
                data: [1, 0.5, 0.7, 1, 1.5, 2, 0.5, 0.3, 0.6, 0.8, 1, 0.7],
                backgroundColor: "rgba(255, 99, 132, 0.6)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Energy Usage by Hour",
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Time",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Usage (kWh)",
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="common-container">
            <div className="analysis-container">
                <button className="back-button" onClick={() => window.history.back()}>←</button>
                <h1>Energy Usage Analysis</h1>
                <div className="chart-container">
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
}

export default Analysis;
