import React from 'react';
import './index.scss';

export default function SmallRoundButton(props: {text: string}) {
  return (
     <button className='srb'><p>{props.text}</p></button>
  );
}