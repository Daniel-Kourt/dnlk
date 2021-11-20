import PortfolioCard from "./PortfolioCard";
import { portfolioInfo } from "../data/content";

const Portfolio = () => {
  return (
    <section
      className="inner-container rounded-xl dark:bg-dark dark:text-gray-50"
      id="portfolio"
    >
      <h3 className="section-title">Portfolio</h3>

      <div className="flex place-content-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          
          {portfolioInfo.portfolio.map((project) => (
            
            <PortfolioCard project={project} key={project.id} />
          
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
