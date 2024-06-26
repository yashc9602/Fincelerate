import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export default function SwpCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(1000000);
  const [withdrawalPerMonth, setWithdrawalPerMonth] = useState(10000);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [years, setYears] = useState(10);
  const [withdrawals, setWithdrawals] = useState(0);
  const [totalWithdrawn, setTotalWithdrawn] = useState(0);
  const [expectedGains, setExpectedGains] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const calculateSWP = () => {
      const monthlyRate = expectedReturns / 100 / 12;
      let remainingInvestment = totalInvestment;
      let totalWithdrawnAmount = 0;
      let growthData = [];
      let monthlyWithdrawals = years * 12;

      for (let i = 1; i <= monthlyWithdrawals; i++) {
        remainingInvestment = remainingInvestment * (1 + monthlyRate) - withdrawalPerMonth;
        if (remainingInvestment < 0) {
          remainingInvestment = 0;
          monthlyWithdrawals = i - 1;
          break;
        }
        totalWithdrawnAmount += withdrawalPerMonth;

        if (i % 12 === 0) {
          growthData.push({
            year: i / 12,
            remainingInvestment: Math.max(remainingInvestment, 0),
            totalWithdrawn: totalWithdrawnAmount,
          });
        }
      }

      let expectedGainsValue = remainingInvestment - totalInvestment + totalWithdrawnAmount;
      setWithdrawals(monthlyWithdrawals);
      setTotalWithdrawn(totalWithdrawnAmount);
      setExpectedGains(expectedGainsValue > 0 ? expectedGainsValue : 0);
      setFinalValue(remainingInvestment > 0 ? remainingInvestment : 0);
      setGraphData(growthData);
    };

    if (
      totalInvestment > 0 &&
      withdrawalPerMonth > 0 &&
      expectedReturns > 0 &&
      years > 0 &&
      withdrawalPerMonth <= totalInvestment
    ) {
      calculateSWP();
    }
  }, [totalInvestment, withdrawalPerMonth, expectedReturns, years]);

  const data = {
    labels: graphData.map(data => `Year ${data.year}`),
    datasets: [
      {
        label: 'Remaining Investment',
        data: graphData.map(data => data.remainingInvestment),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total Withdrawn',
        data: graphData.map(data => data.totalWithdrawn),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
        <h2 className="text-4xl font-bold text-center mb-8">SWP Calculator</h2>
        <div className="flex flex-col md:flex-row justify-around items-center mb-5">
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Total Investment (₹)</label>
            <input
              type="number"
              min="0"
              value={totalInvestment}
              onChange={(e) => setTotalInvestment(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Withdrawal per month (₹)</label>
            <input
              type="number"
              min="0"
              value={withdrawalPerMonth}
              onChange={(e) => setWithdrawalPerMonth(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Expected Returns (%)</label>
            <input
              type="number"
              min="0"
              value={expectedReturns}
              onChange={(e) => setExpectedReturns(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Years to Withdraw</label>
            <input
              type="number"
              min="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
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
              <h3 className="text-lg font-semibold">Number of Withdrawals</h3>
              <p className="text-2xl font-bold">{withdrawals}</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Total Withdrawn Amount</h3>
              <p className="text-2xl font-bold">{`₹ ${totalWithdrawn}`}</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Expected Gains</h3>
              <p className="text-2xl font-bold">{`₹ ${expectedGains.toFixed(2)}`}</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">Expected Final Value</h3>
              <p className="text-2xl font-bold">{`₹ ${finalValue.toFixed(2)}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
