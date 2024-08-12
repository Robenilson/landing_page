import React from 'react';

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Escolha o Plano Ideal para Você</h2>
      <div className="pricing-grid">
        <div className="pricing-item">
          <h3>Plano Básico</h3>
          <p>R$ 99/mês</p>
          <ul>
            <li>Automatização básica</li>
            <li>Análise de mercado padrão</li>
            <li>Suporte via e-mail</li>
          </ul>
          <a href="#cta" className="cta">Escolher Plano</a>
        </div>
        <div className="pricing-item">
          <h3>Plano Pro</h3>
          <p>R$ 199/mês</p>
          <ul>
            <li>Automatização avançada</li>
            <li>Análise de mercado avançada</li>
            <li>Suporte via e-mail e telefone</li>
          </ul>
          <a href="#cta" className="cta">Escolher Plano</a>
        </div>
        <div className="pricing-item">
          <h3>Plano Premium</h3>
          <p>R$ 299/mês</p>
          <ul>
            <li>Automatização completa</li>
            <li>Análise de mercado premium</li>
            <li>Suporte dedicado 24/7</li>
          </ul>
          <a href="#cta" className="cta">Escolher Plano</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
