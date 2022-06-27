import React from 'react';
import './index.scss';

export default function GhostButton(props: {text: string, href: string}) {
  return (
     <a id="a-g-btn" href={props.href}>
          <button className='ghost-button'>
               <p>{props.text}</p>
          </button>
     </a>
  );
}
