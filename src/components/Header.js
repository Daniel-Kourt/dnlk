import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LangContextProvider';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navItems } from '../data/content';
import logo from '../images/logo-dnlk.png';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const {language, changeLanguage} = useContext(LanguageContext);

    window.addEventListener('resize', () => {
        setIsOpen(false);
    });
    
    return (
        <header className="w-full fixed z-10 bg-primary h-14 text-white">
            <div className="w-full h-full max-w-screen-lg mx-auto flex items-center justify-between px-4">

                {/* -------- Logo ------- */}
                <div 
                    className="w-40 overflow-hidden cursor-pointer" 
                    onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                              });
                    }}>
                   
                        <img src={logo} alt="dnlk" className="w-full h-10 object-cover"/>
                                            
                </div>
                
                {/* -------- Nav menu for mobiles & tablets ------- */}
                <nav className={`nan-menu ${isOpen ? "nav-menu-open" : ""} bg-primary lg:hidden`} onClick={()=> setIsOpen(false)}>
                    <ul className="flex flex-col justify-center mt-4">

                        {navItems[language].map(item => (
                            <li key={item.id} className="my-6 text-xl text-center">                                
                                    <a href={item.path}
                                        className="cursor-pointer hover:text-secondary"
                                    >
                                       {item.name}
                                    </a>                                 
                            </li>                            
                        ))}

                        <li className="text-center mt-6">
                            <span 
                                className="cursor-pointer p-2 rounded-md bg-secondary text-white font-bold" 
                                onClick={changeLanguage}>
                                {language === 0 ? 'FR' : 'EN'}
                            </span>   
                        </li>
                    </ul>
                </nav>
                
                {/* -------- Nav menu for pc ------- */}
                <nav className="hidden lg:block">
                    <ul className="flex space-x-8 h-14 items-center">
                        
                        {navItems[language].map(item => (
                            <li key={item.id} className="cursor-pointer hover:text-secondary font-semibold">
                                <a href={item.path}>{item.name}</a> 
                            </li>
                        ))}

                        <li className="pl-3 language">
                            <span 
                                className="cursor-pointer p-1 rounded-md bg-secondary font-bold" 
                                onClick={changeLanguage}>
                                {language === 0 ? 'FR' : 'EN'}
                            </span>                            
                        </li>
                        
                    </ul>
                </nav>
                
                {/* -------- Responsive menu buttons ------- */}
                <FaBars 
                    onClick={() => setIsOpen(true)} 
                    className={`${isOpen && "hidden"} menu-buttons lg:hidden dark:text-white`} 
                />
                <FaTimes 
                    onClick={() => setIsOpen(false)} 
                    className={`${!isOpen && "hidden"} menu-buttons dark:text-white`} 
                />

            </div>
            
        </header>
    )

}

export default Header
