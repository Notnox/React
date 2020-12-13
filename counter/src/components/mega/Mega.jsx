import React, { useState } from 'react'

export default props => {
    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0))

    const gerarNumeroNaoContido = (array) => {
        const min = 1
        const max = 6
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero)
            ? gerarNumeroNaoContido(array) : novoNumero
    }

    const gerarNumeros = () => {
        const novoArray = Array(props.qtdeNumero)
            .fill(0)
            .reduce(a => [...a, gerarNumeroNaoContido(a)], [])
            .sort((a, b) => a - b)

        setNumeros(novoArray)
    }

    return (
        <div>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar números</button>
        </div>
    )
}