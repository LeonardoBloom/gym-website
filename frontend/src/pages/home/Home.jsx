import React from 'react'

import './Home.css';
import ScrollHandler from '../../utils/ScrollHandler';


// ASSETS FILES
import HeroVideo from '../../assets/videos/hero-pushups.webm'
import FirstBanner from '../../assets/images/home/first-circle-scatter.svg'
import PricesBkg from '../../assets/images/home/second-circle-scatter.svg'
import DuoPose from '../../assets/images/home/standing-and-kneeling-muscular-couple-athlete-dedicated-physique.png'
import Arrows from '../../assets/images/home/white-arrow.png'
import HeroLines from '../../assets/images/hero-lines.png'
import IntroImg from '../../assets/images/home/personal-training-adelaide-gym-guy-bodybuilding.png'
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
        <ScrollHandler />
        <div className='container desktop'>
            <div className='hero'>
                <video className='video-background'autoPlay muted loop>
                    <source src={HeroVideo} type='video/webm' />
                </video>
                <div className='hero-text'>
                    <h3>Bem-Vindo ao</h3>
                    <h1><span style={{ color :'#ffc617' }}>Ginásio</span> <span style={{ color: '#db1717'}}>Play</span></h1>
                </div>
                <div className='hero-lines-right'>
                    <img src={HeroLines} ></img>
                </div>
                <div className='hero-lines-left'>
                    <img src={HeroLines} ></img>
                </div>
            </div>

            <section className='content'>
                <div className='back-images'>
                    <img id='one' src={Arrows}></img>
                </div>
                <div className='first'>
                    <div className='first-caption-text'>
                        <h1> Alcançe os seus objectivos connosco</h1>
                    </div>
                    <div className='first-bkg'>
                        <div className='images'>
                            <img id='fore' src={DuoPose}></img>
                            <img id='back' src={FirstBanner} ></img>
                        </div>
                        <div className='first-text'>
                            <h1>Lorem Ipsum</h1>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non enim nulla. In fringilla diam sed blandit pretium. Cras vel aliquam massa. Integer at convallis risus, et posuere sem. Ut scelerisque, augue vel convallis pellentesque, nibh mi semper justo, vel rhoncus nibh dui quis magna. Sed massa ipsum, dignissim a velit aliquam, suscipit elementum erat. Morbi sed porta augue. Aliquam egestas tempus nisi, in pellentesque ipsum bibendum vitae.</p>
                        </div>
                    </div>
                </div>

            </section>
            <div className='activities'></div>
            <div className='prices'>
                    <img className='bkg-prices' src={PricesBkg}></img>
                    <h1 id="caption">Tabela de Preços</h1>
                    <div className='prices-container'>
                        <div className='pack side-pack'>
                            <h1 className='pack-caption'>Half Day</h1>
                            <div className='pack-details'>
                                <h1>2,500 MT<span>/mês</span></h1>
                                <div className='pack-bar'></div>
                                <div className='pack-hours'>
                                    <h3>Horário:</h3>
                                    <p>Seg á Sex:</p>
                                    <h1>09h00 - 15h00</h1>
                                    <p>Sábados:</p>
                                    <h1>07h00 - 17h00</h1>
                                    <p>Domingos e Feriados:</p>
                                    <h1>07h00 - 15h00</h1>
                                </div>
                            </div>
                        </div>
                        <div className='pack'>
                            <h1 className='pack-caption'>Full Day</h1>
                            <div className='pack-details'>
                                <h1>3,000 MT<span>/mês</span></h1>
                                <div className='pack-bar'></div>
                                <div className='pack-hours'>
                                    <h3>Horário:</h3>
                                    <p>Seg á Sex:</p>
                                    <h1>05h00 - 22h00</h1>
                                    <p>Sábados:</p>
                                    <h1>07h00 - 17h00</h1>
                                    <p>Domingos e Feriados:</p>
                                    <h1>07h00 - 15h00</h1>
                                </div>
                            </div>
                        </div>
                        <div className='pack side-pack'>
                            <h1 className='pack-caption'>Estudante</h1>
                            <div className='pack-details'>
                                <h1>1,750 MT<span>/mês</span></h1>
                                <div className='pack-bar'></div>
                                <div className='pack-hours'>
                                    <h3>Horário:</h3>
                                    <p>Seg á Sex:</p>
                                    <h1>09h00 - 15h00</h1>
                                    <p>Sábados:</p>
                                    <h1>07h00 - 17h00</h1>
                                    <p>Domingos e Feriados:</p>
                                    <h1>07h00 - 15h00</h1>
                                </div>
                            </div>
                            <p className='student-pack-info'>* Até aos 23 anos e com cartão de estudante</p>
                        </div>
                    </div>
                    <h1 id='taxa'> + Taxa de Inscrição: 750 MT</h1>
                    {/* <div className='a-bar'></div> */}
                    <div className='outros-precos'>
                        <h1 id='caption'>Outros Pacotes</h1>
                        <div className='outros-fullday'>
                            <h2>Trimestral Full Day</h2>
                            <h2 style={{color: 'white'}}>8,550 MT</h2>
                        </div>
                            <div className='price-bar'></div>
                        <div className='outros-fullday'>
                            <h2>Semestral Full Day</h2>
                            <h2 style={{color: 'white'}}>16,200 MT</h2>
                        </div>
                            <div className='price-bar'></div>
                            <div className='outros-fullday'>
                            <h2>Annual Full Day</h2>
                            <h2 style={{color: 'white'}}>30,600 MT</h2>
                        </div>

                    </div>
            </div>
            
        </div>

        <Footer />

    </>
  )
}

export default Home