import React from 'react';
import './index.scss';

export default function GhostButton(props: {text: string}) {
  return (
    <button className='ghost-button'>
     <p>{props.text}</p>
    </button>
  );
}
