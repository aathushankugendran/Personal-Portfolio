import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./About.scss";

function About() {
  return (
    <section id="about" className="flex content-center md:h-screen">
      <div className="container mx-auto flex md:flex-row items-center">
        <div className="sm:text-left break-normal mx-4 lg:flex-grow flex flex-col md:items-start">
          <h1 className="font-title text-5xl mb-10 font-medium text-gray-900 mt-8 md:pt-0">
            Aathushan Kugendran
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            Hey! &#128075;&#127998; I'm Aathushan, a 3rd year Computer Science
            student at Toronto Metropolitan University with an interest in full
            stack development, design, and machine learning and a passion for
            solving problems.
          </p>
          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            Previously, I completed internships for{" "}
            <a
              className="QUEUP"
              href="http://www.queup.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Queup 
            </a>
            
            {" "} and {" "}
            <a
              className="TMU"
              href="https://www.torontomu.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMU
            </a>
            . Feel free to reach out! Always looking to work on something
            interesting.
          </p>
          <p className="mb-8 leading-relaxed text-lg text-gray-700 font-bold">
            Currently seeking Winter 2025 Internships.
          </p>
          <div className="inline text-4xl space-x-6 text-gray-400 mb-8 mb:pt-0">
            <a
              href="mailto:aathushankugendran@gmail.com"
              className="hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://www.linkedin.com/in/aathushankugendran/"
              className="hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/aathushankugendran"
              className="hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
