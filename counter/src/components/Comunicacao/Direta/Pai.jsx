import React from 'react'

import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}>Kaio</Filho>
        <Filho sobrenome={props.sobrenome}>Stefany</Filho>
        <Filho sobrenome='Silva'>Carlos</Filho>
    </div>