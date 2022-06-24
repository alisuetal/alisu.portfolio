import { generateKey, KeyObject } from 'crypto';
import React from 'react';
import { Education, education } from '../../data';
import EduCard from '../../edu-card';
import './index.scss';

export default function EduSec() {
     var data = education();
     var comp = [];

     for(var x = 0; x < data.length; x++){
          comp.push(<EduCard institution={data[x].institution} courseName={data[x].courseName} startDate={data[x].startDate} endDate={data[x].endDate} description={data[x].description} key={x}/>);
     }

     return (
          <div className='sec' id="edu-sec">
               <h1 className='sec-title'><span className='span-main'>&#123;</span>Educação<span className='span-main'>&#125;</span></h1>
               <h3 className='sec-sub-title'>Principais instituições de ensino nas quais estudei.</h3>
               <div className='fw-s'>
                    {comp}
               </div>
          </div>
     );
}