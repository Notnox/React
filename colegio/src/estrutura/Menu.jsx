import './menu.css'
import React from 'react'

export default props => {
    return (
        <header className='cabecalho'>
            <div className='logoMarca'>
                <div className='logo'></div>
                <p className='empresa'>Colegio Amorinha</p>
            </div>
            <ul className='opLista'>
                <li className='op'>
                    <div className="busca">
                        <input type="checkbox" id='check'/>
                        <input type="text" id='txtBusca'/>
                        <label htmlFor="check"><div className="lupa"></div></label>
                    </div>
                </li>
                <li className='op'><p className='cadastro'>Cadastro</p></li>
                <li className='op'><p className='cadastro'>Alunos</p></li>
            </ul>
        </header>
    )
}