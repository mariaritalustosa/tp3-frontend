import React from 'react';

const AnuncioVaga = () => (
  <div>
    <h2>Anúncio de Vaga</h2>
    <p>Detalhes sobre vagas em repúblicas.</p>
    {/* Aqui você pode adicionado anúncio */}
  </div>
);

const AnuncioPessoal = () => (
  <div>
    <h2>Anúncio Pessoal</h2>
    <p>Detalhes sobre pessoas procurando repúblicas.</p>
    {/* Aqui você pode adicionar os campos ou dados reais do anúncio */}
  </div>
);

const Anuncios = () => {
  return (
    <div>
      <h1>Anúncios</h1>
      <p>Bem-vindo à página de anúncios. Aqui você verá as repúblicas disponíveis.</p>
      
      <div>
        <AnuncioVaga />
        <AnuncioPessoal />
      </div>
    </div>
  );
};

export default Anuncios;
