import React from 'react';
import './LabPage.css';

function LabPage() {
    return (   
        <div className="lab-page">
            <div className="lab-navbar">
                <a href="/booking" className="nav-item">Booking</a>
                <a href="/result-patient" className="nav-item">Result Patient</a>
                <a href="/result-test" className="nav-item">Result Test</a>
                <a href="/receipt" className="nav-item">Receipt</a>
                <a href="/history" className="nav-item">History</a>
                <a href="/reports-chart" className="nav-item">Reports Chart</a>
                <a href="/report-partly" className="nav-item">Report Partly</a>
                <a href="/test-master" className="nav-item">Test Master</a>
                <a href="/workload" className="nav-item">Workload</a>
                <a href="/email" className="nav-item">Email</a>
                <a href="/patient-bill" className="nav-item">Patient Bill</a>
                <a href="/exit" className="nav-item">Exit</a>
            </div>
            <div className="lab-content">
                <img src="/image/main.jpg" alt="Lab equipment" className="lab-image"/>
                <div className="lab-logo">
                    <h1>BloPath</h1>
                    <p>For Easy & Fast Reporting System</p>
                </div>
                <div className="saral-qualitative">
                    <h2>BloPath</h2>
                    <p>A Qualitative Direction</p>
                </div>
            </div>
        </div>
    );
}

export default LabPage;
