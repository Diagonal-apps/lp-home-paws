import React from 'react'
import BannerMobile from '@/assets/banner-mobile.png'
import BannerDSK from '@/assets/img-dsk.png'
import Image from 'next/image'
import Logo from '@/assets/Logo.svg'

export const Banner = () => {
  return (
    <>
      {/* <!-- header --> */}
      <section id="banner">
        <div className="banner-mobile">
          <Image className="banner-mobile-img" src={BannerMobile} alt="Atendimento veterinário no conforto da sua casa" />
        </div>
        <div className="banner-elements">
          <div className="banner-logo">
            <Image src={Logo} alt="logo" className='logo' />
          </div>
          <h1>Atendimento veterinário no <span className="destaque">conforto da sua casa</span></h1>
        </div>
      </section>
      {/* <!-- fim header --> */}

      {/* <!-- header dsk--> */}
      <section id="banner-dsk">
        <div className="banner-dsk">
          <div className="">
            <div className="banner-logo-dsk">
              <Image src={Logo} alt="logo" className='logo'/>
            </div>
            <h1>Atendimento veterinário no <span className="destaque-dsk">conforto da sua casa</span></h1>
            <div className="button-container-dsk">
              <a href="https://api.whatsapp.com/send?phone=5511996297906" className="pulsating-button-dsk" id=""><i className='fa fa-whatsapp' style={{ fontSize: '24px' }}></i> Agendar agora! </a>
            </div>
          </div>
          <div><Image className="img-banner-dsk" src={BannerDSK} alt="Atendimento veterinário no conforto da sua casa" />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path fill="#fff" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,128C672,107,768,85,864,85.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </section>
      {/* <!-- fim header dsk--> */}
      </>
  )
}
