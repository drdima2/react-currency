import React from 'react';
import './Calc.css';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 150,
            calcCurrency:'USD'
        }

    }

    calcRate = (e)=>{
        e.preventDefault();
    }

    setNumber = (e)=>{
        console.log(e.target.value);
        this.setState({number: e.target.value})
    }

    setCurrency = (e)=>{
        console.log('blabla');
        console.log(e.target.value);
        this.setState({calcCurrency: e.target.value})
    }


    render() {
        return (
            <div className="calculator">
                <h3>Exchange Calculator</h3>
                <div className="block">
                    <div>I want</div>
                    {/*<div><label><input type="radio" name="radio" defaultValue="0"/>Buy</label></div>*/}
                    {/*<div><label><input type="radio" name="radio" defaultValue="1"/>Sell</label></div>*/}
                    <div>
                        <form onSubmit={this.calcRate}>
                            <input type="number" defaultValue="150" onChange={this.setNumber}/>
                            <select name="" id="" onChange={this.setCurrency}>
                                {Object.keys(this.props.rate).map((key) => <option value={key} key={key} >{key}</option>)}
                            </select>
                        </form>
                    </div>
                    <div>
                        <h4>Result</h4>
                        <ul className="calc-res">
                            <li>{(  this.state.number / this.props.rate[this.state.calcCurrency] ).toFixed(2)}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calc;
