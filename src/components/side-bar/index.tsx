import React from 'react';
import './index.scss';
import {BsXLg} from "react-icons/bs";
import Button from '../button';

export default function SideBar(props: {component: Function}) {
     return (
          <aside id="side-bar">
               {props.component()}
          </aside>
     );
}