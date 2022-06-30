import './comon.css';

import React from 'react';

export default class Paint extends React.Component {

    state = {
        paint: false
    }

    paintClick = () => {
        this.setState({
            paint: !this.state.paint
        })
        console.log(this.state.paint)
        this.props.paintCalculate(this.state.paint)
    }

    render () {
        return (
            <div className='listElement'>
                <input type='checkbox' onClick={this.paintClick}></input>
                <div>Покраска</div>
            </div>
        )
    }
}