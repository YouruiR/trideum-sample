import React from 'react';
import LineChart from '../../charts/LineChart02';
import { tailwindConfig } from '../../utils/Utils';
import { getGraphData } from '../../utils/Utils';
import RelationGraph from '../../charts/RelationGraph';

function DashboardCard08({ queryResponse, activeClusterIndex }) {
  const chartData = getGraphData(queryResponse, activeClusterIndex);
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Relationship Graph (Documents)</h2>
      </header>
      <RelationGraph 
        data={chartData} 
        width={800} 
        height={248} 
      />
    </div>
  );
}

export default DashboardCard08;
