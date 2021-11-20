import React, { useContext } from "react";
import { LanguageContext } from "../context/LangContextProvider";
import { heroInfo } from "../data/content";
import { FaLinkedin, FaGithub, FaFacebookSquare, FaArrowDown } from "react-icons/fa";
import heroIcon from "../images/heroIcon.svg";

const Hero = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="hero">
      <div className="hero-inner">

        {/* ------- Left ------- */}
        <div className="w-full h-full md:w-1/2 text-white flex place-content-center">
          <div className="text-2xl lg:text-3xl hero-info">
            
            {/* ------- Hi i am Daniel ------- */}
            <h2 className="pb-4">
                {heroInfo[language].hi}!
            </h2>
            <h2 className="pb-4">
              {heroInfo[language].iam}{" "}
              <span className="text-secondary">Daniel</span>
            </h2>
            <h2 className="pb-4">
              {heroInfo[language].prof1}
              <br />
              {heroInfo[language].prof2}
            </h2>

            {/* ------- Socials ------- */}
            <div className="flex space-x-6 mt-4 text-xl text-secondary">
              <a
                href="https://www.linkedin.com/in/daniel-kourtesis/"
                target="_blank"
                title="Visit my LinkedIn profile"
                rel="noreferrer"
              >
                <FaLinkedin className="social-icons" />
              </a>              
              <a
                href="https://github.com/Daniel-Kourt"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="social-icons" />
              </a>  
              <a
                href="https://www.facebook.com/daniel.koyrt"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare className="social-icons" />
              </a>            
            </div>

            {/* ------- Scroll ------- */}
            <div className="mt-16 ml-6 w-24 text-center text-base">
              <span>Scroll</span>
              <FaArrowDown className="w-6 h-6 mx-auto mt-6 animate-bounce" />
            </div>
          </div>
        </div>

        {/* ------- Right ------- */}
        <div className="px-12 w-full hidden md:flex md:w-1/2">
          <img src={heroIcon} alt="dnlk" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
