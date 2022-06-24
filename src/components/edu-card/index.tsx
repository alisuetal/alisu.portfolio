import React from 'react';
import {BsBookFill} from "react-icons/bs";
import './index.scss';

export default function EduCard(props: {institution: string, courseName: string, startDate: string, endDate: string, description: string}) {
  return (
     <div className='edu-card'>
          <p><BsBookFill color="#999999" size="16"/>{props.institution}</p>
          <p>{props.courseName}</p>
          <p>De {props.startDate} até {props.endDate}</p>
          <p>{props.description}</p>
     </div>
  );
}