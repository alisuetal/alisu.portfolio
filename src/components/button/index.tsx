import React from 'react';
import './index.scss';

export default function HrefButton(props: {text: string, href: string}) {
     return (
          <a href={props.href} id="a-btn">
               <button className='button'>
                    <p>{props.text}</p>
               </button>
          </a>
     );
}
