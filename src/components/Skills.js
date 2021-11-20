import React, { useContext } from 'react';
import { LanguageContext } from '../context/LangContextProvider';
import { navItems, learning } from '../data/content';
import Components from '../data/skills';
import { mySkills } from '../data/content';

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

                {
                    mySkills.map(skill => 
                        <div key={skill.skill} className="p-8">
                            {Components(skill)}
                        </div>
                    )
                }   
                      
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
