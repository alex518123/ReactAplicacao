import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom
import './styles.css';
import Logo from '../../assets/OIP.jpg';

function Footer() {
    return (
        <footer>
            <img style={{ objectFit: 'contain' }} id="logo2" src={Logo} alt="logo"/>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Alexander</span>
            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contato">
                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/fotos">
                        <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/comentarios">
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
