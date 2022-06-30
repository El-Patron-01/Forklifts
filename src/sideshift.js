import './comon.css';

import React from 'react';

export default class Sideshift extends React.Component {

    
    state = {
        sideshift: false
    }

    sideshiftClick = () => {
        this.setState({
            sideshift: !this.state.sideshift
        })
        this.props.sideshiftCalculate(this.state.sideshift)
    }



    render () {


        return (
            <div className='listElement'>
                <input type='checkbox' onClick={this.sideshiftClick}></input>
                <div>Сайдшифт</div>
            </div>
            
        )
    }
}