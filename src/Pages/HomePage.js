import React from 'react';

import Courses from '../Components/Courses/index';
import SocialIcons from '../Components/SocialIcons';

const HomePage = () => (
  <div className="HomePage">
    <header className="hero">
      <h1 className="hero-text">
        Olá, <span>Sou Davi Bonfim</span>
      </h1>
      <p className="h-sub-text">
        Um programador ousado, sou estudante Full Stack Web Developer com
        React.js, Redux, Node.js com JavScript/TypeScript, MySQL, MongoDB e
        PostgreSQL. E iniciando meus estudos em Desenvolvimento Mobile com
        ReactNative, Ionic e Flutter. Adoro aprender sobre novas tecnologias,
        quais problemas elas estão resolvendo e como posso usá-las para criar
        produtos melhores e escaláveis.
        <br />
        <span className="more-text">Veja mais dos meus trabalhos:</span>
        <SocialIcons />
      </p>
      <Courses />
    </header>
  </div>
);

export default HomePage;
