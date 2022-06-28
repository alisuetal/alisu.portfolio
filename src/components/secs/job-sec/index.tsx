import React from 'react';
import { Job, job } from '../../data';
import JobExp from '../../job-exp';
import './index.scss';

export default function JobSec(props: {function: Function}) {
     var data = job();
     var comp = [];

     for(var x = 0; x < data.length; x++){
          comp.push(<JobExp skills={data[x].skills} function={(p: Job) => props.function(p)} company={data[x].company} job={data[x].job} startDate={data[x].startDate} endDate={data[x].endDate} description={data[x].description} key={x}/>);
     }

     return (
          <div className='sec' id='job-sec'>
               <h1 className='sec-title'><span className='span-main'>&#123;</span>Experiência<span className='span-main'>&#125;</span></h1>
               <h3 className='sec-sub-title'>Empresas nas quais trabalhei.</h3>
               <div className='fw-s'>
                    {comp}
               </div>
          </div>
     );
}