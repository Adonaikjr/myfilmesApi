import styled from "styled-components";

export const Container = styled.header`
    //border:solid green;
    height: 5rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    color:${({theme}) => theme.COLOR.WHITE};
    background:${({theme}) => theme.COLOR.WHITE};
    margin-bottom: 20px;
`

export const Logo = styled.div`
    //border:solid red;
    a{
        background: transparent;
    }
    img{
        height: 4rem;
    }
`
export const Pesquisa = styled.h3`
    color:${({theme}) => theme.COLOR.BLACK};
`
export const Conta = styled.h3`
    color:${({theme}) => theme.COLOR.BLACK};
`

export const MovieSave = styled.h3`
color:black;
`