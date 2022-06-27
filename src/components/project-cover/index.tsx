import React from 'react';
import { Project } from '../data';
import SmallRoundButton from '../small-round-button';
import './index.scss';

export default function ProjectCard(props: {name: string, languages: string[], description: string, imgSrc: string, link: string, function: Function}) {
     var project = new Project(props.name, props.languages, props.description, props.imgSrc, props.link);

     return (
          <div className='project-card'>
               <img style={{backgroundImage: "url('" + props.imgSrc +" ')"}}/>
               <div>
                    <p>{props.name}</p>
                    <SmallRoundButton text='Detalhes' function={() => props.function(project)}/>
               </div>
          </div>
     );
}