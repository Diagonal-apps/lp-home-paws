import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

export const ButtonWhats = () => (
  <>
    <div className="button-container">
      <a href="https://api.whatsapp.com/send?phone=5511996297906" className="pulsating-button" id="meuBotao">
        <i className='fa fa-whatsapp' style={{ fontSize: '24px' }}></i> Agende um atendimento
      </a>
    </div>
    <audio id="meuAudio" src="img/miau.mp3"></audio>
    <div className="button-whats">
      <a href="https://api.whatsapp.com/send?phone=5511996297906" className="pulsating-button-whats">
        <FaWhatsapp size={30} color='#FFFFFF' />
      </a>
    </div>
  </>
);
