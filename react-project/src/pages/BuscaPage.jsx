import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const BuscaPage = () => {
  const [bairro, setBairro] = useState('');
  const [anuncioSelecionado, setAnuncioSelecionado] = useState(null);
  const [resultados, setResultados] = useState([
    {
      id: 1,
      titulo: 'República Mista com 1 vaga',
      descricao: 'Casa com 1 sala/cozinha, 2 banheiros e 3 quartos, garagem e segundo andar, localizado a 3,5km da UFPI. Falar com Tiago',
      bairro: 'Ininga',
      foto: 'public/images/rep1.jpg',
      contatos: { telefone: '(86) 9598-0143', email: 'ftiago@exemplo.com' },
    },
    {
      id: 2,
      titulo: 'República Feminina com 2 vagas',
      descricao: 'Casa com 3 quartos, localizado na rua Olavo Bilac, próximo a UNIFSA. Falar com Maria Rita',
      bairro: 'São Pedro',
      foto: 'public/images/rep3.jpg',
      contatos: { telefone: '(86) 9814-7329', email: 'mariarita@exemplo.com' },
    },
    {
      id: 3,
      titulo: 'República Masculina com 1 vaga',
      descricao: 'Apartamento com 2 quartos, sala/cozinha, localizado no condomínio Vila Bela, a 350m da universidade UNINOVAFAPI. Falar com Wellyson',
      bairro: 'Uruguai',
      foto: 'public/images/rep2.jpg',
      contatos: { telefone: '(86) 9574-2631', email: 'wellyson@exemplo.com' },
    },
  ]);
  const [filtrados, setFiltrados] = useState([]);

  const handleBuscaPorBairro = () => {
    const filtro = resultados.filter((anuncio) =>
      anuncio.bairro.toLowerCase().includes(bairro.toLowerCase())
    );
    setFiltrados(filtro);
  };

  const exibirDetalhes = (anuncio) => {
    setAnuncioSelecionado(anuncio);
  };

  const voltarParaBusca = () => {
    setAnuncioSelecionado(null);
  };

  return (
    <Container>
    {anuncioSelecionado ? (
    <Box mt={4}>
      <Typography variant="h4" align="center" gutterBottom>
        {anuncioSelecionado.titulo}
      </Typography>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={anuncioSelecionado.foto}
            alt={anuncioSelecionado.titulo}
            />
            <CardContent>
            <Typography variant="body1" gutterBottom>
              {anuncioSelecionado.descricao}
            </Typography>
            <Typography variant="body2">
              <strong>Telefone:</strong> {anuncioSelecionado.contatos.telefone}
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong> {anuncioSelecionado.contatos.email}
            </Typography>
              <Button
              variant="contained"
              color="primary"
              onClick={voltarParaBusca}
              sx={{ marginTop: 2 }}
              >
              Voltar
            </Button>
          </CardContent>
        </Card>
        </Box>
      ) : (
        <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Busca de Repúblicas
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap={2}
          mt={3}
          mb={4}
          >
          <TextField
            label="Digite o bairro de interesse"
            variant="outlined"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            fullWidth
            sx={{ maxWidth: 400 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleBuscaPorBairro}
          >
            Buscar
          </Button>
          </Box>
          <Grid container spacing={3}>
            {filtrados.length > 0 ? (
              filtrados.map((anuncio) => (
                <Grid item xs={12} sm={6} md={4} key={anuncio.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={anuncio.foto}
                      alt={anuncio.titulo}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div" gutterBottom>
                        {anuncio.titulo}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {anuncio.descricao}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Bairro:</strong> {anuncio.bairro}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => exibirDetalhes(anuncio)}
                        sx={{ marginTop: 1 }}
                      >
                        Ver Detalhes
                      </Button>
                </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="body1" align="center" color="textSecondary">
                Nenhum resultado encontrado para "{bairro}".
              </Typography>
            )}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default BuscaPage;
