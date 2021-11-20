import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaSass, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTypescript, SiNextDotJs, SiRedux, SiTailwindcss } from 'react-icons/si';

const Components = {
    html: FaHtml5,
    css: FaCss3Alt,
    js: SiJavascript,
    typescript: SiTypescript,
    reactjs: FaReact,
    nextjs: SiNextDotJs,
    redux: SiRedux,
    nodejs: FaNode,
    mongo: SiMongodb,
    sass: FaSass,
    tailwind: SiTailwindcss,
    git: FaGitAlt
  };

export default item => {
    if (typeof Components[item.skill] !== "undefined") {
      return React.createElement(Components[item.skill], {        
        style: {color: item.color, backgroundColor: item.bgcolor}
      });
    }    
};