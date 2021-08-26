import { About, Contact, Footer, Header, Hero, Portfolio, Skills } from './components'; 
import LangContextProvider from "./context/LangContextProvider";

function App() {
  return (
    <>
      <LangContextProvider>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />        
      </LangContextProvider>       
    </>
  );
}

export default App;
