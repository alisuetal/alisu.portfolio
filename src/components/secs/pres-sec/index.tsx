import React from 'react';
import { BiChevronDown, BiMenu } from 'react-icons/bi';
import Button from '../../button';
import GhostButton from '../../ghost-button';
import ProfPic from "../../../assets/img/prof-pic.jpg";
import './index.scss';

export default function PresSec() {
  return (
     <div className="sec" id="pres-sec">
          <div id="sec-header">
               <BiMenu size={40} color="#222222"/>
               <div>
                    <a>Educação</a>
                    <a>Projetos</a>
                    <a>Experiência</a>
                    <a>Contato</a>
               </div>
               <GhostButton text="Contato"/>               
          </div>
          <div id="pres">
               <div>
                    <h1>Olá, eu sou <span className='span-main'>&#123;</span>Alison Alves<span className='span-main'>&#125;</span></h1>
                    <h3>Desenvolvedor fullstack com conhecimento em <span className='span-main'>[</span><span className='span-sec'>React.JS</span>, <span className='span-sec'>Flutter</span>, <span className='span-sec'>.NET</span><span className='span-main'>]</span>.</h3>
                    <Button text="Saiba mais"/>
               </div>
               <div>
                    <img src={ProfPic}/>
               </div>
          </div>
          <div>
               <span>Saiba mais</span>
               <BiChevronDown size={24} color={"#888888"}/>
          </div>
     </div>
  );
}