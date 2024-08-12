import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">BusinessTrader</div>
      <nav className="navigation">
        <a href="#about">Sobre</a>
        <a href="#features">Funcionalidades</a>
        <a href="#pricing">Preços</a>
        <a href="#contact">Contato</a>
      </nav>
      <a href="#cta" className="cta">Comece Agora</a>
    </header>
  );
};

export default Header;
