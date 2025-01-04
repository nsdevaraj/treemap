import React from 'react';
import { Treemap } from './components/Treemap';
import { TreeNode } from './types/TreemapTypes';

const sampleData: TreeNode = {
  name: 'Global Defense Companies',
  value: 0,
  level: 'root',
  children: [
    {
      name: 'United States',
      value: 0,
      level: 'country',
      children: [
        { 
          name: 'General Electric',
          value: 0,
          level: 'company',
          children: [
            { name: 'Power Systems', value: 82521, level: 'division' },
            { name: 'Aviation', value: 38425, level: 'division' },
            { name: 'Healthcare', value: 26413, level: 'division' }
          ]
        },
        { 
          name: 'Hewlett-Packard',
          value: 0,
          level: 'company',
          children: [
            { name: 'Enterprise Solutions', value: 65234, level: 'division' },
            { name: 'Personal Systems', value: 35123, level: 'division' },
            { name: 'Printing', value: 20000, level: 'division' }
          ]
        },
        { 
          name: 'Boeing',
          value: 0,
          level: 'company',
          children: [
            { name: 'Commercial Aircraft', value: 45698, level: 'division' },
            { name: 'Defense & Space', value: 25000, level: 'division' },
            { name: 'Global Services', value: 11000, level: 'division' }
          ]
        },
        { 
          name: 'Lockheed Martin',
          value: 0,
          level: 'company',
          children: [
            { name: 'Aeronautics', value: 25182, level: 'division' },
            { name: 'Space Systems', value: 12000, level: 'division' },
            { name: 'Missiles', value: 10000, level: 'division' }
          ]
        },
        { 
          name: 'Honeywell',
          value: 0,
          level: 'company',
          children: [
            { name: 'Aerospace', value: 20655, level: 'division' },
            { name: 'Building Technologies', value: 10000, level: 'division' },
            { name: 'Safety Solutions', value: 7000, level: 'division' }
          ]
        },
        { 
          name: 'General Dynamics',
          value: 0,
          level: 'company',
          children: [
            { name: 'Combat Systems', value: 15513, level: 'division' },
            { name: 'Information Technology', value: 10000, level: 'division' },
            { name: 'Marine Systems', value: 6000, level: 'division' }
          ]
        },
      ],
    },
    {
      name: 'South Korea',
      value: 0,
      level: 'country',
      children: [
        { 
          name: 'Samsung',
          value: 0,
          level: 'company',
          children: [
            { name: 'Electronics', value: 98521, level: 'division' },
            { name: 'Defense Systems', value: 50000, level: 'division' },
            { name: 'Engineering', value: 30000, level: 'division' }
          ]
        },
      ],
    },
    {
      name: 'Italy',
      value: 0,
      level: 'country',
      children: [
        { 
          name: 'FIAT',
          value: 0,
          level: 'company',
          children: [
            { name: 'Automotive', value: 67637, level: 'division' },
            { name: 'Industrial', value: 25000, level: 'division' },
            { name: 'Components', value: 15000, level: 'division' }
          ]
        },
        { 
          name: 'Finmeccanica',
          value: 0,
          level: 'company',
          children: [
            { name: 'Helicopters', value: 12131, level: 'division' },
            { name: 'Defense Electronics', value: 6000, level: 'division' },
            { name: 'Aeronautics', value: 4000, level: 'division' }
          ]
        },
        { 
          name: 'IVECO',
          value: 0,
          level: 'company',
          children: [
            { name: 'Commercial Vehicles', value: 6465, level: 'division' },
            { name: 'Defense Vehicles', value: 3000, level: 'division' },
            { name: 'Powertrain', value: 2000, level: 'division' }
          ]
        },
      ],
    },
    {
      name: 'Japan',
      value: 0,
      level: 'country',
      children: [
        { 
          name: 'Mitsubishi Electric',
          value: 0,
          level: 'company',
          children: [
            { name: 'Industrial Automation', value: 24708, level: 'division' },
            { name: 'Infrastructure', value: 12000, level: 'division' },
            { name: 'Electronic Devices', value: 8000, level: 'division' }
          ]
        },
        { 
          name: 'Mitsubishi Heavy Industries',
          value: 0,
          level: 'company',
          children: [
            { name: 'Power Systems', value: 18316, level: 'division' },
            { name: 'Aircraft', value: 10000, level: 'division' },
            { name: 'Defense & Space', value: 5000, level: 'division' }
          ]
        },
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