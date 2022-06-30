import React from 'react';

export default class Mast extends React.Component {

    state = {
        mast: 0
    }

    mastChoosing = () => {
        var e = document.getElementById("mastChoose");
        var choosedMast = e.options[e.selectedIndex].value;
        console.log(choosedMast)
        if (choosedMast === '2') {
            this.setState({
                mast: this.state.mast + 300
            })
  
        } else if (choosedMast === '3') {
            this.setState({
                mast: this.state.mast + 500
            })
        }
        console.log(this.state.mast)
        this.props.mastCalculate(this.state.mast)
    }

    render () {
        return (
            <select id='mastChoose' onChange={this.mastChoosing}>
                <option>Стрела</option>
                <option value='1'>Дуплекс без свободного ход</option>
                <option value='2'>Дуплекс со свободным ходом</option>
                <option value='3'>Триплекс со свободным ходом</option>
            </select>
        )
    }
}