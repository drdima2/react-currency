import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc'



class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            currencyRate: {}
        }
        this.currency=['USD','RUB','CAD','PHP','GBP'];
        //this.getRate();
    }

    componentDidMount() {
        this.getRate();
    }

    getRate = ()=>{
        fetch('https://api.exchangeratesapi.io/latest')
            .then(data =>{
                return data.json();
                //console.log(data);
            })
            .then( data => {
                console.log(data);
                this.setState({date: data.date});
                let result = {};
                this.currency.map((item)=>{
                    result[item] = data.rates[item];
                    return null;
                })
                console.log(result);
                this.setState({currencyRate: result})
            })
    }

    render() {
    return (
        <div className="rate">
            <h3>Currency for {this.state.date}</h3>
            <div className="flex-container">

                {Object.keys(this.state.currencyRate).map( (key)=>{
                    return (
                        <div key={key} className="block flex-item">
                            <div className="currency-name">{key}</div>
                            <div className="currency-in">{this.state.currencyRate[key].toFixed(2)}*</div>
                            <div className="currency-out">* You can buy for 1 EUR</div>
                        </div>
                    );
                })}


            </div>
            <Calc rate={this.state.currencyRate}/>
        </div>
    );
  }
}

export default Rate;
