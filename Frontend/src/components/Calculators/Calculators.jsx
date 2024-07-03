import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { 
  CalculatorIcon, 
  ChartBarIcon, 
  ArrowsRightLeftIcon, 
  ArrowUpIcon, 
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline';
import useScrollToTop from '../useScrollToTop';

const calculators = [
  { name: 'SIP Calculator', path: '/sipcalculator', icon: CalculatorIcon },
  { name: 'Lumpsum Calculator', path: '/lumpsumcalculator', icon: ChartBarIcon },
  { name: 'STP Calculator', path: '/stpcalculator', icon: ArrowsRightLeftIcon },
  { name: 'SWP Calculator', path: '/swpcalculator', icon: CurrencyRupeeIcon },
  { name: 'SIP Step Up Calculator', path: '/stepupsipcalculator', icon: ArrowUpIcon },
];

const CalculatorsPage = () => {
  useScrollToTop();
  const navigate = useNavigate();

  const navigateToCalculator = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Financial Calculators</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {calculators.map((calculator) => (
          <div
            key={calculator.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition transform hover:scale-105"
            onClick={() => navigateToCalculator(calculator.path)}
          >
            <div className="flex items-center justify-center h-40 bg-gray-200">
              <calculator.icon className="h-20 w-20 text-gray-700" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">{calculator.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculatorsPage;
