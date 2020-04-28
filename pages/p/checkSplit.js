import React from 'react';
import Layout from '../../components/Layout';
// import '../_apps.js';

class checkSplit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0.0,
      tip: 0.0,
      tax: 0.0,
      customers: 0
    };
  }

  setTotal = (n) => {
    this.setState({
      total: n.target.value
    });
  }

  setTip = (n) => {
    this.setState({
      tip: n.target.value
    });
  }

  setTax = (n) => {
    this.setState({
      tax: n.target.value
    });
  }

  setCustomers(value){
    this.setState({
      customers: value.target.value
    });
  }
    
  renderInputs = (value) => {
    const inputs=[];
      for(let i=0; i<value; i++){
        inputs.push(
          <div key={i}>
            <input id={i+1} type="text" onChange={(value)=>this.splitFormula(value,i)} placeholder={"Diner " + (i+1)}/>
            <p id={"customer-" + (i+1)}>this is poopy</p>
          </div>
        )
      }
    return inputs;
  }

  splitFormula = (cost, i) => {
    const dinerBill = (1+((this.state.tip + this.state.tax)/this.state.total)) * cost.target.value;
    // const cusP = 
    document.querySelector("#customer-" + (i+1)).innerText = dinerBill;
    // console.log("#customer-" + (i+1))
    // console.log(cusP);
    // console.log(dinerBill);
  };

  render() {
    return (
      <Layout>
        <div>
        <h1>Check Splitting App</h1>
        </div>
        <form>
          <input type="number" name="quantity" min="0" max="99999" onChange={(value)=>this.setTotal(value)} placeholder="Total"/>
          <br/>
          <input type="number" name="quantity" min="0" max="99999" onChange={(value)=>this.setTax(value)} placeholder="Tax"/>
          <br/>
          <input type="number" name="quantity" min="0" max="99999" onChange={(value)=>this.setTip(value)} placeholder="Tip"/>
          <br/>
          <input type="number" name="quantity" min="0" max="20" onChange={(value)=>this.setCustomers(value)} placeholder="Number of Diners"/>
          <div>
            {this.renderInputs(this.state.customers)}     
          </div>
        </form>
        
      </Layout>
    );
  }
}
export default checkSplit;