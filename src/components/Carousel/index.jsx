import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Mission from '@/assets/missao.png';
import Vision from '@/assets/visao.png';
import Values from '@/assets/valores.png';

export const Carousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section  id="carrossel">
        <Slider {...settings}>
          <div className="carr-space">
            <div className="carr">
              <div className="carrgrid">
                <div>
                  <h2>Missão</h2>
                  <div className="retangulo"></div>
                  <p>Somos apaixonados por animais e acreditamos que o atendimento personalizado no conforto do lar é essencial para promover a saúde e o bem-estar dos nossos pacientes de quatro patas.</p>
                  <p>Com nossos serviços domiciliares conseguimos atender às necessidades específicas dos animais e de seus responsáveis, trazendo uma série de benefícios significativos.</p>
                </div>
                <div className="conhecaimg-container">
                  <Image src={Mission} alt="missão" />
                </div>
              </div>
            </div>
          </div>
          <div className="carr-space">
            <div className="carr">
              <div className="carrgrid">
                <div>
                  <h2>Visão</h2>
                  <div className="retangulo"></div>
                  <p>Ser reconhecida pela excelência em serviços veterinários em domicílio, oferecendo uma experiência excepcional de atendimento, a fim de proporcionar uma vida saudável e plena para nossos pacientes.
                  </p>
                </div>
                <div className="conhecaimg-container">
                  <Image src={Vision} alt="visão" />
                </div>
              </div>
            </div>
          </div>
          <div className="carr-space">
            <div className="carr">
              <div className="carrgrid">
                <div>
                  <h2>Valores</h2>
                  <div className="retangulo"></div>
                  <ul>
                    <li>Paixão pelos animais;</li>
                    <li>Ética, empatia e honestidade;</li>
                    <li>Qualificação constante;</li>
                    <li>Integridade e respeito.</li>
                  </ul>
                </div>
                <div className="conhecaimg-container">
                  <Image src={Values} alt="valores" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      <section id="carrossel-dsk">
        <div className="carr-dsk">
          <div className="carrgrid">
            <div>
              <h2>Missão</h2>
              <div className="retangulo"></div>
              <p>Somos apaixonados por animais e acreditamos que o atendimento personalizado no conforto do lar é essencial para promover a saúde e o bem-estar dos nossos pacientes de quatro patas.<br /><br />
                Com nossos serviços domiciliares conseguimos atender às necessidades específicas dos animais e de seus responsáveis, trazendo uma série de benefícios significativos.</p>
            </div>
            <div className="conhecaimg-container-dsk">
              <Image src={Mission} alt="missão" />
            </div>
          </div>
        </div>
        <div className="carr-dsk">
          <div className="carrgrid">
            <div>
              <h2>Visão</h2>
              <div className="retangulo"></div>
              <p>Ser reconhecida pela excelência em serviços veterinários em domicílio, oferecendo uma experiência excepcional de atendimento, a fim de proporcionar uma vida saudável e plena para nossos pacientes.
              </p>
            </div>
            <div className="conhecaimg-container-dsk">
              <Image src={Vision} alt="visão" />
            </div>
          </div>
        </div>
        <div className="carr-dsk">
          <div className="carrgrid">
            <div>
              <h2>Valores</h2>
              <div className="retangulo"></div>
              <ul>
                <li>Paixão pelos animais;</li>
                <li>Ética, empatia e honestidade;</li>
                <li>Qualificação constante;</li>
                <li>Integridade e respeito.</li>
              </ul>
            </div>
            <div className="conhecaimg-container-dsk">
              <Image src={Values} alt="valores" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
