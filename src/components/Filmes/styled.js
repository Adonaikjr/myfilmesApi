import { BsBorder } from "react-icons/bs";
import styled from "styled-components";

export const Container = styled.div`

`

export const Title = styled.h1`
//border: solid;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
width: 100%;

`
export const Text = styled.p`
display: flex;
//border: solid yellow;
flex-wrap: wrap;
padding: 12px;
`
export const ImageBack = styled.div`
//border: solid;

    img{
      //  border: solid red;
        width: 33rem;
height: 25rem;
    }
`
export const Content = styled.div`
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
height: 70vh;
//border: solid red;
`

export const BoxA = styled.div`
//border: solid green;
display:flex;
flex-direction: column;
justify-content: space-around;
flex-wrap: wrap;
width: 45rem;
height: 100%;

`
export const SubTitle = styled.h3`

`

export const BsJustify = styled.div`
    //border:solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 16px;

`
export const Back = styled.div`
    height: 5rem;
  //  border: solid;
    margin-bottom: 12px;
    font-size: 30px;
    display: flex;
    align-items: center;
    a{  
        color: ${({theme}) => theme.COLOR.WHITE};
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`