import React from 'react';
import { Project } from '../data';
import './index.scss';

export default function SmallRoundButton(props: {text: string, function: Function}) {
  return (
     <button className='srb' onClick={(e) => props.function()}><p>{props.text}</p></button>
  );
}