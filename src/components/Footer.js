import React from 'react';
import "./Footer.css";

const Footer = () => {
    return(
        <div className="main-footer">
            <div className='container'>
                <div className='row'>
                    {/*Columna 1*/}
                    <div className='col'>
                    <img src="./imagenes/leaft.svg"></img>
                    <h4>
                        Mapa Verde!
                    </h4>
                    </div>
                    {/*Columna 2*/}
                    <div className='col'>
                        <ul>
                            <li>
                                2118 Thornridge Cir. Syracuse, Connecticut 35624
                            </li>
                            <li>
                                (808) 555-0111                                
                            </li>
                            <li>
                                mapaverde@gmail.com                                
                            </li>
                        </ul>

                    </div>
                    {/*Columna 3*/}
                    <div id="social">
                        <a href="https://es-la.facebook.com">
                            <button>
                                <img src='./imagenes/facebook.svg'>
                                </img>
                            </button>
                        </a>
                        <a href="https://www.instagram.com/">
                            <button>
                                <img src="./imagenes/instagram.svg">
                                </img>
                            </button>
                        </a>
                        <a href="https://es-la.facebook.com">
                            <button>
                                <img src="./imagenes/youtube.svg">
                                </img>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()} Derechos reservados
                </p>

            </div>
        </div>
    )
}

export default Footer;