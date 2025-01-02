import React, { useState } from 'react';

const BuscaPage = () => {
  const [bairro, setBairro] = useState('');
  const [resultados, setResultados] = useState([
    { id: 1, titulo: 'República Mista com 1 vaga', descricao: 'Apartamento com 1 sala/cozinha, 2 banheiros e 2 quartos, localizado a 3,5km da UFPI', bairro: 'Ininga' },
    { id: 2, titulo: 'República Feminina com 2 vagas', descricao: 'Casa com 3 quartos, localizado na rua Olavo Bilac, próximo a UNIFSA', bairro: 'São Pedro' },
    { id: 3, titulo: 'República Masculina com 1 vaga', descricao: 'Apartamento com 2 quartos', bairro: 'Uruguai' },
  ]);
  const [filtrados, setFiltrados] = useState([]);

  const handleBuscaPorBairro = () => {
    const filtro = resultados.filter((anuncio) =>
      anuncio.bairro.toLowerCase().includes(bairro.toLowerCase())
    );
    setFiltrados(filtro);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1 style={{ textAlign: 'center', color: '#004c99' }}>Busca de Repúblicas</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="Digite o bairro de interesse"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            marginRight: '10px',
            width: '300px',
            borderRadius: '5px',
            border: '2px solidrgb(2, 2, 44)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        />
        <button
          onClick={handleBuscaPorBairro}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#004c99',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Buscar
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#004c99' }}>Resultados</h2>
        {filtrados.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {filtrados.map((anuncio) => (
              <li key={anuncio.id} style={{
                backgroundColor: '#f1f8ff',
                marginBottom: '10px',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}>
                <h3 style={{ color: '#004c99' }}>{anuncio.titulo}</h3>
                <p>{anuncio.descricao}</p>
                <p><strong>Bairro:</strong> {anuncio.bairro}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum resultado encontrado para "{bairro}".</p>
        )}
      </div>
    </div>
  );
};

export default BuscaPage;
