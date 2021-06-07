import React,{ Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Header';
import Maincontent from './Maincontent';
import Footer from './Footer';
import logo from './logo512.png';

class App extends Component{
  render(){
    return (
    <div className="App">
      <div class="container-fluid">
        <div class="row">
          <div className="col-12 col-sm-12 col-md-3 col-xl-2 bd-sidebar max-height ">
            <div className="sticky max-height-lg">
            <a href={process.env.PUBLIC_URL} > 
              <img src={logo} alt="Logo" className="mdWidth70"/>
            </a>
            <Navbar repos={this.state.repos} />
            </div>
          </div>
          <div className="col-12 col-md-9 col-xl-10 p-0 bg-dark text-light">
            <Banner />
            <Maincontent repos={this.state.repos}/>
            <Footer />
          </div>
        </div>
      </div>
      
      
    </div>
  )}
  state = {
    repos: []
  };
  componentDidMount() {
    fetch('https://scpdb-b827.restdb.io/rest/scpfiles', {
      method: 'GET',
      headers: {"content-type": "application/json",
      "x-apikey": "60a6339ce3b6e02545edaac6",
      "cache-control": "no-cache",}
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ repos: data })
    })
    .catch(console.log)
  }
}

export default App;