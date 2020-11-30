import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './Add.css';

class Add extends Component {

    state = {
        addplan :"",
        foodname:"",
        joinplan :"",
        username :""
    }

    componentDidMount() {
        this.getUser();
    }


    getUser = () =>{
        fetch('http://localhost:8080/api/auth/check',{
          method: "POST",
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            access_token : localStorage.token
          }),
        })
          .then(response => response.json())
          .then(response => {
            if (response.user.username) {
              this.state.username = response.user.username;
            } else if (!response.user.username) {
              alert("You have to log-in!");
              this.props.history.push("/");
            }
        });
    }

    appChange = (e) =>{
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    appClick1 = () =>{
    fetch('http://localhost:8080/api/add/create',{
          method: "POST",
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            planname : this.state.addplan,
            foodname : this.state.foodname,
            username : this.state.username,
          }),
        })
          .then(response => response.json())
          .then(response => {
            if (response) {
              this.props.history.push("/main");
            } else if (!response) {
              alert("Planname already exist");
              this.props.history.push("/add");
            }
          });
    }

    appClick2 = () =>{
    fetch('http://localhost:8080/api/api/join',{
          method: "POST",
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            planname : this.state.planname,
            username : this.state.username,
          }),
        })
          .then(response => response.json())
          .then(response => {
            if (response.ok) {
              this.props.history.push("/main");
            } else if (!response) {
              alert("No planname exists");
              this.props.history.push("/add");
            }
          });
  }

    render() {
    const {appChange, appClick1, appClick2} = this;
    return (
      <div className="Add">
        <header className="Add-header">
          <h1>
            BAP-YAK
          </h1>
          <div>
            <input placeholder="BAB-YAK name" name="addplan" type="text" value={this.state.addplan} onChange={appChange}/>
            <input placeholder="food name" name="foodname" type="text" value={this.state.foodname} onChange={appChange}/>
          </div>
          <div>
            <button className="plan1" onClick ={appClick1}> 
              Create
            </button>
          </div>
          <div>
            <input placeholder="BAB-YAK name" name="joinplan" type="text" value={this.state.password} onChange={appChange}/>
          </div>
          <div>
            <button className="plan2" onClick ={appClick2}> 
              Join
            </button>
          </div>
        </header>
      </div> 
    );
  }
}

export default withRouter(Add);