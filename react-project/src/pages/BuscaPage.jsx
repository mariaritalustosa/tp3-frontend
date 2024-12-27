import React, { useState } from 'react';

const BuscaPage = () => {
  const [bairro, setBairro] = useState('');
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBuscaPorBairro = () => {
    setLoading(true);
    const dados = [
      { id: 1, titulo: 'República no Centro', descricao: 'Descrição sobre a república 1' },
      { id: 2, titulo: 'República na Zona Norte', descricao: 'Descrição sobre a república 2' },
    ];
    setResultados(dados);
    setLoading(false);
  };

  return (
    <div className="pagina-de-busca">
      <div className="barra-de-pesquisa">
        <input
          type="text"
          placeholder="Digite o bairro de interesse"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
        <button onClick={handleBuscaPorBairro} disabled={loading}>
          Buscar
        </button>
      </div>

      {loading && <p>Carregando...</p>}

      <div className="resultados">
        <h2>Resultados de Busca</h2>
        <ul>
          {resultados.map((anuncio) => (
            <li key={anuncio.id}>
              <h3>{anuncio.titulo}</h3>
              <p>{anuncio.descricao}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BuscaPage;
