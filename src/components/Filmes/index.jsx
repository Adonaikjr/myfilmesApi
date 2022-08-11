import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../services/api';
import { Header } from '../Header';
import { Container, Title, Text, ImageBack, Content ,BoxA, SubTitle, BsJustify, Back } from './styled'
import { BsHeartFill } from 'react-icons/bs'
import { IoMdArrowBack } from 'react-icons/io'

export function Filmes(){
    const { id } = useParams();
    const [ filme, setFilme ] = useState([]);
    const [ loading, setLoading ] = useState();

    useEffect( () => {
        async function loadfilme(){
            api.get(`/movie/${id}`, { 
                params:{
                    api_key: 'e4460b952e33360dd29139d07b79bff9',
                    idioma: 'pt-BR'
                }
             })

                .then(( response )=>{
                    setFilme(response.data)
                    setLoading(false)
                } )

                    .catch(() => {
                        console.log('FILME NAO ENCONTRADO')
                    } )
        }
     
        loadfilme();
        return() => { 
            console.log('COMPONENTE FOI DESMONTADO') 
    }  
         
    }, [] )

if(loading){
    return(
        <div>
            <h1>Carregando details...</h1>
        </div>
    )
}

    return(
        <Container>
            <Header/>
            <Back>
                <Link to='/'> <IoMdArrowBack size={30} /> Voltar</Link>
            </Back>
            <Title>{filme.title}</Title>
            <Content>
                <ImageBack>
                    <img src={ `https://image.tmdb.org/t/p/original/${ filme.backdrop_path}` } alt={filme.title}/>
                </ImageBack>
                <BoxA>
                    <BsJustify>
                        <p> Lancado em: {filme.release_date}</p>
                        <p>Curtir<BsHeartFill color='red' size={20}/></p>
                    </BsJustify>
                    <Text>{filme.popularity} pessoas curtiram isso</Text>
                    <Title>Sinopse</Title>
                    <Text>{filme.overview}</Text>
                </BoxA>
            </Content>
        </Container>
    )
}