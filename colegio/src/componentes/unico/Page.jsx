import React, { Component } from 'react';

class Page extends Component {

    render (){
        return (
            <div className="corpo">
                <h1>Escola Amorinha</h1>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        ) 
    }
}

export default Page;