import React from 'react'
import Services from '@/assets/servicos.png'
import ServicesDSK from '@/assets/servicos-dsk.png'
import Image from 'next/image'

export const About = () => {
  return (
    <>
    {/* <!-- sobre --> */}
    <section id="sobre">
        <div className="quem">
          <h2>Quem somos</h2>
          <p>Olá amantes de pets!!
            Somos a Home Paws, uma equipe de profissionais apaixonados por cuidar da saúde e bem estar dos seus peludos no conforto do lar.
            Buscamos criar uma experiência positiva e menos estressante, promovendo saúde segurança e conforto para o seu melhor amigo!
            Deixe a saude do seu pet em boas mãos.
            Entre em contato com a gente!</p>
          <div className="quem-retangulo"></div>
        </div>

        <div className="conheca">
          <div className="conheca-text">
            <h2>Conheça nossos serviços</h2>
            <p>Oferecemos uma variedade de serviços que podem ser realizados no conforto do lar ou em nossas clínicas parceiras quando necessário.</p>
            <div className="conheca-button-container-dsk">
              <a href="#" className="conheca-pulsating-button-dsk" id=""><i className='fa fa-whatsapp' style={{ fontSize: '24px' }}></i> Agende seu atendimento</a>
            </div>
          </div>
          <div className="conhecaimg-container">
            <Image src={Services} className="conhecaimg" alt="Conheça nossos serviços" />
          </div>
          <div className="conhecaimg-container-dsk">
            <Image src={ServicesDSK} className="conhecaimg-dsk conhecaimg-container-dsk" alt="Conheça nossos serviços" />
          </div>
        </div>
      </section>

    </>
  )
}
