import React, { useContext } from 'react';
import { LanguageContext } from '../context/LangContextProvider';
import { contactInfo, navItems } from '../data/content';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const Contact = () => {
    
    const { language } = useContext(LanguageContext);
    const { register, handleSubmit, errors } = useForm({shouldFocusError: false});

    const onSubmit = (data, e) => {
        
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", ...data })
          })
            .then(() => 
                    toast.success(`${contactInfo[language].sent} ${data.name}!`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000}
            ))
            .catch(error => toast.error(error));


        e.target.reset();                
    }

    return (
        <section className="w-full py-16 bg-primary" id="contact">
            <div className="max-w-screen-lg mx-auto">

                <h3 className="section-title text-white">
                    {navItems[language][4].name}
                </h3>
                                
                <div className="p-8 flex place-items-center bg-primary">

                    <form 
                        className="w-full text-center" 
                        onSubmit={handleSubmit(onSubmit)}
                        name="contact-form"
                        method="POST"
                        data-netlify="true"
                    >
                         {/* ---- for netlify form ---- */}
                        <input type="hidden" name="form-name" value="contact-form"/>
                        
                        <div className="flex flex-wrap w-full justify-center">
                            
                            {/* ----- Name & Email ----- */}
                            <div className="w-full md:w-1/2 max-w-sm p-4 flex flex-col space-y-4 flex-start">
                                
                                {/* ---- name input ---- */}
                                <div className="h-12">
                                    <input 
                                        name="name" 
                                        type="text" 
                                        placeholder={contactInfo[language].name} 
                                        autoComplete="off"
                                        maxLength="30"
                                        className={`inputs ${errors.name ? 'border-red-700' : 'border-secondary focus:border-third'}`}                                        
                                        ref={register({required: contactInfo[language].required})}
                                    />
                                    <span className="error-span">{errors.name && errors.name.message}</span>
                                </div>
                                
                                {/* ---- email input ---- */}
                                <div className="h-12">
                                    <input 
                                        name="email" 
                                        type="text" 
                                        placeholder={contactInfo[language].mail}
                                        autoComplete="off"
                                        className={`inputs ${errors.email ? 'border-red-700' : 'border-secondary focus:border-third'}`}
                                        ref={register({required: contactInfo[language].required, 
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                                                            message: contactInfo[language].emailvalid
                                        }})}
                                    />
                                    <span className="error-span">{errors.email && errors.email.message}</span>
                                </div>
                                
                                                                
                            </div>
                            
                            {/* ----- Message ----- */}
                            <div className="w-full md:w-1/2 max-w-sm p-4">
                                <textarea 
                                    name="message"
                                    placeholder={contactInfo[language].message}
                                    rows="7"
                                    className={`inputs textarea resize-none ${errors.message ? 'border-red-700' : 'border-secondary focus:border-third'}`}                                        
                                    ref={register({required: contactInfo[language].required})} 
                                />
                                <span className="error-span m-0">{errors.message && errors.message.message}</span>
                            </div>

                        </div>

                        <button 
                            type="submit" 
                            className="py-2 px-8 rounded-md bg-secondary hover:bg-third text-white font-semibold mt-6 outline-none focus:outline-none"
                        >
                            {contactInfo[language].send}
                        </button>

                    </form>

                </div>

            </div>

            <ToastContainer />

        </section> 
    )
}

export default Contact
