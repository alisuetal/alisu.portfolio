import React, { useEffect, useState } from 'react';
import './App.scss';
import PresSec from '../components/secs/pres-sec';
import EduSec from '../components/secs/edu-sec';
import ProjectSec from '../components/secs/project-sec';
import JobSec from '../components/secs/job-sec';
import ContactSec from '../components/secs/contact-sec';
import { Project } from '../components/data';
import SideBar from '../components/side-bar';

function App() {
     var [project, setProject] = useState<Project | null>(null);
     var [sidebar, setSideBar] = useState<React.ReactElement | null>(null);
     var [fsbdisplay, setFsbdisplay] = useState<string>('none');

     useEffect(() => {
          if(project !== null){
               setSideBar(<SideBar link={project.link} languages={project.languages} imgSrc={project.imgSrc} name={project.name} about={project.description} function={() => setProject(null)}/>);
               setFsbdisplay('flex');
          }
          else{
               setSideBar(null);
               setFsbdisplay('none');
          }
     }, [project]);

     return (
     <div className="app">
          <div id="secs">
               <PresSec/>
               <EduSec/>
               <ProjectSec function={(p: Project) => setProject(p)}/>
               <JobSec/>
               <ContactSec/>
          </div>
          <div id="f-sb" style={{display: fsbdisplay}}></div>
          {sidebar}
     </div>
     );
}

export default App;
