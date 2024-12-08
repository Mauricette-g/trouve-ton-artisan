import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css';


const Footer = () => {

    return(
        <footer className="footer footer-expand-lg" id="mainFooter">
                <div className = "row m-5" >
                    <div className="col-md-3 mt-5">
                        <h4 className="title-h4"> John Doe </h4>
                        <ul className="list-unstyled"> 
                            <li>40 Rue Laure Diebold </li>
                            <li>69009 Lyon, France </li>
                            <li>Téléphone: 06 20 30 40 50</li>
                        </ul>
                        <div className="row">
                           <div className="col-md-3">
                           <a href="https://api.github.com/users/github-john-doe" target="_blank" rel="noopener noreferrer"><img className="img-fluid rounded" src="./img/github.png" alt="" /> </a>
                           </div>

                           <div className="col-md-3">
                           <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img className="img-fluid rounded" src="./img/instagram.png" alt="" /> </a>
                           </div>

                           <div className="col-md-3">
                           <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><img className="img-fluid rounded" src="./img/linkedin.png" alt="" /> </a>
                           </div>

                        </div>
                    </div>
                    <div className="col-md-3 mt-5">
                        <h4 className="title-h4"> Liens utiles </h4>
                        <ul className="list-styled text-decoration-none"> 
                            <li><Link to="/accueil">Accueil</Link></li>
                            <li><Link to="/accueil">A propos</Link></li>
                            <li><Link to="/service">Services</Link></li>
                            <li><Link to="/service">Me contacter</Link></li>
                            <li><Link to="/service">Mention</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-5">
                        <h4 className="title-h2"> Mes dernières réalisations </h4>
                        <ul className="list-styled text-decoration-none"> 
                            <li><Link to="/realisation">Fresh food</Link></li>
                            <li><Link to="/realisation">Restaurant Akira</Link></li>
                            <li><Link to="/realisation">Me contacter</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-5">
                        <h4 className="title-h4"> Mes derniers articles </h4>
                        <ul className="list-styled text-primary text-decoration-none"> 
                            <li><Link to="/service">Coder son site en HTML/CSS</Link></li>
                            <li><Link to="/service">Vendre ses produits sur le web</Link></li>
                            <li><Link to="/service">Se positionner sur google</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row text-center mx-auto"> 
                    <p className = "copyright text-light"> &copy; Designed by John Doe </p>
                </div>
            

        </footer>

    );
}

export default Footer;