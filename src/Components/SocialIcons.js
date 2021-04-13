import React from 'react';
import { SiGithub } from 'react-icons/si';
import { GrLinkedin } from 'react-icons/gr';
import { MdWeb } from 'react-icons/md';

const SocialIcons = () => (
  <div className="social-icons">
    <a
      className="link-item"
      href="https://github.com/davissbf"
      target="_blank"
      rel="noreferrer"
    >
      <i>
        <SiGithub />
      </i>
    </a>
    <a
      className="link-item"
      href="https://www.linkedin.com/in/davi-souza-667497195/"
      target="_blank"
      rel="noreferrer"
    >
      <i>
        <GrLinkedin />
      </i>
    </a>
    <a
      className="link-item"
      href="https://davissbf.github.io/myportifolioreact/"
      target="_blank"
      rel="noreferrer"
    >
      <i>
        <MdWeb />
      </i>
    </a>
  </div>
);

export default SocialIcons;
