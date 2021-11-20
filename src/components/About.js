import React, { useContext } from 'react';
import { LanguageContext } from '../context/LangContextProvider';
import { navItems, aboutMe } from '../data/content';
import myPhoto from '../images/daniel.jpg';

const About = () => {

    const { language } = useContext(LanguageContext);

    return (
        <section className="inner-container rounded-xl dark:bg-dark dark:text-gray-50" id="about">
            
            <h3 className="section-title">
                {navItems[language][1].name}
            </h3>

            <div className="flex flex-col sm:flex-row flex-wrap">

                {/* ----- Left part - image ----- */}
                <div className="w-full sm:w-2/5 p-4 grid place-content-center">

                    <img 
                        src={myPhoto} 
                        className="h-56 w-56 rounded-xl object-cover" 
                        alt="Daniel Kourtesis"
                    />
                   
                </div>
                
                {/* ----- Right part - text about me ----- */}
                <div className="w-full sm:w-3/5 px-12 py-8 text-justify">
                    { aboutMe[language].split('\n').map((str, idx) => <p key={idx} className="mb-2">{str}</p>) }
                </div>
                
            </div>
        </section>
    )
}

export default About