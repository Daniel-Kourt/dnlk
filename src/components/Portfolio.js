import React, { useContext } from 'react';
import { LanguageContext } from '../context/LangContextProvider';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { portfolioInfo } from '../data/content';

const Portfolio = () => {

    const { language } = useContext(LanguageContext);
    
    return (
        <section className="inner-container dark:bg-dark dark:text-gray-50" id="portfolio">
            
            <h3 className="section-title">Portfolio</h3>

            <div className="flex place-content-center">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">

                    {portfolioInfo.portfolio.map(item => (

                        <article 
                            className="rounded-xl w-72 h-80 shadow-lg overflow-hidden transform hover:shadow-xl relative" 
                            key={item.id}
                        >
                            {/* ------- Image ------ */}
                            <div className="w-full">
                                <img 
                                    src={require("../images/" + item.image + ".jpg").default} 
                                    alt={item.title[language]} 
                                    className="w-full h-auto object-cover" 
                                />
                            </div>

                            {/* ------- Title & Description ------ */}
                            <div className="p-2">
                                <h4 className="font-bold pb-1">
                                    {item.title[language]}
                                </h4>
                                <p className="text-xs">
                                    {item.description[language]}
                                </p>                                
                            </div>   

                            {/* ------- External links ------ */}
                            <div className="flex justify-end space-x-3 text-sm absolute bottom-3 right-6">
                                <a 
                                    href={item.extLink} 
                                    target="_blank" 
                                    title={portfolioInfo.extTitle[language]} 
                                    className="bg-secondary hover:bg-third p-2 text-black hover:text-white rounded-xl" 
                                    rel="noreferrer"
                                >
                                   <FaExternalLinkAlt className="h-4 w-4" />
                                </a>
                                <a 
                                    href={item.githubLink} 
                                    target="_blank" 
                                    title={portfolioInfo.githubTitle[language]} 
                                    className="bg-secondary hover:bg-third p-2 text-black hover:text-white rounded-xl" 
                                    rel="noreferrer"
                                >
                                   <FaGithub className="h-4 w-4" />
                                </a>
                                
                            </div>

                        </article>
                    ))}

                </div>

            </div>
            
        </section>
    )
}

export default Portfolio
