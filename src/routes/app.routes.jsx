import { Routes, Route } from "react-router-dom";
import { Filmes } from "../components/Filmes";
import { Error } from "../pages/Error";
import  App  from '../pages/home/App'
export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={ <App/> }/>
            <Route path='/filmes/:id' element={ <Filmes/> } />

            <Route path='*' element={ <Error/> } />
        </Routes>
    )
}