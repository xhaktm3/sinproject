import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Main.css';
import logo from '../mainlogo.svg';

class Main extends Component {

state = {
    list:[]
}

componentDidMount() {
    this.home();
}

home = () =>{
    fetch('http://whale.sparcs.org:52313/api/add/show',{
          method: "GET",
          headers: {'Content-type': 'application/json'},
        })
          .then(response => response.json())
          .then(response => {
            if(!response){
                alert("Let eat something");
            } else {
            this.setState({list:response});
            }
        });
    }


  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          <h1>
            BAP-YAK
          </h1>
          <Link to="/add">
            <img src={logo} className="Main-logo" alt="logo" />
          </Link>
        </header>
        <body className="Main-body">
          <div>
            {this.state.list.map(e => <div><h1>"{e.planname}"</h1> We eat <strong>{e.foodname}</strong> with {e.group.join(" , ")}</div>)}
          </div>
        </body>
      </div> 
    );
  }
}

export default withRouter(Main);