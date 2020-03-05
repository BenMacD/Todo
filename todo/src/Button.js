import React from 'react';
import './App.css';

class Button extends React.Component{
    render() {
        const {onClick, className, children} = this.props;

        return(
            <button className={className} onClick={onClick}>
                {children}
            </button>
        )
    }
}

export default Button;