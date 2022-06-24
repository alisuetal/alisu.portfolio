import React from 'react';
import './App.scss';
import PresSec from '../components/secs/pres-sec';
import EduSec from '../components/secs/edu-sec';
import ProjectSec from '../components/secs/project-sec';
import JobSec from '../components/secs/job-sec';
import ContactSec from '../components/secs/contact-sec';

function App() {
  return (
    <div className="app">
          <PresSec/>
          <EduSec/>
          <ProjectSec/>
          <JobSec/>
          <ContactSec/>
    </div>
  );
}

export default App;
