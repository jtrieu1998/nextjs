import React from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';

class giftHome extends React.Component {
  passCheck(){
    let passText = document.querySelector("#pass").value;
    let numCheck = 0;
    switch(passText.toLowerCase()){
        case "tom":
        case "thomas":
        case "tommy":
            alert("Try again, So close!!!");
            break;
        case "justin":
            location.replace("./photo_gallery/PhotoGallery");
            break;
        default:
            alert("That's not even one of your sons!!!");
            break;
    }

          
  }



  render(){
    return (
      <Layout>
        <Head>
          <title>Check Splitter</title>
          <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
        </Head> 
        <div>
        <h1>Please enter the name of your favorite son</h1>
        </div>
          <input id="pass" className="form-control mr-sm-2" type="text" placeholder="Password"/>
          <br></br>
          <button onClick={this.passCheck}>
            Enter
          </button>
      </Layout>
    );
  }
}
export default giftHome;