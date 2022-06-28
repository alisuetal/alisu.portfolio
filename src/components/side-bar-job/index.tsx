import React from 'react';
import './index.scss';
import {BsXLg} from "react-icons/bs";

export default function JobSideBar(props: {company: string, skills: string[], job: string, startDate: string, endDate: string, about: string, function: Function}) {
     var langs = [];

     for(var x = 0; x < props.skills.length; x++){
          langs.push(<div className="sb-skills-lang">{props.skills[x]}</div>);
     }

     return (
          <div id="side-bar-job">
               <div>
                    <div id="sb-close-row">
                         <BsXLg color="#888888" onClick={() => props.function()} size={20}/>
                    </div>
                    <div id="sb-skills-lang-holder">
                         {langs}
                    </div>
                    <p id="sb-job-company">{props.company}</p>
                    <p id="sb-job-name">{props.job}</p>
                    <p id="sb-job-date">De {props.startDate} até {props.endDate}</p>
                    <p id="sb-job-about">{props.about}</p>
               </div>
          </div>
     );
}