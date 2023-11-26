import Image from 'next/image'
import { FaWhatsapp } from "react-icons/fa";
import Logo from '@/assets/Logo.svg'
import BannerMobile from '@/assets/banner-mobile.png'
import BannerDSK from '@/assets/img-dsk.png'
import Services from '@/assets/servicos.png'
import ServicesDSK from '@/assets/servicos-dsk.png'
import Consults from '@/assets/consultas.svg'
import Vaccines from '@/assets/vacinas.svg'
import Laboratories from '@/assets/laboratoriais.svg'
import Img from '@/assets/imagem.svg'
import Surgery from '@/assets/cirurgias.svg'
import Certificate from '@/assets/atestado.svg'
import Mission from '@/assets/missao.png'
import Vision from '@/assets/visao.png'
import Values from '@/assets/valores.png'
import Instagram from '@/assets/insta.svg'
import Facebook from '@/assets/face.svg'
import Whatsapp from '@/assets/whatsapp.svg'

export default function Home() {

  const handleContact = async () => {
    var wpp = '5511996297906';
    wpp = wpp.replace(/\D/g, '');

    var urlWhatsApp = 'https://api.whatsapp.com/send?phone=' + wpp;

    window.location.href = urlWhatsApp;
  }

  return (
    <main className="container-test">
      {/* <!-- botao --> */}
      <div className="button-container">
        <a href="https://api.whatsapp.com/send?phone=5511996297906" class="pulsating-button" id="meuBotao"><i class='fa fa-whatsapp' style={{ fontSize: '24px' }}></i>Agende um atendimento</a>
      </div>
      <audio id="meuAudio" src="img/miau.mp3"></audio>
      {/* <!-- fim botao --> */}

      {/* <!-- botao --> */}
      <div className="button-whats">
        <a href="https://api.whatsapp.com/send?phone=5511996297906" className="pulsating-button-whats" id=""><i className='fa fa-whatsapp' style={{ fontSize: '32px' }}><FaWhatsapp size={30} color='#FFFFFF' /></i></a>
      </div>
      {/* <!-- fim botao --> */}

      {/* <!-- header --> */}
      <section id="banner">
        <div className="banner-mobile">
          <Image className="banner-mobile-img" src={BannerMobile} alt="Atendimento veterinário no conforto da sua casa" />
        </div>
        <div className="banner-elements">
          <div className="banner-logo">
            <Image src={Logo} alt="logo" />
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
              <Image src={Logo} alt="logo" />
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

      {/* <!-- sobre --> */}
      <section id="sobre">
        <div className="quem">
          <h2>Quem somos</h2>
          <p>Olá, amantes de pets! Somos a Home Paws, uma equipe de profissionais apaixonados por cuidar da saúde e bem-estar dos seus peludos no conforto do lar. Buscamos criar uma experiência positiva e menos estressante, promovendo saúde segurança e conforto para o seu melhor amigo! Deixe a saúde do seu pet em boas mãos. Entre em contato com a gente!</p>
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
      {/* <!-- fim sobre --> */}

      {/* <!-- cards --> */}
      <section id="cards">

        <div className="container">
          <div className="circle">
            <Image src={Consults} alt="Consultas" />
          </div>
          <div className="servicos">
            <h3>Consultas</h3><br />
            <p>Avaliação e acompanhamento do seu pet, aplicação de medicações, orientação e bem-estar animal</p>
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
      <div className="chamada-desk">
        <h1>A saúde do <span className="destaque-dsk">seu pet</span> não pode esperar!</h1>
        <div className="chamada-button-container-dsk">
          <a href="https://api.whatsapp.com/send?phone=5511996297906" className="chamada-pulsating-button-dsk" id=""><i className='fa fa-whatsapp' style={{ fontSize: '24px' }}></i> Agendar agora!</a>
        </div>
      </div>
      {/* <!-- fim cards --> */}

      {/* <!-- carrosel --> */}
      <section id="carrossel">
        <div className="slider">

          <div className="carr">
            <div className="carrgrid">
              <div>
                <h2>Missão</h2>
                <div className="retangulo"></div>
                <p>Somos apaixonados por animais e acreditamos que o atendimento personalizado no conforto do lar é essencial para promover a saúde e o bem-estar dos nossos pacientes de quatro patas.<br /><br />
                  Com nossos serviços domiciliares conseguimos atender às necessidades específicas dos animais e de seus responsáveis, trazendo uma série de benefícios significativos.</p>
              </div>
              <div className="conhecaimg-container">
                <Image src={Mission} alt="missão" />
              </div>
            </div>
          </div>


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
      </section>
      {/* <!-- fim carrosel --> */}

      {/* <!-- carrosel desktop --> */}
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
              <Image src={Vision} alt="missão" />
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
      {/* <!-- fim carrosel desktop --> */}

      {/* <!-- footer --> */}
      <footer id="footer">
        <div className="curved-upper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#ff7d99" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,128C672,107,768,85,864,85.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="footer">
          <Image src={Logo} alt="logo" />
          <div className="social">
            <a href="1"><Image src={Instagram} className='social-img' alt="Instagram" /></a>
            <a href="2"><Image src={Facebook} className='social-img' alt="Facebook" /></a>
            <a href="3"><Image src={Whatsapp} className='social-img' alt="WhatsApp" /></a>
          </div>
        </div>
        <div className="direitos">
          <p>Home Paws&copy - Todos os direitos reservados</p>
          <p>Desenvolvido por: <a href="https://www.diagonalstudio.com.br">Diagonal&reg</a></p>
        </div>
      </footer>
      {/* <!-- fim footer --> */}
    </main >
  )
}
