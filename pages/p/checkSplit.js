import React from 'react';
import Layout from '../../components/Layout';
// import '../_apps.js';
import Head from 'next/head';

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
            <input id={i+1} className="form-control mr-sm-2" type="text" onChange={(value)=>this.splitFormula(value,i)} placeholder={"Diner " + (i+1)}/>
            <p id={"customer-" + (i+1)}>0.0</p>
          </div>
        )
      }
    return inputs;
  }

  splitFormula = (cost, i) => {
    let tt = parseFloat(this.state.tip)+parseFloat(this.state.tax);
    let percent = cost.target.value/this.state.total;
    let cus = parseFloat(cost.target.value);

    // console.log("total: " + this.state.total + " tax: " + this.state.tax + " tip: " + this.state.tip + "cust: " + cost.target.value);
    // console.log("cost.target.value/this.state.total: " + cost.target.value/this.state.total);
    // console.log("this.state.tip + this.state.tax: " + x);
    // console.log(cost.target.value/this.state.total * x + cost.target.value);
    // console.log(cost.target.value);
    const dinerBill = (percent * tt ) + cus;
    // const cusP = 
    document.querySelector("#customer-" + (i+1)).innerText = dinerBill;
    // console.log("#customer-" + (i+1))
    // console.log(cusP);
    // console.log(dinerBill);
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>Check Splitter</title>
          <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
        </Head> 
        <div>
        <h1>Check Splitting App</h1>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="number" name="quantity" min="0" max="99999" onChange={(value)=>this.setTotal(value)} placeholder="Total"/>
          <br/>
          <input className="form-control mr-sm-2" type="number" name="quantity" min="0" max="99999" onChange={(value)=>this.setTax(value)} placeholder="Tax"/>
          <br/>
          <input className="form-control mr-sm-2" type="number" name="quantity" min="0" max="99999" onChange={(value)=>this.setTip(value)} placeholder="Tip"/>
          <br/>
          <input className="form-control mr-sm-2" type="number" name="quantity" min="0" max="20" onChange={(value)=>this.setCustomers(value)} placeholder="Number of Diners"/>
          <br></br>
        </form>
        <div>
            {this.renderInputs(this.state.customers)}     
          </div>
        
      </Layout>
    );
  }
}
export default checkSplit;