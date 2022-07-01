import React from 'react';

export default class Mast extends React.Component {

    state = {
        mast: 0
    }

    mastChoosing = (e) => {
        e.preventDefault();
        this.setState({
            mast: e.target.value
        })
        console.log(this.state.mast)
        this.props.mastCalculate(this.state.mast)
    }

    render () {
        return (
            <select id='mastChoose' onChange={this.mastChoosing}>
                <option>Стрела</option>
                <option value='0'>Дуплекс без свободного ход</option>
                <option value='300'>Дуплекс со свободным ходом</option>
                <option value='500'>Триплекс со свободным ходом</option>
            </select>
        )
    }
}