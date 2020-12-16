import React from 'react'

import Menu from './estrutura/Menu'
import Corpo from './estrutura/Corpo'
import Rodape from './estrutura/Rodape'

export default props => {
    return (
        <div>
            <Menu/>
            <Corpo/>
            <Rodape/>
        </div>
    )
}