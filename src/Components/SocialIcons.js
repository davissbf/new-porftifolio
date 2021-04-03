import React from 'react';
import { SiGithub } from 'react-icons/si';
import { GrLinkedin } from 'react-icons/gr';
import { FaShoppingBag } from 'react-icons/fa';

const SocialIcons = () => (
  <div className="social-icons">
    <a
      className="link-item"
      href="https://github.com/davissbf"
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <SiGithub />
      </span>
    </a>
    <a
      className="link-item"
      href="https://www.linkedin.com/in/davi-souza-667497195/"
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <GrLinkedin />
      </span>
    </a>
    <a
      className="link-item"
      href="https://davissbf.github.io/myportifolioreact/"
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <FaShoppingBag />
      </span>
    </a>
  </div>
);

export default SocialIcons;
