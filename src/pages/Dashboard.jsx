import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';
import mockData from '../mock';

function Dashboard() {

  let lastState;

  /*
  If the last session state exists in local storage, use that instead of empty state
  */
  useEffect(() => {
    const localStorageJSON = localStorage.getItem(authUserID);
    lastState = JSON.parse(localStorageJSON);
    if (lastState) {
      setQueryResponse(lastState.data);
      setActiveClusterIndex(lastState.activeIndex);
    }
  }, [])

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [queryResponse, setQueryResponse] = useState(mockData)
  const [activeClusterIndex, setActiveClusterIndex] = useState(null);
  const [authUserID, setAuthUserID] = useState('user1');

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                <Datepicker />
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Generate Report</span>
                </button>                
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              <DashboardCard08 queryResponse={queryResponse} activeClusterIndex={activeClusterIndex}/>
              <DashboardCard13 queryResponse={queryResponse} activeClusterIndex={activeClusterIndex}/>
              <DashboardCard05 queryResponse={queryResponse} activeClusterIndex={activeClusterIndex}/>
              <DashboardCard04 setActiveClusterIndex={setActiveClusterIndex} activeClusterIndex={activeClusterIndex} authUserID={authUserID} queryResponse={queryResponse}/>
              <DashboardCard12 queryResponse={queryResponse} activeClusterIndex={activeClusterIndex}/>
              <DashboardCard09 queryResponse={queryResponse} activeClusterIndex={activeClusterIndex}/>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;