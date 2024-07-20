import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export default function STPCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(100000);
  const [monthlyTransfer, setMonthlyTransfer] = useState(5000);
  const [duration, setDuration] = useState(12);
  const [sourceRate, setSourceRate] = useState(8);
  const [targetRate, setTargetRate] = useState(12);
  const [totalTransferred, setTotalTransferred] = useState(0);
  const [sourceFundValue, setSourceFundValue] = useState(0);
  const [targetFundValue, setTargetFundValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const calculateSTP = () => {
      let remainingSource = initialInvestment;
      let accumulatedTarget = 0;
      let totalTransferredAmount = 0;
      let monthlySourceRate = sourceRate / 12 / 100;
      let monthlyTargetRate = targetRate / 12 / 100;
      let growthData = [];
      let sourceData = [];
      let targetData = [];

      for (let i = 1; i <= duration; i++) {
        totalTransferredAmount += monthlyTransfer;
        remainingSource -= monthlyTransfer;
        accumulatedTarget += monthlyTransfer;
        
        remainingSource *= (1 + monthlySourceRate);
        accumulatedTarget *= (1 + monthlyTargetRate);

        sourceData.push(remainingSource);
        targetData.push(accumulatedTarget);
        growthData.push(totalTransferredAmount);
      }

      setTotalTransferred(totalTransferredAmount);
      setSourceFundValue(remainingSource);
      setTargetFundValue(accumulatedTarget);
      setTotalValue(remainingSource + accumulatedTarget);
    };

    calculateSTP();
  }, [initialInvestment, monthlyTransfer, duration, sourceRate, targetRate]);

  const data = {
    labels: Array.from({ length: duration }, (_, i) => `Month ${i + 1}`),
    datasets: [
      {
        label: 'Transferred Amount',
        data: Array.from({ length: duration }, (_, i) => monthlyTransfer * (i + 1)),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Source Fund Value',
        data: Array.from({ length: duration }, (_, i) => initialInvestment * Math.pow((1 + sourceRate / 100), i / 12)),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Target Fund Value',
        data: Array.from({ length: duration }, (_, i) => monthlyTransfer * (i + 1) * Math.pow((1 + targetRate / 100), i / 12)),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="container mx-auto p-5 max-w-4xl">
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8">STP Calculator</h2>
        <div className="flex flex-col md:flex-row justify-around items-center mb-5">
          <div className="w-full md:w-1/3 p-2">
            <label className="block text-gray-700 mb-2">Initial Investment Amount (₹)</label>
            <input
              type="number"
              min="1000"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-full md:w-1/3 p-2">
            <label className="block text-gray-700 mb-2">Monthly Transfer Amount (₹)</label>
            <input
              type="number"
              min="1000"
              value={monthlyTransfer}
              onChange={(e) => setMonthlyTransfer(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-full md:w-1/3 p-2">
            <label className="block text-gray-700 mb-2">Transfer Duration (Months)</label>
            <input
              type="number"
              min="1"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center mb-5">
          <div className="w-full md:w-1/3 p-2">
            <label className="block text-gray-700 mb-2">Source Fund Expected Annual Return (%)</label>
            <input
              type="number"
              min="1"
              max="30"
              value={sourceRate}
              onChange={(e) => setSourceRate(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-full md:w-1/3 p-2">
            <label className="block text-gray-700 mb-2">Target Fund Expected Annual Return (%)</label>
            <input
              type="number"
              min="1"
              max="30"
              value={targetRate}
              onChange={(e) => setTargetRate(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mb-5">
          <div className="w-full md:w-3/4 h-64">
            <Bar data={data} options={options} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="w-full md:w-1/4 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Total Transferred Amount</h3>
              <p className="text-2xl font-bold">{`₹ ${totalTransferred}`}</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Final Value in Source Fund</h3>
              <p className="text-2xl font-bold">{`₹ ${sourceFundValue.toFixed(2)}`}</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Final Value in Target Fund</h3>
              <p className="text-2xl font-bold">{`₹ ${targetFundValue.toFixed(2)}`}</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Total Investment Value</h3>
              <p className="text-2xl font-bold">{`₹ ${totalValue.toFixed(2)}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
