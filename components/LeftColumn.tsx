import React from 'react';
import styles from './LeftColumn.module.css';
import { FaLinkedin, FaGithubSquare, FaHtml5, FaCss3Alt, FaReact, FaPython, FaGitAlt, FaJira, FaFigma, FaWhatsapp, FaDownload } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiMongodb, SiNotion  } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const LeftColumn: React.FC<{ inter: any }> = ({ inter }) => {
  return (
    <div className={`${inter.className}`}>
      <div className={`${styles.profile}`}>
        <h1 className={`mb-3 text-2xl font-semibold`}>Luis Felipe Guarin P</h1>
        <p className={`m-0 max-w-[30ch] text-sm opacity-70 mb-3`}>Administrador de empresas / Desarrollador</p>
        <p className={`m-0 max-w-[30ch] text-sm opacity-70 mb-5`}>Desde startups disruptivas hasta proyectos de gran escala, encuentro en la tecnología la herramienta perfecta para materializar mis ambiciones emprendedoras y creativas.</p>
        <p className={`m-0 max-w-[30ch] text-sm opacity-70 mb-2`}>+57 3164944460</p>
        <p className={`m-0 max-w-[30ch] text-sm opacity-70 mb-3`}>luisfelipeguarinp@gmail.com</p>
        <div className={`flex text-2xl mt-2`}>
          {/* <a href="#" className={`${styles.button}  ${styles.email}`}><MdEmail className={`${styles.logo}`}/></a>
          <a href="#" className={`${styles.button} ${styles.whatsapp}`}><FaWhatsapp className={`${styles.logo}`}/></a> */}
          <a href="https://www.linkedin.com/in/luisfelipeguarinpastrana-frontend-developer/" className={`${styles.button} ${styles.linkedin}`}><FaLinkedin className={`${styles.logo}`}/></a>
          <a href="https://github.com/luisfelipe-gp" className={`${styles.button} ${styles.github}`}><FaGithubSquare className={`${styles.logo}`}/></a>
        </div>
        <div className={`${styles.techDiv} `}>
          <p className={`mb-3 text-1xl font-semibold`}>Tecnologías</p>
          <ul className={`${styles.techButtonDiv}`}>
            <li className={`${styles.button} ${styles.html}`}><FaHtml5 className={`${styles.logo}`}/></li>
            <li className={`${styles.button} ${styles.css}`}><FaCss3Alt className={`${styles.logo}`}/></li>
            <li className={`${styles.button} ${styles.javascript}`}><IoLogoJavascript className={`${styles.logo}`}/></li>
            <li className={`${styles.button} ${styles.react}`}><FaReact className={`${styles.logo}`}/></li>
            <li className={`${styles.button} ${styles.next}`}><SiNextdotjs className={`${styles.logo}`}/></li>
            <li className={`${styles.button} ${styles.python}`}><FaPython className={`${styles.logo}`}/></li>
            <li className={`${styles.button} ${styles.mongodb}`}><SiMongodb className={`${styles.logo}`}/></li>
            <li className={`${styles.button} ${styles.git}`}><FaGitAlt className={`${styles.logo}`}/></li>
            <li className={`${styles.button} ${styles.figma}`}><FaFigma className={`${styles.logo}`}/></li>
            <li className={`${styles.button} ${styles.jira}`}><FaJira className={`${styles.logo}`}/></li>
            <li className={`${styles.button} ${styles.notion}`}><SiNotion className={`${styles.logo}`}/></li>
          </ul>
        </div>
        <div className={`${styles.download} mt-10 mb-5`}>
          <p >Descarga CV</p>
          <FaDownload className={`${styles.downloadLogo}`}/>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;