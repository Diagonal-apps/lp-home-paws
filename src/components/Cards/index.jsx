import React from 'react';
import Image from 'next/image';
import Consults from '@/assets/consultas.svg';
import Vaccines from '@/assets/vacinas.svg';
import Laboratories from '@/assets/laboratoriais.svg';
import Img from '@/assets/imagem.svg';
import Surgery from '@/assets/cirurgias.svg';
import Certificate from '@/assets/atestado.svg';

export const Cards = () => (
  <section id="cards">
    <div className="container">
      <div className="circle">
        <Image src={Consults} alt="Consultas" />
      </div>
      <div className="servicos">
        <h3>Consultas</h3><br />
        <p>Avaliação e acompanhamento do seu pet, aplicação de medicações, orientação e bem estar animal</p>
      </div>
    </div>

    <div className="container">
      <div className="circle">
        <Image src={Vaccines} alt="Vacinas" />
      </div>
      <div className="servicos">
        <h3>Vacinas</h3><br />
        <p>Imunização de doenças com as melhores marcas de vacinas do mercado.</p>
      </div>
    </div>

    <div className="container">
      <div className="circle">
        <Image src={Laboratories} alt="Exames" />
      </div>
      <div className="servicos">
        <h3>Exames laboratoriais</h3><br />
        <p>Coleta de amostras no ambiente familiar.</p>
      </div>
    </div>

    <div className="container">
      <div className="circle">
        <Image src={Img} alt="Imagem" />
      </div>
      <div className="servicos">
        <h3>Exames de Imagem</h3><br />
        <p>Ultrassom e Raio-X realizados em casa, demais exames podem ser realizados em clínicas parceiras.</p>
      </div>
    </div>

    <div className="container">
      <div className="circle">
        <Image src={Surgery} alt="Cirurgias" />
      </div>
      <div className="servicos">
        <h3>Cirurgias</h3><br />
        <p>Encaminhamento para cirurgia e acompanhamento pré e pós operatório.</p>
      </div>
    </div>

    <div className="container">
      <div className="circle">
        <Image src={Certificate} alt="Consultas" />
      </div>
      <div className="servicos">
        <h3>Atestado de Saúde</h3><br />
        <p>Emissão de atestado sanitário completo para garantir uma  viagem tranquila e segura.</p>
      </div>
    </div>
  </section>
);
