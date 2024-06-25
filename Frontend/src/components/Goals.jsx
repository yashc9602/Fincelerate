import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { 
  AcademicCapIcon, 
  BuildingOffice2Icon,
  CurrencyDollarIcon, 
  HomeIcon, 
  HeartIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const goals = [
  { name: 'Buy Your Dream Car', path: '/dreamcar', icon: BuildingOffice2Icon },
  { name: 'Buy Your Dream House', path: '/dreamhouse', icon: HomeIcon },
  { name: 'Build Your Corpus', path: '/corpus', icon: CurrencyDollarIcon },
  { name: "Plan Your Child's Education", path: '/childeducation', icon: AcademicCapIcon },
  { name: "Plan Your Child's Marriage", path: '/childmarriage', icon: HeartIcon },
  { name: 'Plan Your Retirement', path: '/retirementcalculator', icon: UserGroupIcon },
];

const GoalsPage = () => {
  const navigate = useNavigate();

  const navigateToGoal = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Plan Your Goals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {goals.map((goal) => (
          <div
            key={goal.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition transform hover:scale-105"
            onClick={() => navigateToGoal(goal.path)}
          >
            <div className="flex items-center justify-center h-40 bg-gray-200">
              <goal.icon className="h-20 w-20 text-gray-700" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">{goal.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsPage;
