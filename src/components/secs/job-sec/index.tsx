import React from 'react';
import { job } from '../../data';
import JobExp from '../../job-exp';
import './index.scss';

export default function JobSec() {
     var data = job();
     var comp = [];

     for(var x = 0; x < data.length; x++){
          comp.push(<JobExp company={data[x].institution} job={data[x].courseName} startDate={data[x].startDate} endDate={data[x].endDate} description={data[x].description} key={x}/>);
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