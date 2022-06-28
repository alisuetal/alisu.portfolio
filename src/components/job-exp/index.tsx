import React from 'react';
import {BsBriefcaseFill} from "react-icons/bs";
import { Job } from '../data';
import SmallRoundButton from '../small-round-button';
import './index.scss';

export default function JobExp(props: {company: string, job: string, startDate: string, endDate: string, description: string, function: Function, skills: string[]}) {
     var job = new Job(props.company, props.skills, props.job, props.startDate, props.endDate, props.description);
     return (
          <div className='job-card'>
               <div>
                    <p><BsBriefcaseFill color="#999999" size="16"/>{props.company}</p>
                    <p>{props.job}</p>
                    <p>De {props.startDate} até {props.endDate}</p>
               </div>          
               <div>
                    <SmallRoundButton function={() => props.function(job)} text='Detalhes'/>
               </div>
          </div>
     );
}