import React, { useState, useEffect } from 'react';

function DashboardCard13({ queryResponse, activeClusterIndex }) {
  const [summary, setSummary] = useState('');
  useEffect(() => {
    if (queryResponse && activeClusterIndex !== null) {
      setSummary(queryResponse[activeClusterIndex].clusterSummary);
    }
  }, [activeClusterIndex])
  
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Summary</h2>
      </header>
      <div className="p-3">
        {/* Card content */}
        <div>
          <header className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
            This cluster
          </header>
          {<ul className="my-1">
            <li className="flex px-2">
              <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    <p className="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white" href="#0">
                      {summary}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>}
        </div>
      </div>
    </div>
  );
}

export default DashboardCard13;
