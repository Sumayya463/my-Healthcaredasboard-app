import React from 'react';
import Header from './components/Header/Header';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import CalendarView from './components/DashboardMainContent/CalendarView/CalendarView';
import DashboardOverview from './components/DashboardMainContent/Dashoverview/DashboardOverview';
import AnatomySection from './components/DashboardMainContent/AnatomySection/AnatomySection';
import HealthstatusCards from './components/DashboardMainContent/healthstatusCards/HealthstatusCards';
import { FaTooth, FaLungs, FaBone } from 'react-icons/fa'; 
import ActivityFeed from './components/DashboardMainContent/ActivityFeed/ActivityFeed';
import SimpleAppointmentCard from './components/DashboardMainContent/SimpleAppointmentCard/SimpleAppointmentCard';
import UpcomingSchedule from './components/DashboardMainContent/UpcomingSchedule/UpcomingSchedule';
function App() {
  

  return (
    
    <div className='container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main-section'>
        <Header />
        <DashboardOverview />
        <div className='grid-overview'>
          <div className='anatomy-section'>
            <AnatomySection />
          </div>
          <div className='health-status'>
            <HealthstatusCards
            icon={<FaLungs size={40} color="#ff6b6b" />}
            title="Lungs" 
            date="26 Oct 2021"
            statusColor="#ff6b6b"
            progress={70 }
            />

            <HealthstatusCards
            icon={<FaTooth size={40} color="white" />}
            title="Teeth"
            date="26 Oct 2021"
            statusColor="#4cd4b0"
            progress={85}
            />

            <HealthstatusCards
            icon={<FaBone size={40} color="bisque" />}
            title="Bone"
            date="26 Oct 2021"
            statusColor="#ff8c66"
            progress={50}
            />
          </div>
        </div>
          <div className='Activity-feed'>
            <ActivityFeed />
          </div>
      </div> 
      <div className='calendar-schedule'>
        <CalendarView />
          <div className='simple-appt'>
        <SimpleAppointmentCard />
          </div>
          <UpcomingSchedule/>
      </div>
    
    </div>
    
  );
}

export default App;
