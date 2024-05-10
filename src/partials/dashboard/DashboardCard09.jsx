import React from 'react';

function DashboardCard09() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Cluster Info</h2>
      </header>
      <div className="px-5 py-3">
      </div>
      <div className="grow">
        <header className="px-5 py-4 border-slate-100 dark:border-slate-700 flex items-center">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">Additional info here</h2>
        </header>
      </div>
    </div>
  );
}

export default DashboardCard09;
