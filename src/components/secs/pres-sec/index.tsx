import React, { useState } from 'react';
import { BiChevronDown, BiMenu } from 'react-icons/bi';
import Button from '../../button';
import GhostButton from '../../ghost-button';
import ProfPic from "../../../assets/img/prof-pic.jpg";
import './index.scss';
import { BsXLg } from 'react-icons/bs';

export default function PresSec() {
     var [sideNav, setSideNav] = useState<boolean>(false);

     return (
          <div className="sec" id="pres-sec">
               <aside id="side-nav" style={{display: sideNav ? "flex" : "none"}}>
                    <div id="sn-close-row" >
                         <BsXLg color="#888888" onClick={() => {setSideNav(!sideNav)}} size={20}/>
                    </div>
                    <p>Seções</p>
                    <div>
                         <a href="#edu-sec" onClick={() => {setSideNav(!sideNav)}}>Educação</a>
                         <a href="#project-sec" onClick={() => {setSideNav(!sideNav)}}>Projetos</a>
                         <a href="#job-sec" onClick={() => {setSideNav(!sideNav)}}>Experiência</a>
                         <a href="#contact-sec" onClick={() => {setSideNav(!sideNav)}}>Contato</a>
                    </div>
               </aside>
               <div id="sec-header">
                    <BiMenu size={40} onClick={() => {setSideNav(!sideNav)}} color="#222222"/>
                    <div>
                    <a href="#edu-sec">Educação</a>
                         <a href="#project-sec">Projetos</a>
                         <a href="#job-sec">Experiência</a>
                         <a href="#contact-sec">Contato</a>
                    </div>
                    <GhostButton text="Contato"/>               
               </div>
               <div id="pres">
                    <div>
                         <h1>Olá, eu sou <span className='span-main'>&#123;</span>Alison Alves<span className='span-main'>&#125;</span></h1>
                         <h3>Desenvolvedor fullstack com conhecimento em <span className='span-main'>[</span><span className='span-sec'>React.JS</span>, <span className='span-sec'>Flutter</span>, <span className='span-sec'>.NET</span><span className='span-main'>]</span>, entre outras linguagens e frameworks.</h3>
                         <Button href="#edu-sec" text="Saiba mais" function={()=>{}}/>
                    </div>
                    <div/>
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