import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';

const BuildYourCorpus = () => {
  const [corpusTarget, setCorpusTarget] = useState(1000000);
  const [yearsToInvest, setYearsToInvest] = useState(10);
  const [expectedGrowthRate, setExpectedGrowthRate] = useState(10);
  const [investmentType, setInvestmentType] = useState('monthly');

  const calculateInvestment = () => {
    const monthsToInvest = yearsToInvest * 12;
    const monthlyRate = (expectedGrowthRate / 100) / 12;
    const lumpSumRate = (expectedGrowthRate / 100);

    const SIPAmount = (corpusTarget * monthlyRate) / (Math.pow(1 + monthlyRate, monthsToInvest) - 1);
    const lumpSumAmount = corpusTarget / Math.pow(1 + lumpSumRate, yearsToInvest);

    return {
      corpusTarget: corpusTarget.toFixed(2),
      SIPAmount: SIPAmount.toFixed(2),
      monthsToInvest,
      lumpSumAmount: lumpSumAmount.toFixed(2),
      yearsToInvest: yearsToInvest.toFixed(1),
    };
  };

  const results = calculateInvestment();

  const graphPoints = Array.from({ length: yearsToInvest }, (_, i) => {
    const currentYear = i + 1;
    const totalMonths = currentYear * 12;
    const sipInvestment = results.SIPAmount * totalMonths;
    const lumpsumInvestment = results.lumpSumAmount * Math.pow(1 + (expectedGrowthRate / 100), currentYear);
    const totalInvested = results.SIPAmount * totalMonths;
    const totalValue = totalInvested * Math.pow(1 + (expectedGrowthRate / 100) / 12, totalMonths);
    const gains = totalValue - totalInvested;

    return {
      year: currentYear,
      totalInvested,
      gains,
      lumpsumInvestment: lumpsumInvestment - results.lumpSumAmount,
    };
  });

  const chartData = {
    labels: graphPoints.map(point => `Year ${point.year}`),
    datasets: [
      {
        label: 'Invested Amount',
        data: graphPoints.map(point => (investmentType === 'monthly' ? point.totalInvested : results.lumpSumAmount)),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        stack: 'combined',
      },
      {
        label: 'Gains',
        data: graphPoints.map(point => (investmentType === 'monthly' ? point.gains : point.lumpsumInvestment)),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        stack: 'combined',
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Build Your Corpus</h2>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Corpus Target (₹)</label>
            <input
              type="number"
              value={corpusTarget}
              onChange={(e) => setCorpusTarget(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Years to Invest</label>
            <input
              type="number"
              value={yearsToInvest}
              onChange={(e) => setYearsToInvest(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Expected Growth Rate (% p.a.)</label>
            <input
              type="number"
              value={expectedGrowthRate}
              onChange={(e) => setExpectedGrowthRate(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {investmentType === 'monthly' ? (
            <>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold">Corpus Target</h3>
                <p className="text-2xl font-bold">{`₹ ${results.corpusTarget}`}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold">Monthly Amount to be invested</h3>
                <p className="text-2xl font-bold">{`₹ ${results.SIPAmount}`}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold">Number of Months to invest</h3>
                <p className="text-2xl font-bold">{results.monthsToInvest}</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold">Corpus Target</h3>
                <p className="text-2xl font-bold">{`₹ ${results.corpusTarget}`}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold">Lumpsum Amount to be invested</h3>
                <p className="text-2xl font-bold">{`₹ ${results.lumpSumAmount}`}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold">Number of Years to invest</h3>
                <p className="text-2xl font-bold">{results.yearsToInvest}</p>
              </div>
            </>
          )}
        </div>
        <div className="mt-10">
          <Bar
            data={chartData}
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
      </div>
    </div>
  );
};

export default BuildYourCorpus;
