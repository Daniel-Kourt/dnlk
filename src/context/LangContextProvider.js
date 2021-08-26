import React, { useState, createContext } from 'react';

export const languages = {
    english: {
        id: 0,
        name: 'EN'
    },
    french: {
        id: 1,
        name: 'FR'
    }
}

export const LanguageContext = createContext();


const LangContextProvider = (props) => {
    const [language, setLanguage] = useState(languages.english.id);
    
    const changeLanguage = () => {
        if (language === 0) {
            setLanguage(1);
            document.title = "Daniel Kourtesis | Site web personnel";
        } 
        else {
            setLanguage(0);
            document.title = "Daniel Kourtesis | Personal Portfolio";
        }   
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LangContextProvider;