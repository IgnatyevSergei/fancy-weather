import React, {Component} from 'react';
import './container.css'

class Container extends Component {
    render() {
        return (
            <div className='container'>
                {this.props.children}
            </div>
        );
    }
}

export default Container;