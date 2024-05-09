import React from 'react';
import BarChart from '../../charts/BarChart01';


// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04(props) {
  const { setActiveClusterIndex, authUserID, queryResponse } = props;
  const chartData = {
    labels: [],
    datasets: [
      {
        label: 'Total Documents',
        data: [],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      }
    ],
  };

  for (const cluster of queryResponse) {
    chartData.labels.push(`Cluster ${cluster.clusterId}`);
    chartData.datasets[0].data.push(cluster.totalClusterValue);
  }

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Clusters</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} setActiveClusterIndex={setActiveClusterIndex} authUserID={authUserID} />
    </div>
  );
}

export default DashboardCard04;
