// TODO: Reduce size on scroll

import React from 'react'
// index.js or App.js



import './Navbar.css'
import { FiPhone } from 'react-icons/fi';
import { PiHouseBold } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({isScrolled}) => {
    console.log('NavBar isScrolled:', isScrolled);

    const navScroll = isScrolled ? 'nav-scroll' : '' ;
    const scrolled = navScroll ? 'scrolled' : ''

    let LoggedIn = false;
    // LoggedIn = true;

    return (
        <>
        <div className='top-bar custom-scrollbar'>
            <div className='contact'>
                <p className='hours'>
                    <span className='top-bar-icon'><FaRegClock size={17} /></span>
                    <span className='clock-hours'>
                        <b>Segunda á Sexta</b>: 05:00 - 22:00 ● <b>Sábado</b>: 07:00 - 17:00 ● <b>Domingo</b>: 07:00 - 15:00
                    </span>
                </p>
                <p className='address'>
                    <span className='top-bar-icon'><PiHouseBold size={17} /></span>
                    <span className='address-text'>
                        Rua da Imprensa, Maputo Shopping Center, 3º Andar
                    </span>
                </p>
                <p className='phone'> 
                    <span className='top-bar-icon'><FiPhone size={17} /></span>
                    <span className='phone-number'> +258 86 824 0147 / 86 009 4400 </span>
                </p>
            </div>
        </div>
        <div className={`navbar ${navScroll}`}>
            <div className='navbar-container'>
                <div className={`logo ${scrolled}`}>
                    <Link ><img src={logo} alt='gym logo'></img></Link>
                </div>
                <div className='features'>
                    {/* INICIO */}
                    <div className={`dropdown dropdown-hover`}>
                        <Link to=''><div tabIndex={0} role="button" className="membership-nav btn m-1" style={{}} >Início</div></Link>
                        {/* <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><Link>Inscreva-se</a></li>
                            <li><a>Gerir a sua Conta</a></li>
                        </ul> */}
                    </div>
                    {/* Membership */}
                    <div className="dropdown dropdown-hover">
                        <Link to=''><div tabIndex={0} role="button" className="membership-nav btn m-1">Inscrição</div></Link>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><Link>Inscreva-se</Link></li>
                            <li><Link>Gerir a sua Conta</Link></li>
                            <li><Link>Verificar Validade</Link></li>
                        </ul>
                    </div>
                    {/* Schedules */}
                    <div className="dropdown dropdown-hover">
                        <Link to=''><div tabIndex={0} role="button" className="membership-nav btn m-1">Horários das Aulas</div></Link>
                        {/* <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><Link>Inscreva-se</a></li>
                            <li><a>Gerir a sua Conta</a></li>
                        </ul> */}
                    </div>
                    {/* Personal Training */}
                    <div className="dropdown dropdown-hover">
                        <Link to=''><div tabIndex={0} role="button" className="membership-nav btn m-1">Personal Trainer</div></Link>
                        {/* <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2">
                            <li><a>Inscreva-se</a></li>
                            <li><a>Gerir a sua Conta</a></li>
                        </ul> */}
                    </div>
                    {/* Facilities */}
                    <div className="dropdown dropdown-hover">
                        <Link to=''><div tabIndex={0} role="button" className="membership-nav btn m-1">Instalações</div></Link>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><Link>PLAY Maputo</Link></li>
                            <li><Link>PLAY Matola</Link></li>
                        </ul>
                    </div>
                    {/* About */}
                    <div className="dropdown dropdown-hover">
                        <Link to=''><div tabIndex={0} role="button" className="membership-nav btn m-1">Sobre Nós</div></Link>
                        {/* <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2">
                            <li><a>Inscreva-se</a></li>
                            <li><a>Gerir a sua Conta</a></li>
                        </ul> */}
                    </div>
                </div>
            <div className='login-signup'>
                {LoggedIn ? (
                    <div className='auth-exit'>
                        <Link to=''>
                            <div className='logout-button'>
                                Log Out
                            </div>
                        </Link>
                    </div>
                    
                ) : (
                    <div className='auth-enter'>
                        <Link to=''>
                            <div className='login-button'>
                                Aceder a conta
                            </div>
                        </Link>
                        {/* <Link to=''>
                            <div className='signup-button'>
                                
                            </div>
                        </Link> */}
                    </div>
                )}
            </div>
            </div>
            <div className='support'></div>
        </div>
        </>
    )
}

export default Navbar



// TODO: Reduce size on scroll