import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          Eu sou<span> Davi</span>
        </h4>
        <p className="about-text">
          Em 2020, concluí com sucesso meu curso de Técnico em Informática.
          Estou na FACULDADE, cursando Sistemas de Informação e no SENAI
          TAGUATINGA-DF cursando Técnico de Informatica para Internet.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Nome Completo</p>
            <p>Idade</p>
            <p>Nacionalidade</p>
            <p>Localidade</p>
          </div>
          <div className="right-section">
            <p>: Davi Souza da Silva Bonfim</p>
            <p>: 21</p>
            <p>: Brasileiro</p>
            <p>: Ceilândia</p>
          </div>
        </div>
        <button className="btn">Download Curriculum</button>
      </div>
    </div>
  );
}

export default ImageSection;
