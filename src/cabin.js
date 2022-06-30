import './comon.css';

import React from 'react';

export default class Cabin extends React.Component {

    state = {
        cabin: false
    }

    cabinClick = () => {
        this.setState({
            cabin: !this.state.cabin
        })
        this.props.cabinCalculate(this.state.cabin)
    }

    render () {
        return (
            <div className='listElement'>
                <input type='checkbox' onClick={this.cabinClick}></input>
                <div>Наличие кабины</div>
            </div>
        )
    }
}