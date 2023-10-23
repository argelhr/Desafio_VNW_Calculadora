import { useState } from 'react'
import { GlobalStyle, Container, Display, Tecla, Teclado, Numerico, Operacoes, TeclaOperacao, Previa, Center } from './Styles'

const Calculadora = () => {

    const numeros = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']
    const operacoes = ['Del', '/', '*', '-', '+']

    const [display, setDisplay] = useState('0')
    const [previa, setPrevia] = useState(0)

    const mudaDisplay = (e) => {


        if (e.target.innerHTML === 'Del') {
            if (display.length === 1) {
                setDisplay('0')
                return
            }
            setDisplay(display.slice(0, -1))
            return
        }

        if (display.length === 1 && display === '0')
            setDisplay(e.target.innerHTML)
        else
            setDisplay(display + e.target.innerHTML)

    }

    const calcula = () => {

        let texto = display
        let partes = []
        let parte = ''

        for (let i = 0; i < texto.length; i++) {
            let char = texto[i];
            if (char === '+' || char === '-' || char === '*' || char === '/') {
                if (parte !== "") {
                    partes.push(parte)
                }
                partes.push(char)
                parte = ""
            } else {
                parte += char;
            }
        }

        partes.push(parte)

        for (let i = 0; i < partes.length; i++) {
            if(verificaPontos(partes[i]))
                return
            if (partes[i] === '+') {
                console.log('mais')
                let valor = parseFloat(partes[i - 1]) + parseFloat(partes[i + 1])
                partes.shift()
                partes.shift()
                partes.shift()
                partes.unshift(valor)
                i=0
            }
            if (partes[i] === '-') {
                console.log('menos')
                console.log(partes)
                let valor = parseFloat(partes[i - 1]) - parseFloat(partes[i + 1])
                partes.shift()
                partes.shift()
                partes.shift()
                partes.unshift(valor)
                i=0
            }
            if (partes[i] === '*') {
                console.log('vezes')
                let valor = parseFloat(partes[i - 1]) * parseFloat(partes[i + 1])
                partes.shift()
                partes.shift()
                partes.shift()
                partes.unshift(valor)
                i=0
            }
            if (partes[i] === '/') {
                console.log('dividido')
                let valor = parseFloat(partes[i - 1]) / parseFloat(partes[i + 1])
                partes.shift()
                partes.shift()
                partes.shift()
                partes.unshift(valor)
                i=0
            }
            setPrevia(isNaN(partes[0]) ? 'Erro' : partes[0])
        }
    }

    const verificaPontos = (parte) => {
        let pontos = 0
        for (let i = 0; i < parte.length; i++) {
            if(parte[i] === '.')
                pontos++
        }
        if(pontos > 1){
            setPrevia('Erro')
            return true
        }
        return false
    }

    const zerar = () => {
        setDisplay('0')
        setPrevia('0')
    }

    return (
        <>
            <GlobalStyle />
            <Center>
                <Container>

                    <Previa><p>{previa}</p></Previa>
                    <Display><p>{display}</p></Display>

                    <Teclado>
                        <Numerico>
                            {numeros.map((numero, index) => <Tecla key={index} onClick={mudaDisplay}>{numero}</Tecla>)}
                            <Tecla key={12} onClick={zerar}>C</Tecla>
                        </Numerico>
                        <Operacoes>
                            {operacoes.map((operacao, index) => <TeclaOperacao key={index} onClick={mudaDisplay}>{operacao}</TeclaOperacao>)}
                            <TeclaOperacao key={5} onClick={calcula}>=</TeclaOperacao>
                        </Operacoes>
                    </Teclado>
                </Container>
            </Center>
        </>
    )
}

export default Calculadora