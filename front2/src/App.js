import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    username : '',
    password: ''
  }

  appChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  appEnter = (e) =>{
    if(e.key === 'Enter'){
      this.appClick();
    }
  }

  //로그인 시도 액션
  appClick = () =>{
    fetch('http://whale.sparcs.org:52313/api/auth/login',{
          method: "POST",
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            username : this.state.username,
            password : this.state.password,
          }),
        })
          .then(response => response.json())
          .then(response => {
            if (response.access_token) {
              localStorage.token = response.access_token;
              this.props.history.push("/main");
            } else if (!response.access_token) {
              alert("Check ID or Password again");
              this.props.history.push("/");
            }
          });
  }

  render() {
    const {appChange, appClick, appEnter} = this;
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            BAP-YAK
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <label for="username">아이디</label>
            <input className="username" placeholder="Username" name="username" type="text" value={this.state.id} onChange={appChange}/>
          </div>
          <div>
            <label for="password">비밀번호</label>
            <input className="password" placeholder="Password" name="password" type="password" value={this.state.password} onChange={appChange} onKeyPress={appEnter}/>
          </div>
            <button onClick ={appClick} className="App-login"> 
              LOGIN
            </button>
            <Link to="/signup">
              <button className="App-signup">Sign up</button>
            </Link>
        </header>
      </div> 
    );
  }
}

export default withRouter(App);