import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className={this.props.Class}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Button;