import React from 'react';
import './index.scss';

export default function Button(props: {text: string, function: Function, href: string}) {
     return (
          <a href={props.href} id="a-btn">
               <button className='button' onClick={(e) => props.function()}>
                    <p>{props.text}</p>
               </button>
          </a>
     );
}
