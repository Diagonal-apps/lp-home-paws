import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/Logo.svg';
import Instagram from '@/assets/insta.svg';
import Facebook from '@/assets/face.svg';
import Whatsapp from '@/assets/whatsapp.svg';

export const Footer = () => (
  <footer id="footer">
    <div className="curved-upper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path fill="#ff7d99" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,128C672,107,768,85,864,85.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
    <div className="footer">
      <Image src={Logo} alt="logo" className='logo'/>
      <div className="social">
        <a href="https://www.instagram.com/cuidadoveterinarionolar/?igshid=MzMyNGUyNmU2YQ%3D%3D"><Image src={Instagram} className='social-img' alt="Instagram" /></a>
        <a href="2"><Image src={Facebook} className='social-img' alt="Facebook" /></a>
        <a href="https://api.whatsapp.com/send?phone=5511996297906"><Image src={Whatsapp} className='social-img' alt="WhatsApp" /></a>
      </div>
    </div>
    <div className="direitos">
      <p>Home Paws&copy - Todos os direitos reservados</p>
      <p>Desenvolvido por: <a href="https://www.diagonalstudio.com.br">Diagonal&reg</a></p>
    </div>
  </footer>
);
