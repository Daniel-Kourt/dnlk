import React from 'react';
import logo from '../images/logo-dnlk.png';
import { FaLinkedin, FaGithub, FaFacebookF, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-primary">
            <div className="max-w-screen-lg mx-auto px-4">
               
                <div className="flex flex-wrap justify-between items-center border-t-2 border-secondary py-8">
                    
                    {/* ----- Logo ----- */}
                    <div className="w-32 overflow-hidden cursor-pointer">
                        <span
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                  });
                            }}
                        >
                            <img src={logo} alt="dnlk" className="w-full h-auto object-cover"/>
                        </span>
                    </div>
                    
                    {/* ----- Socials ----- */}
                    <div className="flex space-x-6 text-xl text-white sm:order-3">
                        <a href="https://www.linkedin.com/in/daniel-kourtesis/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="social-icons" />                                
                        </a>
                        <a href="https://github.com/Daniel-Kourt" target="_blank" rel="noreferrer">
                            <FaGithub className="social-icons" />                                
                        </a>
                        <a href="https://www.facebook.com/daniel.koyrt" target="_blank" rel="noreferrer">
                            <FaFacebookF className="social-icons" />                                
                        </a>

                    </div>
                    
                    {/* ----- Return to top ----- */}
                    <div className="w-full sm:w-1/5 sm:order-2 flex justify-center pt-6 sm:p-0">
                        <span 
                            className="rounded-md border-2 border-secondary p-2 cursor-pointer inline text-white hover:text-secondary"
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                  });
                            }}
                        >
                            <FaArrowUp className="w-5 h-5"/>
                        </span>
                    </div>

                </div>

                <div className="text-center text-xs pb-2 text-white">
                    <h4>Copyright &copy; 2021 Daniel Kourtesis</h4>
                </div>
               

            </div>
        </footer>
    )
}

export default Footer
