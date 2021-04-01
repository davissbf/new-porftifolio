/* eslint-disable react/style-prop-object */
import React from 'react';
import { FaBookReader, FaUniversity, FaDev } from 'react-icons/fa';
import { BsTrophy } from 'react-icons/bs';
import { IoIosConstruct } from 'react-icons/io';
import { TiKeyboard } from 'react-icons/ti';
import { BiDevices } from 'react-icons/bi';
import { AiTwotoneCode } from 'react-icons/ai';
import { MdComputer } from 'react-icons/md';

import HighScool from '../../img/courses/high-scool.jpg';
import Technician from '../../img/courses/technician.jpg';
import DevCourse from '../../img/courses/dev-course.jpg';

import './styles.scss';

const Courses = () => (
  <div className="container">
    <div className="card">
      <a href="https://estacio.br/" target="blank">
        <img src={HighScool} alt="High Scool" />
      </a>
      <div className="content">
        <div className="contentBx">
          <h3>
            HighScool
            <br />
            <span>System Information</span>
          </h3>
        </div>
        <ul className="sci">
          <li>
            <BsTrophy />
          </li>
          <li>
            <FaBookReader />
          </li>
          <li>
            <FaUniversity />
          </li>
        </ul>
      </div>
    </div>
    <div className="card">
      <a
        href="https://www.mundosenai.com.br/cursos/cursos-tecnicos/tecnico-em-informatica-para-internet/"
        target="blank"
      >
        <img src={Technician} alt="Technician" />
      </a>

      <div className="content">
        <div className="contentBx">
          <h3>
            Technician
            <br />
            <span>Senai</span>
          </h3>
        </div>
        <ul className="sci">
          <li>
            <MdComputer />
          </li>
          <li>
            <IoIosConstruct />
          </li>
          <li>
            <TiKeyboard />
          </li>
        </ul>
      </div>
    </div>
    <div className="card">
      <a href="https://devsamurai.com.br/" target="_blank" rel="noreferrer">
        <img src={DevCourse} alt="Dev" />
      </a>
      <div className="content">
        <div className="contentBx">
          <h3>
            FullStack
            <br />
            <span>DevSamurai</span>
          </h3>
        </div>
        <ul className="sci">
          <li>
            <BiDevices />
          </li>
          <li>
            <FaDev />
          </li>
          <li>
            <AiTwotoneCode />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Courses;
