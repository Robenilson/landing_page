import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 BusinessTrader. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#terms">Termos de Serviço</a>
          <a href="#privacy">Política de Privacidade</a>
          <a href="#contact">Contato</a>
        </div>
        <div className="social-media">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
