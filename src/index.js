import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Cabin from './cabin';
import CostPrice from './cost-prise';
import FuelType from './fuel-type';
import Mast from './mast';
import Paint from './paint';
import ProductionYear from './production-year';
import Sideshift from './sideshift';

export default class Final extends React.Component {
  
  state = {
    initPrice: 0
  }

  calculatingInitPrice = () => {
    
  }

  costPriceCalculate = (price) => {
    this.setState({
      initPrice: parseFloat(this.state.initPrice) + parseFloat(price)
    })
  }

  sideshiftCalculate = (bool) => {
    if (bool) {
      this.setState({
        initPrice: parseFloat(this.state.initPrice) - 200
      })
    } else {
      this.setState({
        initPrice: parseFloat(this.state.initPrice) + 200
      })
    }
  }

  cabinCalculate = (bool) => {
    if (bool) {
      this.setState({
        initPrice: parseFloat(this.state.initPrice) - 300
      })
    } else {
      this.setState({
        initPrice: parseFloat(this.state.initPrice) + 300
      })
    }
  }

  paintCalculate = (bool) => {
    if (bool) {
      this.setState({
        initPrice: parseFloat(this.state.initPrice) - 500
      })
    } else {
      this.setState({
        initPrice: parseFloat(this.state.initPrice) + 500
      })
    }
  }

  mastCalculate = (price) => {
    this.setState({
      initPrice: parseFloat(this.state.initPrice) + parseFloat(price)
    })
  }

  render() {
    return (
      <div>
        <ul className='list'>
          <li><CostPrice costPriceCalculate={this.costPriceCalculate} /></li>
          <li><Sideshift sideshiftCalculate={this.sideshiftCalculate} /></li>
          <li><Cabin cabinCalculate={this.cabinCalculate} /></li>
          <li><Paint paintCalculate={this.paintCalculate} /></li>
          <li><Mast mastCalculate={this.mastCalculate} /></li>
          <li><ProductionYear /></li>
          <li><FuelType /></li>
        </ul>
        <h3>Финальная стоимость: {this.state.initPrice}</h3>
      </div>)
  };
}

ReactDOM.render(<Final />, document.getElementById('root'));




