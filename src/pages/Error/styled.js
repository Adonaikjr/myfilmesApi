import styled from "styled-components";

export const Container = styled.div`
    color:white;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 30px;
    a{
        padding:12px;
        //border: solid;
        border-radius: 12px;
        background: ${({theme}) => theme.COLOR.PURPLE};
        text-decoration: none;
        color:${({theme}) => theme.COLOR.WHITE};
    }
    span{
        font-size: 50px;
    }
`