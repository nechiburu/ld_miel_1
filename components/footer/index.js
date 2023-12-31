import React from 'react'
import Link from 'next/link'
import Projects from '../../api/projects'
import Image from 'next/image';
import Logo from '/public/images/logo.png'
import { FaTiktok } from 'react-icons/fa';

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="logo" />
                                </div>
                                <p>Welcome and open yourself to your truest love this year with us! With the Release
                                    Process</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.facebook.com/viajestravelerobo" target="_blank" rel="noopener noreferrer">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.instagram.com/viajestravelero/" target="_blank" rel="noopener noreferrer">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.youtube.com/channel/UCy-hLSNYh_squF5AZZ_B3Fw" target="_blank" rel="noopener noreferrer">
                                            <i className="ti-youtube"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.tiktok.com/@viajestravelero?lang=es" target="_blank" rel="noopener noreferrer">
                                            <FaTiktok />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Información</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/about">Nosotros</Link></li>
                                    <li><Link onClick={ClickHandler} href="/portfolio">Lunas de Miel</Link></li>
                                    {/* <li><Link onClick={ClickHandler} href="/blog">Latest News</Link></li> */}
                                    <li><Link onClick={ClickHandler} href="/contact">Contáctanos</Link></li>
                                    <li><Link onClick={ClickHandler} href="/service">Nuestros Servicios</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contacto </h3>
                                </div>
                                <div className="contact-ft">
                                    <p>Si tienes alguna consulta, sientete libre de comunicarte con nosotros</p>
                                    <ul>
                                        <li><i className="fi flaticon-email"></i>reservas@travelerocorp.com</li>
                                        <li><i className="fi flaticon-phone-call"></i><a href="https://wa.me/59169203758" target="_blank" rel="noopener noreferrer" style={{ color: '#5880a2' }}>+591 69203758</a></li>
                                        <li><i className="fi flaticon-maps-and-flags"></i>Avenida San Martin, SCZ
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3>Instagram</h3>
                                </div>
                                <ul className="d-flex">
                                    {Projects.slice(9, 15).map((project, pitem) => (
                                        <li key={pitem}><img src={project.pimg1} alt="" /></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; 2023 Viajes Travelero. Diseñado por <Link onClick={ClickHandler} href="/">wpOceans</Link>. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;