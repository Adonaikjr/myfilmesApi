import styled from "styled-components";

export const Container = styled.div`

`
export const Article = styled.article`
max-width: 80%;
//border: solid ${({theme}) => theme.COLOR.PURPLE} 1px;
box-shadow:  0em 0em 0.5rem ${({theme}) => theme.COLOR.WHITE};
display: flex;
flex-direction: column;
align-items: center;
border-radius: 5px;
img{
    border-radius: 12px;
    margin-top: 10px;
    height: 26rem;
    width: auto;
}
a{
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    background:${({theme}) => theme.COLOR.PURPLE};
    font-size: 20px;
    color: white;
    margin-top:-10px;
}
`

export const Movies = styled.div`
    display: flex;
    gap:30px;
    flex-wrap:wrap;
    justify-content: center;
 //   border: solid;
`

export const Title = styled.h2`
  color:${({theme}) => theme.COLOR.WHITE};
  text-shadow: 0px 01px 10px white;
  text-align: center;
  width: 15rem;
  height: 5rem;
  //border: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-top: 5px;

`