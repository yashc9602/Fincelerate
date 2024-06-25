import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { differenceInMonths } from 'date-fns';
import ButtonGroup from '../3Button';

const inflationRate = 6 / 100;

export default function BuyYourDreamCar() {
  const [carValue, setCarValue] = useState(1000000);
  const [purchaseDate, setPurchaseDate] = useState('');
  const [growthRate, setGrowthRate] = useState(12);
  const [investmentType, setInvestmentType] = useState('monthly');

  const [futureCarValue, setFutureCarValue] = useState(0);
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
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Gains',
        data: [],
        
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    if (purchaseDate) {
      const currentDate = new Date();
      const targetDate = new Date(purchaseDate);
      const months = differenceInMonths(targetDate, currentDate);
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      const monthlyRate = growthRate / 100 / 12;
      const annualRate = growthRate / 100;

      const futureValue = carValue * Math.pow(1 + inflationRate, years + remainingMonths / 12);
      setFutureCarValue(futureValue);
      setNumberOfMonths(remainingMonths);
      setNumberOfYears(years);

      const sip = futureValue * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1);
      setSipAmount(sip);

      const lumpsum = futureValue / Math.pow(1 + annualRate, years + remainingMonths / 12);
      setLumpsumAmount(lumpsum);

      const graphPoints = Array.from({ length: years + 1 }, (_, i) => {
        const currentYear = i + 1;
        const totalMonths = currentYear * 12;
        const sipInvestment = sip * totalMonths;
        const lumpsumInvestment = lumpsum * Math.pow(1 + annualRate, currentYear);
        const totalInvested = sip * totalMonths;
        const totalValue = totalInvested * Math.pow(1 + monthlyRate, totalMonths);
        const gains = totalValue - totalInvested;

        return {
          year: currentYear,
          totalInvested,
          gains,
          lumpsumInvestment: lumpsumInvestment - lumpsum,
        };
      });

      setGraphData({
        labels: graphPoints.map(point => `Year ${point.year}`),
        datasets: [
          {
            label: 'Invested Amount',
            data: graphPoints.map(point => point.totalInvested),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            stack: 'combined',
          },
          {
            label: 'Gains',
            data: graphPoints.map(point => point.gains),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            stack: 'combined',
          },
        ],
      });
    }
  }, [carValue, purchaseDate, growthRate, investmentType]);

  return (
    <div className="container mx-auto p-5 max-w-4xl">
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-5">Buy Your Dream Car</h2>
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
          <div className="w-full md:w-1/3 p-2">
            <label className="block text-gray-700 mb-2">Current Value of the Car (₹)</label>
            <input
              type="number"
              min="0"
              value={carValue}
              onChange={(e) => setCarValue(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/3 p-2">
            <label className="block text-gray-700 mb-2">Date You Wish to Purchase On</label>
            <input
              type="date"
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/3 p-2">
            <label className="block text-gray-700 mb-2">Expected Growth Rate (%)</label>
            <input
              type="number"
              min="0"
              value={growthRate}
              onChange={(e) => setGrowthRate(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="w-full md:w-1/2 p-2">
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
              <p className="text-xl mt-4">Expected Value of the Car on {new Date(purchaseDate).toLocaleDateString()}</p>
              <p className="text-2xl font-bold">{`₹ ${futureCarValue.toFixed(2)}`}</p>
              <p className="text-xl mt-4">Number of Years to Invest:</p>
              <p className="text-2xl font-bold">{numberOfYears} years {numberOfMonths} months</p>
              {investmentType === 'monthly' ? (
                <>
                  <p className="text-xl mt-4">SIP Amount Per Month:</p>
                  <p className="text-2xl font-bold">{`₹ ${sipAmount.toFixed(2)}`}</p>
                  <p className="text-xl mt-4">Expected Gains:</p>
                  <p className="text-2xl font-bold">{`₹ ${(futureCarValue - sipAmount * (numberOfYears * 12 + numberOfMonths)).toFixed(2)}`}</p>
                </>
              ) : (
                <>
                  <p className="text-xl mt-4">Lumpsum Amount to be Invested:</p>
                  <p className="text-2xl font-bold">{`₹ ${lumpsumAmount.toFixed(2)}`}</p>
                  <p className="text-xl mt-4">Expected Gains:</p>
                  <p className="text-2xl font-bold">{`₹ ${(futureCarValue - lumpsumAmount).toFixed(2)}`}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <ButtonGroup />
    </div>
    
  );
}
