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
        React.js, Redux, Node.js, MySQL, MongoDB e PostgreSQL. E iniciando meus
        estudos em Desenvolvimento Mobile com ReactNative, Ionic e Flutter. Em
        2020, concluí com sucesso meu curso de Técnico em Informática. Junto com
        isso, estou na FACULDADE, cursando Sistemas de Informação e no SENAI
        TAGUATINGA-DF cursando Técnico de Informatica para Internet. Também
        estou estudando python com django, mas primeiro estou me familiarizando
        com JavScript/TypeScript com NodeJS e, em seguida, me aprofundando em
        Python com Django. Faço cursos extras para aprimorar meus conhecimentos
        em desenvolvimento Web e Mobile. Adoro aprender sobre novas tecnologias,
        quais problemas elas estão resolvendo e como posso usá-los para criar
        produtos melhores e escaláveis.
      </p>
      <Courses />
      <SocialIcons />
    </header>
  </div>
);

export default HomePage;
