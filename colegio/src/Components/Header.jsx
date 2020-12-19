import './css/header.css'
import React, { Component } from 'react'

const Header = () => {
    return (
        <main>
            <header className='cabecalho'>
                <div className='logoMarca'>
                    <div className='logo'></div>
                    <p className='empresa'>Colégio Amorinha</p>
                </div>
            </header>
            <p className='semSuporte'>Sem suporte para esse tamanho de tela</p>
        </main>
    )
}

export default Header