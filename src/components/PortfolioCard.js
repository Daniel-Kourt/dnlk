import { useContext } from "react";
import { LanguageContext } from "../context/LangContextProvider";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { portfolioInfo } from "../data/content";

const PortfolioCard = ({ project }) => {
  const { language } = useContext(LanguageContext);

  return (
    <article
      className="rounded-xl w-72 h-80 shadow-lg overflow-hidden transform hover:shadow-2xl relative"
      key={project.id}
    >
      {/* ------- Image ------ */}
      <div className="w-full">
        <img
          src={require("../images/" + project.image + ".jpg").default}
          alt={project.title[language]}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* ------- Title & Description ------ */}
      <div className="p-2">
        <h4 className="font-bold pb-1">{project.title[language]}</h4>
        <p className="text-xs">{project.description[language]}</p>
      </div>

      {/* ------- External links ------ */}
      <div className="flex justify-end space-x-3 text-sm absolute bottom-3 right-6">
        <a
          href={project.extLink}
          target="_blank"
          title={portfolioInfo.extTitle[language]}
          className="bg-secondary hover:bg-third p-2 text-black hover:text-white rounded-xl"
          rel="noreferrer"
        >
          <FaExternalLinkAlt className="h-4 w-4" />
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          title={portfolioInfo.githubTitle[language]}
          className="bg-secondary hover:bg-third p-2 text-black hover:text-white rounded-xl"
          rel="noreferrer"
        >
          <FaGithub className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
};

export default PortfolioCard;
