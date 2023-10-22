import { useEffect, useState } from 'react'
import { GlobalStyle, Container, Display, Tecla, Teclado, Numerico, Operacoes, TeclaOperacao, Previa, Center } from './Styles'

const Calculadora = () => {

    const numeros = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']
    const operacoes = ['Del', '/', '*', '-', '+', '=']

    const [display, setDisplay] = useState('0')
    const [previa, setPrevia] = useState(0)
    const [acumulador, setAcumulador] = useState(0)
    const [operacao, setOperacao] = useState('')

    const mudaDisplay = (e) => {

        if (display.includes('.') && e.target.innerHTML === '.') {
            return
        }

        if (display.length === 1 && display === '0')
            setDisplay(e.target.innerHTML)
        else
            setDisplay(display + e.target.innerHTML)

    }

    const mudaOperacao = (e) => {

        fazOperacao(e.target.innerHTML)
        setOperacao(e.target.innerHTML)
    }

    const fazOperacao = (e) => {

        if (e === '+') {
            setPrevia((parseFloat(acumulador) + parseFloat(display)).toString())
            setAcumulador((parseFloat(acumulador) + parseFloat(display)).toString())
            setDisplay('0')
            return
        }

        if (e === '-') {
            setPrevia((parseFloat(acumulador) - parseFloat(display)).toString())
            setAcumulador((parseFloat(acumulador) - parseFloat(display)).toString())
            setDisplay('0')
            return
        }

        if (e === '*') {
            setPrevia((parseFloat(acumulador) * parseFloat(display)).toString())
            setAcumulador((parseFloat(acumulador) * parseFloat(display)).toString())
            setDisplay('0')
            return
        }

        if (e === '/') {
            if (display === '0') {
                alert('Não é possível dividir por zero')
                return
            }
            setPrevia((parseFloat(acumulador) / parseFloat(display)).toString())
            setAcumulador((parseFloat(acumulador) / parseFloat(display)).toString())
            setDisplay('0')
            return
        }
        if (e === '=') {
            setPrevia('0')
            setAcumulador(0)
            setDisplay(acumulador.toString())
            return
        }
    }

    const zerar = () => {
        setOperacao('')
        setDisplay('0')
        setPrevia('0')
        setAcumulador(0)
    }

    return (
        <>
            <GlobalStyle />

            <Center>

                <Container>

                    <Previa>
                        <p>{previa}</p>
                    </Previa>

                    <Display>
                        <p>{display}</p>
                    </Display>

                    <Teclado>
                        <Numerico>
                            {numeros.map((numero, index) => <Tecla key={index} onClick={mudaDisplay}>{numero}</Tecla>)}
                            <Tecla key={12} onClick={zerar}>C</Tecla>
                        </Numerico>

                        <Operacoes>
                            {operacoes.map((operacao, index) => <TeclaOperacao key={index} onClick={mudaOperacao}>{operacao}</TeclaOperacao>)}
                        </Operacoes>
                    </Teclado>


                </Container>
            </Center>
        </>
    )
}

export default Calculadora