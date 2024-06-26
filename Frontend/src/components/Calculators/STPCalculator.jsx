import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import ButtonGroup from '../3Button';

export default function STPCalculator() {
  const [sourceInvestment, setSourceInvestment] = useState(100000);
  const [sourceReturns, setSourceReturns] = useState(8);
  const [transferAmount, setTransferAmount] = useState(1000);
  const [frequency, setFrequency] = useState(1); // Monthly
  const [targetPeriod, setTargetPeriod] = useState(1); // In years
  const [targetReturns, setTargetReturns] = useState(10);

  const [sourceGains, setSourceGains] = useState(0);
  const [targetGains, setTargetGains] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [totalGains, setTotalGains] = useState(0);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const calculateSTP = () => {
      const sourceMonthlyRate = sourceReturns / 100 / 12;
      const targetMonthlyRate = targetReturns / 100 / 12;
      const totalMonths = targetPeriod * 12;

      let remainingSource = sourceInvestment;
      let accumulatedTarget = 0;
      let growthData = [];
      let monthlyWithdrawals = totalMonths;

      for (let i = 1; i <= monthlyWithdrawals; i++) {
        let actualTransferAmount = Math.min(transferAmount, remainingSource);

        // Calculate gains in source fund
        let sourceGainsThisMonth = remainingSource * sourceMonthlyRate;
        remainingSource += sourceGainsThisMonth - actualTransferAmount;

        // Calculate gains in target fund
        accumulatedTarget += actualTransferAmount;
        let targetGainsThisMonth = accumulatedTarget * targetMonthlyRate;
        accumulatedTarget += targetGainsThisMonth;

        if (i % 12 === 0) {
          growthData.push({
            year: i / 12,
            remainingSource: Math.max(remainingSource, 0),
            accumulatedTarget: accumulatedTarget,
          });
        }

        if (remainingSource <= 0) {
          monthlyWithdrawals = i;
          break;
        }
      }

      setSourceGains(sourceInvestment * (1 + sourceMonthlyRate) ** totalMonths - sourceInvestment);
      setTargetGains(accumulatedTarget - sourceInvestment);
      setFinalValue(remainingSource + accumulatedTarget);
      setTotalGains((remainingSource + accumulatedTarget) - sourceInvestment);
      setGraphData(growthData);
    };

    if (
      sourceInvestment > 0 &&
      sourceReturns > 0 &&
      transferAmount > 0 &&
      frequency > 0 &&
      targetPeriod > 0 &&
      targetReturns > 0 &&
      transferAmount <= sourceInvestment
    ) {
      calculateSTP();
    }
  }, [sourceInvestment, sourceReturns, transferAmount, frequency, targetPeriod, targetReturns]);

  const data = {
    labels: graphData.map(data => `Year ${data.year}`),
    datasets: [
      {
        label: 'Remaining Source Fund',
        data: graphData.map(data => data.remainingSource),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Accumulated Target Fund',
        data: graphData.map(data => data.accumulatedTarget),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
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
        title: {
          display: true,
          text: 'Years',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Amount (₹)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container mx-auto p-5 max-w-4xl">
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8">STP Calculator</h2>
        <div className="flex flex-col md:flex-row justify-around items-center mb-5">
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Investment in Source Fund (₹)</label>
            <input
              type="number"
              min="0"
              value={sourceInvestment}
              onChange={(e) => setSourceInvestment(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Expected Returns from Source Fund (%)</label>
            <input
              type="number"
              min="0"
              value={sourceReturns}
              onChange={(e) => setSourceReturns(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Amount to Transfer to Target Fund (₹)</label>
            <input
              type="number"
              min="0"
              value={transferAmount}
              onChange={(e) => setTransferAmount(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Frequency of Transfer (Months)</label>
            <input
              type="number"
              min="1"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Time Period to Stay Invested in Target Fund (Years)</label>
            <input
              type="number"
              min="1"
              value={targetPeriod}
              onChange={(e) => setTargetPeriod(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Expected Returns from Target Fund (%)</label>
            <input
              type="number"
              min="0"
              value={targetReturns}
              onChange={(e) => setTargetReturns(Number(e.target.value))}
              className="w-full p-2 border rounded"
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
              <h3 className="text-lg font-semibold">Expected Gains from Source Fund</h3>
              <p className="text-2xl font-bold">{`₹ ${sourceGains.toFixed(2)}`}</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Expected Gains from Target Fund</h3>
              <p className="text-2xl font-bold">{`₹ ${targetGains.toFixed(2)}`}</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Expected Final Value of Complete Investment</h3>
              <p className="text-2xl font-bold">{`₹ ${finalValue.toFixed(2)}`}</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Total Gains</h3>
              <p className="text-2xl font-bold">{`₹ ${totalGains.toFixed(2)}`}</p>
            </div>
          </div>
        </div>
      </div>
      <ButtonGroup />
    </div>
  );
}
