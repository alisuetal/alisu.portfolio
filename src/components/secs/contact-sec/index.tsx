import React from 'react';
import Button from '../../button';
import './index.scss';

export default function ContactSec() {
  return (
     <div className='sec' id='contact-sec'>
          <h1 className='sec-title'><span className='span-main'>&#123;</span>Contato<span className='span-main'>&#125;</span></h1>
          <h3 className='sec-sub-title'>Aguardo seu e-mail!</h3>
          <Button text='Contatar'/>
          <p>Ou copie manualmente:</p>
          <p>a.docalves@gmail.com</p>
     </div>
  );
}