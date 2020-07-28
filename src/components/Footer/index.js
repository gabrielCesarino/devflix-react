import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/gabrielCesarino">
          Gabriel Cesarino
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
