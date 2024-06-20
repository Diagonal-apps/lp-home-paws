import React from 'react';

export const CallToAction = () => (
  <div className="chamada-desk">
    <h1>A saúde do <span className="destaque-dsk">seu pet</span> não pode esperar!</h1>
    <div className="chamada-button-container-dsk">
      <a href="https://api.whatsapp.com/send?phone=5511996297906" className="chamada-pulsating-button-dsk">
        <i className='fa fa-whatsapp' style={{ fontSize: '24px' }}></i> Agendar agora!
      </a>
    </div>
  </div>
);
