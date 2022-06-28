import React, { useEffect, useState } from 'react';
import './App.scss';
import PresSec from '../components/secs/pres-sec';
import EduSec from '../components/secs/edu-sec';
import ProjectSec from '../components/secs/project-sec';
import JobSec from '../components/secs/job-sec';
import ContactSec from '../components/secs/contact-sec';
import { Job, Project } from '../components/data';
import SideBar from '../components/side-bar';
import ProjectSideBar from '../components/side-bar-project';
import JobSideBar from '../components/side-bar-job';

function App() {
     var [project, setProject] = useState<Project | null>(null);
     var [job, setJob] = useState<Job | null>(null);
     var [sidebar, setSideBar] = useState<React.ReactElement | null>(null);
     var [fsbdisplay, setFsbdisplay] = useState<string>('none');

     useEffect(() => {
          if(project !== null){
               var p = <ProjectSideBar link={project.link} languages={project.languages} imgSrc={project.imgSrc} name={project.name} about={project.description} function={() => setProject(null)}/>
               setSideBar(<SideBar component={() => p}/>);
               setFsbdisplay('flex');
          }
          else{
               if(job !== null){
                    var j = <JobSideBar function={() => setJob(null)} company={job.company} skills={job.skills} job={job.job} startDate={job.startDate} endDate={job.endDate} about={job.description}/>
                    setSideBar(<SideBar component={() => j}/>);
                    setFsbdisplay('flex');
               }
               else{
                    setSideBar(null);
                    setFsbdisplay('none');
               }
          }
     }, [project, job]);

     return (
     <div className="app">
          <div id="secs">
               <PresSec/>
               <EduSec/>
               <ProjectSec function={(p: Project) => setProject(p)}/>
               <JobSec function={(p: Job) => setJob(p)}/>
               <ContactSec/>
          </div>
          <div id="f-sb" style={{display: fsbdisplay}}></div>
          {sidebar}
     </div>
     );
}

export default App;
