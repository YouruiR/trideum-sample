import React, { useState, useEffect } from 'react';
import { getAuthorGraphData } from '../../utils/Utils';
import RelationGraphAuthors from '../../charts/RelationGraphAuthors';

function DashboardCard05({ queryResponse, activeClusterIndex }) {
  const chartData = getAuthorGraphData(queryResponse, activeClusterIndex);
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Relationship Graph (Authors)</h2>
      </header>
      <RelationGraphAuthors 
        authorNodes={chartData.authorNodes}
        documentNodes={chartData.documentNodes}
        edges={chartData.edges}
        width={800} 
        height={248}
      />
    </div>
  );
}

export default DashboardCard05;