import './App.css'
import React from 'react'

import Primeiro from './components/Basico/Primeiro'
import ComParametro from './components/Basico/ComParametro'
import ComFilhos from './components/Basico/ComFilhos'
import Repeticao from './components/Basico/Repeticao'
import Condicional from './components/Basico/Condicional'
import CondicionalComIf from './components/Basico/CondicionalComIf'
import Card from './components/layout/Card'

import Pai from './components/Comunicacao/Direta/Pai'

export default props =>
    <div className='App'>
        <Card titulo='#01 Exercício - Primeiro componente'>
            <Primeiro/>
        </Card>
        <Card titulo='#02 Exercício - Com parametros'>
            <ComParametro  titulo='Esse é o titulo' subtitulo='Esse é o sub título' />
            <ComParametro  titulo='Olha' subtitulo='Isso!' />
        </Card>
        <Card titulo='#03 Exercício - Filhos'>
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Antonio</li>
                    <li>Fernanda</li>
                    <li>João</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo='#04 Exercício - Repetição' color='#2874A6'>
            <Repeticao></Repeticao>
        </Card>
        <Card titulo='#05 Exercício - Condicional V1'>
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo='#06 Exercício - Condicional V2' color='#49FF33'>
            <CondicionalComIf numero={12}></CondicionalComIf>
        </Card>
        <Card titulo='#07 Exercício - Comunicação Direta' color='#49FF33'>
            <Pai sobrenome='Leite'/> 
        </Card>
    </div>