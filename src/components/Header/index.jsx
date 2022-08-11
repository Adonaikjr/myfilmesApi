import { Container, Logo, Pesquisa, Conta, MovieSave } from "./styled";
import logo from '../../assets/myfilmes.png'
import { Link } from "react-router-dom";

export function Header(){
    return(
        <Container>
            <MovieSave>Filmes Salvos</MovieSave>
            <Pesquisa>pesquisa</Pesquisa>
            <Conta>login/create</Conta>
            <Logo><Link to='/'><img src={logo}/></Link></Logo>
        </Container>
    )
}