import React from 'react';
import { Treemap } from './components/Treemap';
import { TreeNode } from './types/TreemapTypes';

const sampleData: TreeNode = {
  name: 'Global Defense Companies',
  value: 0,
  children: [
    {
      name: 'United States',
      value: 0,
      children: [
        { name: 'General Electric', value: 147359 },
        { name: 'Hewlett-Packard', value: 120357 },
        { name: 'Boeing', value: 81698 },
        { name: 'Lockheed Martin', value: 47182 },
        { name: 'Honeywell', value: 37655 },
        { name: 'General Dynamics', value: 31513 },
      ],
    },
    {
      name: 'South Korea',
      value: 0,
      children: [
        { name: 'Samsung', value: 178521 },
      ],
    },
    {
      name: 'Italy',
      value: 0,
      children: [
        { name: 'FIAT', value: 107637 },
        { name: 'Finmeccanica', value: 22131 },
        { name: 'IVECO', value: 11465 },
      ],
    },
    {
      name: 'Japan',
      value: 0,
      children: [
        { name: 'Mitsubishi Electric', value: 44708 },
        { name: 'Mitsubishi Heavy Industries', value: 33316 },
      ],
    },
  ],
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Global Defense Companies</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Treemap
            data={sampleData}
            width={1000}
            height={600}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default App;