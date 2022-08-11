import { Link } from "react-router-dom"
import { Container } from "./styled"

export function Error(){
    return(
        <Container>
            <h1>404 OoOoPss...</h1>
            <h3>A <span>pagina</span> que voce esta tentando acessar<span> nao existe</span></h3>
            <Link to='/'>Voltar para os filmes</Link>
        </Container>
    )
}