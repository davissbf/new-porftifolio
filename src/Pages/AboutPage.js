import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

const AboutPage = () => (
  <div className="AboutPage">
    <Tittle title={'Sobre Mim'} span={'Sobre Mim'} />
    <ImageSection />
    <Tittle title={'Minhas Habilidades'} span={'Minhas Habilidades'} />
    <div className="skillsContainer">
      <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
      <SkillsSection skill={'Typescript'} progress={'60%'} width={'60%'} />
      <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
      <SkillsSection skill={'Node Js'} progress={'70%'} width={'70%'} />
      <SkillsSection skill={'Python'} progress={'40%'} width={'40%'} />
      <SkillsSection skill={'Docker'} progress={'40%'} width={'40%'} />
      <SkillsSection skill={'React Native'} progress={'20%'} width={'20%'} />
      <SkillsSection skill={'Flutter'} progress={'20%'} width={'20%'} />
      <SkillsSection skill={'Ionic'} progress={'20%'} width={'20%'} />
      <SkillsSection skill={'Web Design'} progress={'55%'} width={'55%'} />
      <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
    </div>

    <Tittle title={'Services'} span={'Services'} />
    <div className="servives-container">
      <ServicesSection
        image={design}
        title={'Full Stack Web'}
        text={'Desenvolvedor FullStack.'}
      />
      <ServicesSection
        image={intelligence}
        title={'Mobile'}
        text={'Desenvolvedor mobile.'}
      />
      <ServicesSection
        image={gamedev}
        title={'Intusiasta em Pentest'}
        text={'Pentest.'}
      />
    </div>
  </div>
);

export default AboutPage;
