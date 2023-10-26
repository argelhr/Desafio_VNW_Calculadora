import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

export const Center = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: bottom;
    background-image: url('./assets/foto.png');
    
    display: flex;
    
    align-items: center;
    justify-content: left;
    `;

export const Container = styled.div`
    width: 33%;
    height: 50vh;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px 0;
    border: 1px #333 inset;
    box-shadow: 1px 1px 1px #00f,
    -1px -1px 1px #f00;
    overflow: hidden;
    margin: 0 0 0 30px;
    @media (max-width: 400px) {
        height: 100vh;
        width: 100vw;
        margin: 0;
    }
    `;

export const Display = styled.div`
    width: 100%;
    height: 20%;
    background-color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 10px;
    font-size: 2rem;
    `;

export const Previa = styled.div`
    width: 100%;
    height: 20%;
    background-color: #fff;
    color: #333;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 10px;
    font-size: 1rem;
    `;

export const Teclado = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    `;
export const Numerico = styled.div`
        width: 75%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
        `;
export const Operacoes = styled.div`
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        `;
export const Tecla = styled.button`
    width: 33%;
    height: 25%;
    background-color: #000;
    color: #fff;
    font-size: 2rem;
    border: 1px solid #fff;
    cursor: pointer;
    &:hover {
        background-color: darkblue;
    }
    `;
export const TeclaOperacao = styled.button`
    width: 100%;
    height: 20%;
    background-color: #222;
    color: #fff;
    font-size: 1.5rem;
    border: 1px solid #fff;
    cursor: pointer;
    &:hover {
        background-color: darkorange;
    }
    `;
export const TeclaIgual = styled.button`
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
    font-size: 2rem;
    border: 1px solid #fff;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        color: #000;
    }
    `;

export const TeclaLimpar = styled.button`
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
    font-size: 2rem;
    border: 1px solid #fff;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        color: #000;
    }
    `;

