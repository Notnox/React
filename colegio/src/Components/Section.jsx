import './css/section.css'

import React, { Fragment } from 'react'

function Section(){
    return(
        <section className='corpo'>
           <input type="text" className="entrada"/>
           <input type="date" className="entrada"/>
           <input type="text" className="entrada"/>
           <input type="number" className="entrada"/>
           <input type="text" className="entrada"/>
           <input type="number" className="entrada"/>
           <input type="checkbox" className="entrada"/>
           <input type="text" className="entrada"/>
           <input type="checkbox" className="entrada"/>
           <input type="text" className="entrada"/>
           <input type="text" className="entrada"/>
           <input type="text" className="entrada"/>
        </section>
    )
}

export default Section