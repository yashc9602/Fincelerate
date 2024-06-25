import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ChildMarriageGoal = () => {
  const [currentAge, setCurrentAge] = useState(5);
  const [investmentAmount, setInvestmentAmount] = useState(1000000);
  const [withdrawalAge, setWithdrawalAge] = useState(25);
  const [expectedGrowthRate, setExpectedGrowthRate] = useState(10);
  const [investmentType, setInvestmentType] = useState('monthly');

  const [futureValue, setFutureValue] = useState(0);
  const [sipAmount, setSipAmount] = useState(0);
  const [lumpsumAmount, setLumpsumAmount] = useState(0);
  const [numberOfMonths, setNumberOfMonths] = useState(0);
  const [numberOfYears, setNumberOfYears] = useState(0);
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Invested Amount',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Gains',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const calculateInvestment = () => {
      const yearsToInvest = withdrawalAge - currentAge;
      const monthsToInvest = yearsToInvest * 12;
      const monthlyRate = expectedGrowthRate / 100 / 12;
      const annualRate = expectedGrowthRate / 100;

      const futureValueCalculated = investmentAmount * Math.pow(1 + annualRate, yearsToInvest);
      setFutureValue(futureValueCalculated);
      setNumberOfMonths(monthsToInvest);
      setNumberOfYears(yearsToInvest);

      const sip = futureValueCalculated * monthlyRate / (Math.pow(1 + monthlyRate, monthsToInvest) - 1);
      setSipAmount(sip);

      const lumpsum = futureValueCalculated / Math.pow(1 + annualRate, yearsToInvest);
      setLumpsumAmount(lumpsum);

      const graphPoints = Array.from({ length: yearsToInvest + 1 }, (_, i) => {
        const currentYear = i + 1;
        const sipInvestment = sip * 12 * currentYear;
        const lumpsumInvestment = lumpsum * Math.pow(1 + annualRate, currentYear);
        const totalInvested = sipInvestment;
        const gains = sipInvestment * Math.pow(1 + monthlyRate, currentYear * 12) - sipInvestment;

        return {
          year: currentYear,
          totalInvested,
          gains,
        };
      });

      setGraphData({
        labels: graphPoints.map(point => `Year ${point.year}`),
        datasets: [
          {
            label: 'Invested Amount',
            data: graphPoints.map(point => (investmentType === 'monthly' ? point.totalInvested : lumpsum)),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            stack: 'combined',
          },
          {
            label: 'Gains',
            data: graphPoints.map(point => (investmentType === 'monthly' ? point.gains : point.gains)),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            stack: 'combined',
          },
        ],
      });
    };

    calculateInvestment();
  }, [currentAge, investmentAmount, withdrawalAge, expectedGrowthRate, investmentType]);

  return (
    <div className="container mx-auto p-5 max-w-4xl">
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-5">Plan Your Child's Marriage</h2>
        <div className="flex justify-center mb-5">
          <button
            className={`px-4 py-2 rounded-l-lg ${investmentType === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setInvestmentType('monthly')}
          >
            Invest Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${investmentType === 'onetime' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setInvestmentType('onetime')}
          >
            Invest One-time
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center mb-5">
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Current Age of Child</label>
            <input
              type="number"
              min="0"
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Investment Amount (₹)</label>
            <input
              type="number"
              min="0"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Withdrawal Age of Child</label>
            <input
              type="number"
              min="0"
              value={withdrawalAge}
              onChange={(e) => setWithdrawalAge(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/4 p-2">
            <label className="block text-gray-700 mb-2">Expected Growth Rate (%)</label>
            <input
              type="number"
              min="0"
              value={expectedGrowthRate}
              onChange={(e) => setExpectedGrowthRate(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="w-full md:w-1/2 p-2 h-96">
            <Bar
              data={graphData}
              options={{
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Years',
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Value (₹)',
                    },
                    beginAtZero: true,
                    stacked: true,
                  },
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        const label = context.dataset.label || '';
                        const value = context.raw || 0;
                        return `${label}: ₹${value.toFixed(2)}`;
                      },
                    },
                  },
                },
              }}
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold">{investmentType === 'monthly' ? 'Invest Monthly' : 'Invest One-time'}</h3>
              <p className="text-xl mt-4">Expected Value at Age {withdrawalAge}</p>
              <p className="text-2xl font-bold">{`₹ ${futureValue.toFixed(2)}`}</p>
              <p className="text-xl mt-4">Number of Years to Invest:</p>
              <p className="text-2xl font-bold">{numberOfYears} years {numberOfMonths % 12} months</p>
              {investmentType === 'monthly' ? (
                <>
                  <p className="text-xl mt-4">SIP Amount Per Month:</p>
                  <p className="text-2xl font-bold">{`₹ ${sipAmount.toFixed(2)}`}</p>
                  <p className="text-xl mt-4">Expected Gains:</p>
                  <p className="text-2xl font-bold">{`₹ ${(futureValue - sipAmount * numberOfMonths).toFixed(2)}`}</p>
                </>
              ) : (
                <>
                  <p className="text-xl mt-4">Lumpsum Amount to be Invested:</p>
                  <p className="text-2xl font-bold">{`₹ ${lumpsumAmount.toFixed(2)}`}</p>
                  <p className="text-xl mt-4">Expected Gains:</p>
                  <p className="text-2xl font-bold">{`₹ ${(futureValue - lumpsumAmount).toFixed(2)}`}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildMarriageGoal;
