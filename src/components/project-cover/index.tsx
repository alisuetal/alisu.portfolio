import React from 'react';
import SmallRoundButton from '../small-round-button';
import './index.scss';

export default function ProjectCard(props: {name: string, languages: string[], description: string, imgSrc: string}) {
  return (
     <div className='project-card'>
          <img style={{backgroundImage: "url('" + props.imgSrc +" ')"}}/>
          <div>
               <p>{props.name}</p>
               <SmallRoundButton text='Detalhes'/>
          </div>
     </div>
  );
}