import React from 'react';
import Button from '../../button';
import './index.scss';

export default function ContactSec() {
  return (
     <div className='sec' id='contact-sec'>
          <h1 className='sec-title'><span className='span-main'>&#123;</span>Contato<span className='span-main'>&#125;</span></h1>
          <h3 className='sec-sub-title'>Aguardo seu e-mail!</h3>
          <div>
               <a href="https://github.com/alisuetal">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
               </a>
               <a href="https://linkedin.com/in/alison-alves">
                    <img src="https://cdn.icon-icons.com/icons2/2429/PNG/512/linkedin_logo_icon_147268.png"/>
               </a>
          </div>
          <Button href="mailto:a.docalves@gmail.com" text='Contatar' function={()=>{}}/>
          <p>Ou copie manualmente:</p>
          <p>a.docalves@gmail.com</p>
     </div>
  );
}