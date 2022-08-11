import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Article, Movies, Title } from './styled'
import { api } from '../../services/api'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';

function App() {
  const [Filmes, setFilmes] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
      async function LoadingFilmes(){
        const response = await api.get('movie/now_playing', {
          params: {
            api_key: 'e4460b952e33360dd29139d07b79bff9',
            idioma: 'pt-BR',
            page: 1
          }
        }) 
        //console.log(response.data.results.slice(0,10) );

        setFilmes(response.data.results.slice(0,10));
        setLoading(false);
      }

      LoadingFilmes()

  },[]);

const LoadingIcon = styled.h2`color:red;`
  if(loading){
    return(
      <>
      <LoadingIcon>Carregando filmes...</LoadingIcon>
      </>
    )
  }

  return (
    <Container>
      <Header/>
      <Movies>
        {Filmes.map(( filme ) => {
          return (
            <Article key={filme.id} >

              <Title>{filme.title}</Title>

              <img src={ `https://image.tmdb.org/t/p/original/${ filme.poster_path}` } alt={filme.title}/>
                
              <Link to={`/filmes/${filme.id}`}>Acessar</Link>
            </Article>
          )
        } )  }
      </Movies>
    </Container>
  )
}

export default App
