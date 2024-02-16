import React from 'react';
import Image from "next/image";
import styles from "./Portfolio.module.css"

const projects = [
  {
    id: 1,
    title: 'Gymshark',
    description: 'Ecommerce de ropa para gimnasio basada en la empresa Gymshark.',
    imageUrl: '/Gymshark.png',
    livePage: 'https://luisfelipe-gp.github.io/gymshark-ecommerce/',
    githubRepoUrl: 'https://github.com/luisfelipe-gp/gymshark-ecommerce'
  },
  {
    id: 2,
    title: 'Hawkers',
    description: 'Ecommerce para gafas basada en la empresa Hawkers.',
    imageUrl: '/Hawkers.png',
    livePage: ' https://luisfelipe-gp.github.io/Hawkers-ecommerce/',
    githubRepoUrl: 'https://github.com/luisfelipe-gp/Hawkers-ecommerce'
  }
];

const Portfolio = () => {
  return (
    <div className={`${styles.gridContainer} `}>
      {projects.map(project => (
        <div key={project.id} className="relative">
          <div className="absolute top-0 left-0 w-full h-full flex flex-col  opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center font-semibold">{project.title}</p>
            <p className="text-white text-sm text-center opacity-65">{project.description}</p>
            <div className='flex justify-between mb-3'>
            <a href={project.livePage} className="mt-2 text-sm text-blue-500 hover:underline font-semibold">En vivo</a>
            <a href={project.githubRepoUrl} className="mt-2 text-sm text-blue-500 hover:underline font-semibold">Ver GitHub</a>
            </div>
          </div>
          <Image src={project.imageUrl} alt={project.title} className="w-full" width={50}height={10} layout='responsive'/>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;