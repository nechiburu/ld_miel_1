import React from 'react'
import Link  from 'next/link'
import { FaTiktok } from 'react-icons/fa';

const HeaderTopbar = () => {
    return(	
        <section className="topbar">
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-lg-7 col-md-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-email"></i>loveme@gmail.com</li>
                                <li><i className="fi flaticon-phone-call"></i> +888 (123) 869523</li>
                                <li><i className="fi flaticon-maps-and-flags"></i> New York – 1075 Firs Avenue</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link href="https://www.facebook.com/viajestravelerobo" target="_blank" rel="noopener noreferrer"><i className="fi flaticon-facebook-app-symbol"></i></Link></li>
                                <li><Link href="https://www.instagram.com/viajestravelero/" target="_blank" rel="noopener noreferrer"><i className="fi flaticon-instagram-1"></i></Link></li>
                                <li><Link href="https://www.youtube.com/channel/UCy-hLSNYh_squF5AZZ_B3Fw" target="_blank" rel="noopener noreferrer"><i className="fi flaticon-youtube"></i></Link></li>
                                <li><Link href="https://www.tiktok.com/@viajestravelero?lang=es" target="_blank" rel="noopener noreferrer"><FaTiktok /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderTopbar;