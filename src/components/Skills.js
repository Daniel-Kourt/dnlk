import React, { useContext } from 'react';
import { LanguageContext } from '../context/LangContextProvider';
import { navItems, learning } from '../data/content';
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaSass, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiNextDotJs, SiRedux, SiTailwindcss } from 'react-icons/si';

const Skills = () => {

    const {language} = useContext(LanguageContext);

    return (
        <section 
            className="inner-container bg-gray-100 rounded-xl dark:bg-primary dark:text-gray-50" 
            id="skills"
        >
            {/* ----- title ----- */}
            <h3 className="section-title">
                {navItems[language][2].name}
            </h3>

            {/* ----- skills ----- */}
            <div className="flex flex-wrap justify-center items-center text-5xl px-8 sm:px-16">
                
                <div className="p-8">
                    <FaHtml5 style={{color: "#E34C26"}} />
                </div>
                <div className="p-8">
                    <FaCss3Alt style={{color: "#264DE4"}} />
                </div>
                <div className="p-8">
                    <SiJavascript style={{color: "#F0DB4F", backgroundColor: "#323330"}} />
                </div>
                <div className="p-8">
                    <FaReact style={{color: "#61DBFB"}} />
                </div>
                <div className="p-8">
                    <SiNextDotJs style={{color: "#000"}} />
                </div>                
                <div className="p-8">
                    <SiRedux style={{color: "#764ABC"}} />
                </div>
                <div className="p-8">
                    <FaNode style={{color: "#3C873A"}} />
                </div>
                <div className="p-8">
                    <SiMongodb style={{color: "#3FA037"}} />
                </div>
                <div className="p-8">
                    <FaSass style={{color: "#CD6799"}} />
                </div>                
                <div className="p-8">
                    <SiTailwindcss style={{color: "#06B6D4"}} />
                </div>
                <div className="p-8">
                    <FaGitAlt style={{color: "#F34F29"}} />
                </div>
                      
            </div>


            {/* ----- explore now ----- */}
            <p className="text-center text-sm font-semibold mt-4">
                { language === 0 ? "I explore now:" : "J'apprends maintenant:"}
            </p>
            
            <div className="flex flex-wrap justify-center items-center text-sm px-8 sm:px-16">
               
                {learning.map((item, idx) => (
                    <div key={idx} className="px-4 pt-4">
                        <span className="text-sm">
                            {item}
                        </span>
                    </div>
                ))}
                
            </div>    

        </section>
    )
}

export default Skills
