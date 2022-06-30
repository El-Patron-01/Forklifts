import React from 'react';

export default class CostPrice extends React.Component {

    state = {
        initPrice: 0
    }

    onInputChange = ({target}) => {
        this.setState({
            initPrice: target.value
        })
        console.log(this.state.initPrice)
    }

    onFormSubmit = (e) => {
        e.preventDefault();
       this.props.costPriceCalculate(this.state.initPrice) 
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input 
                    placeholder='Введите начальную цену' 
                    onChange={this.onInputChange}
                    />
                <button>Ok</button>
            </form>
        )
    }
}