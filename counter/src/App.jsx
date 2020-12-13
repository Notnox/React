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
import Super from './components/Comunicacao/Indireta/Super'
import Input from './components/form/input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default props =>
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className='Cards'>
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
            <Card titulo='#08 Exercício - Comunicação Indireta' color='#49FF33'>
                <Super/> 
            </Card>
            <Card titulo='#09 Exercício - Input' color='#49FF33'>
                <Input/> 
            </Card>
            <Card titulo='#10 Exercício - Contador' color='#49FF33'>
                <Contador passo={10} valor={100}/> 
            </Card>
            <Card titulo='#11 Exercício - MegaSena' color='#49FF33'>
                <Mega qtdeNumero={8}/> 
            </Card>
        </div>
    </div>