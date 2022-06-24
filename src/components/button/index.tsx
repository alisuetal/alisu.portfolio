import React from 'react';
import './index.scss';

export default function Button(props: {text: string}) {
  return (
    <button className='button'>
     <p>{props.text}</p>
    </button>
  );
}
